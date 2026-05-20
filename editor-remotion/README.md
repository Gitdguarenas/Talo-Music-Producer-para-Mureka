# Editor Pro Max — Talo Instagram Reels

Remotion-based editor for creating and rendering Instagram reels for Talo y el Color del Enojo.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open http://localhost:3000 in your browser
4. Look for the "TaloReel1" composition

## Clips & Audio

This project expects clips and audio to be placed in:
- `public/assets/reel1/clip1.mp4`
- `public/assets/reel2/clip2.mp4`
- `public/assets/reel3/clip3.mp4`
- `public/assets/audio/talo-enojo.mp3`

Use the `setup-editor.sh` script in the parent directory to automatically copy files.

## Rendering

To render the reel to MP4:
```bash
npm run render -- TaloReel1 out/reel1.mp4
```

## Project Structure

```
src/
├── index.tsx           # Entry point
├── Root.tsx            # Composition registry
└── compositions/
    └── TaloReel1.tsx   # Instagram Reel composition
```
