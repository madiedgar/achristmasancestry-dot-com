# Advent Calendar Door Illustrations

This folder contains the illustration images that appear on hover for each advent calendar door.

## File Naming Convention

Save your illustration images with these exact filenames:

```
door-1.png   → Day 1 illustration
door-2.png   → Day 2 illustration
door-3.png   → Day 3 illustration
...
door-15.png  → Day 15 illustration
```

## Image Specifications

- **Format**: PNG (recommended for transparency) or JPG
- **Style**: Line drawings in green (#458352) on transparent or cream background
- **Aspect Ratio**: Can vary (images will be contained within door frames)
- **Size**: Recommend 500-800px width for optimal quality

## Current Illustrations Needed

You have the following source illustrations from Figma:
1. Desk with computer setup
2. Monstera plant in vase
3. Hanging plant/wreath
4. Plants on windowsill
5. Table/furniture with plants

### Suggested Cropping Strategy

To create 15 unique illustrations from your 5 source images:

**From Desk Scene:**
- door-1.png: Full desk setup
- door-2.png: Zoom on computer monitor
- door-3.png: Chair and plants on floor

**From Monstera Plant:**
- door-4.png: Full plant
- door-5.png: Close-up of leaves (top portion)
- door-6.png: Vase and lower stems

**From Hanging Plant:**
- door-7.png: Full hanging plant
- door-8.png: Close-up of foliage

**From Windowsill Plants:**
- door-9.png: Full windowsill scene
- door-10.png: Left side plants
- door-11.png: Right side plants

**From Table/Furniture:**
- door-12.png: Full table scene
- door-13.png: Plants on table (zoomed)
- door-14.png: Table legs and floor plants
- door-15.png: Full scene (alternate crop)

## Transition Styles

Three transition styles are available in `/src/app/globals.css`:

### Style 1: Simple Fade (DEFAULT - currently active)
- Smooth opacity transition
- Number fades out, illustration fades in
- Duration: 0.5s

### Style 2: Fade with Blur
- Illustration starts blurred and sharpens
- Number blurs as it fades out
- Duration: 0.6s
- **To activate**: Uncomment lines 32-49 in globals.css

### Style 3: Cross-fade with Scale
- Illustration scales up slightly as it fades in
- Number scales down as it fades out
- Duration: 0.7s
- **To activate**: Uncomment lines 52-69 in globals.css

## Testing

After adding your images:
1. Run `npm run dev`
2. Unlock doors by adjusting dates in `/src/lib/calendar-config.ts`
3. Hover over doors to see illustrations
4. Test on mobile by tapping doors

## Notes

- Images will automatically fill the inner door frame area
- Borders remain green (#458352) and don't change on hover
- Mobile: Tap to show illustration, tap again to open devotional
- Desktop: Hover to show illustration, click to open devotional
