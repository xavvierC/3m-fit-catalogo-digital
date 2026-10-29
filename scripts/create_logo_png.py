from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "catalog" / "p01-i14.jpg"
TARGET = ROOT / "assets" / "catalog" / "logo-3m-fit.png"


def main():
    with Image.open(SOURCE).convert("RGBA") as image:
        pixels = image.load()

        for y in range(image.height):
            for x in range(image.width):
                red, green, blue, _ = pixels[x, y]
                brightness = max(red, green, blue)
                if brightness <= 28:
                    pixels[x, y] = (red, green, blue, 0)
                elif brightness <= 58:
                    alpha = round((brightness - 28) / 30 * 255)
                    pixels[x, y] = (red, green, blue, alpha)

        alpha_bounds = image.getchannel("A").getbbox()
        if alpha_bounds is None:
            raise ValueError("No visible logo pixels found")

        left, top, right, bottom = alpha_bounds
        padding_x = round((right - left) * 0.025)
        padding_y = round((bottom - top) * 0.08)
        crop_box = (
            max(0, left - padding_x),
            max(0, top - padding_y),
            min(image.width, right + padding_x),
            min(image.height, bottom + padding_y),
        )
        image.crop(crop_box).save(TARGET, "PNG", optimize=True)

    print(f"created={TARGET}")


if __name__ == "__main__":
    main()
