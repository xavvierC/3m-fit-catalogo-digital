from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "assets" / "catalog"
TARGET_DIR = SOURCE_DIR / "png"
SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png"}


def main():
    TARGET_DIR.mkdir(parents=True, exist_ok=True)
    converted = 0

    for source in sorted(SOURCE_DIR.iterdir()):
        if not source.is_file() or source.suffix.lower() not in SUPPORTED_EXTENSIONS:
            continue

        target = TARGET_DIR / f"{source.stem}.png"
        with Image.open(source) as image:
            image.convert("RGBA").save(target, "PNG", optimize=True)
        converted += 1

    print(f"converted={converted}")
    print(f"output={TARGET_DIR}")


if __name__ == "__main__":
    main()
