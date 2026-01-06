# Favicon Setup for Copper Screen

## Current Status
- ✅ SVG favicon created: `/public/favicon.svg`
- ✅ Favicon metadata added to `app/layout.tsx`
- ✅ Manifest file configured with icon references

## To Complete Favicon Setup

You'll need to create the following favicon files from your logo:

### Required Files:
1. `favicon.ico` (16x16, 32x32 multi-size ICO file)
2. `favicon-16x16.png`
3. `favicon-32x32.png`
4. `apple-touch-icon.png` (180x180)
5. `android-chrome-192x192.png`
6. `android-chrome-512x512.png`
7. `safari-pinned-tab.svg`

### How to Generate:
1. Use your `logo-new.png` as the source
2. Use online tools like:
   - https://realfavicongenerator.net/
   - https://favicon.io/
   - https://www.favicon-generator.org/

### Current SVG Favicon:
The SVG favicon (`/public/favicon.svg`) is already created with Copper Screen branding colors:
- Background: #B87333 (Copper)
- Icon: White with copper accents
- Modern, scalable design

### Browser Support:
- Modern browsers will use the SVG favicon
- Older browsers will fall back to ICO/PNG files
- Mobile devices will use the appropriate touch icons