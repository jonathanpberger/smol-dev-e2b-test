```python
from PIL import Image, ImageDraw, ImageFont
from app.e2b.dev.tictactoe.game import winner

def display_graphics():
    # Create a new image with a white background
    img = Image.new('RGB', (500, 500), color = (255, 255, 255))

    d = ImageDraw.Draw(img)

    # Load a font
    fnt = ImageFont.truetype('/Library/Fonts/Arial.ttf', 15)

    # Draw text, half opacity
    d.text((10,10), f"Congratulations {winner}, you won!", font=fnt, fill=(0, 0, 0))

    # Save the image in a file
    img.save('celebratory_graphics.png')
```