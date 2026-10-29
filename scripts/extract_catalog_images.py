from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PDF = Path(
    r"C:\Users\xavie\.codex\codex-remote-attachments\01a1878b-1f3c-7e72-8c55-6f8891393928\ADBB7C11-6FDB-4B66-A8D7-7F017C96F758\1-90D-Fit-Suplementos-15-.pdf"
)
ASSETS = ROOT / "assets" / "catalog"
CONTACT_SHEET = ROOT.parent / "tmp" / "pdfs" / "catalog-contact-sheet.jpg"


def load_font(size: int):
    for candidate in (
        r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arial.ttf",
    ):
        path = Path(candidate)
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def main():
    ASSETS.mkdir(parents=True, exist_ok=True)
    CONTACT_SHEET.parent.mkdir(parents=True, exist_ok=True)
    reader = PdfReader(str(PDF))
    exported = []

    for page_number, page in enumerate(reader.pages, start=1):
        for image_number, image in enumerate(page.images, start=1):
            suffix = Path(image.name).suffix.lower() or ".jpg"
            filename = f"p{page_number:02d}-i{image_number:02d}{suffix}"
            output = ASSETS / filename
            output.write_bytes(image.data)
            try:
                with Image.open(output) as opened:
                    exported.append((filename, opened.convert("RGB").copy()))
            except Exception:
                continue

    tile_width, tile_height = 210, 250
    columns = 5
    rows = (len(exported) + columns - 1) // columns
    sheet = Image.new("RGB", (columns * tile_width, rows * tile_height), "#f2f0ed")
    draw = ImageDraw.Draw(sheet)
    label_font = load_font(16)

    for index, (filename, image) in enumerate(exported):
        x = (index % columns) * tile_width
        y = (index // columns) * tile_height
        thumb = ImageOps.contain(image, (tile_width - 24, tile_height - 58))
        thumb_x = x + (tile_width - thumb.width) // 2
        thumb_y = y + 10
        sheet.paste(thumb, (thumb_x, thumb_y))
        draw.text((x + 10, y + tile_height - 38), filename, fill="#111111", font=label_font)

    sheet.save(CONTACT_SHEET, quality=92)
    print(f"exported={len(exported)}")
    print(f"assets={ASSETS}")
    print(f"contact_sheet={CONTACT_SHEET}")


if __name__ == "__main__":
    main()
