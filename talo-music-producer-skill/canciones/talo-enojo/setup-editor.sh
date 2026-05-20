#!/bin/bash
# Setup script: Copia clips y audio a editor-remotion

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../.." && pwd)"
CLIPS_SOURCE="$PROJECT_ROOT/talo-music-producer-skill/canciones/talo-enojo/clips"
AUDIO_SOURCE="$PROJECT_ROOT/talo-music-producer-skill/canciones/talo-enojo/audio"
EDITOR_ROOT="$PROJECT_ROOT/editor-remotion"

echo "🎬 Talo Setup — Copying clips and audio to Editor Pro Max"
echo ""
echo "Source clips: $CLIPS_SOURCE"
echo "Source audio: $AUDIO_SOURCE"
echo "Editor root: $EDITOR_ROOT"
echo ""

# Check if source folders exist
if [ ! -d "$CLIPS_SOURCE" ]; then
  echo "❌ Error: clips folder not found at $CLIPS_SOURCE"
  exit 1
fi

if [ ! -d "$AUDIO_SOURCE" ]; then
  echo "❌ Error: audio folder not found at $AUDIO_SOURCE"
  exit 1
fi

# Create destination folders
mkdir -p "$EDITOR_ROOT/public/assets/reel1"
mkdir -p "$EDITOR_ROOT/public/assets/reel2"
mkdir -p "$EDITOR_ROOT/public/assets/reel3"
mkdir -p "$EDITOR_ROOT/public/assets/reel4"
mkdir -p "$EDITOR_ROOT/public/assets/reel5"
mkdir -p "$EDITOR_ROOT/public/assets/reel6"
mkdir -p "$EDITOR_ROOT/public/assets/audio"

echo "📁 Destination folders created."
echo ""

# Copy clips
echo "📹 Copying clips..."
for reel_num in 1 2 3 4 5 6; do
  REEL_DIR="$EDITOR_ROOT/public/assets/reel$reel_num"
  if ls "$CLIPS_SOURCE"/reel$reel_num-*.mp4 1> /dev/null 2>&1; then
    cp "$CLIPS_SOURCE"/reel$reel_num-*.mp4 "$REEL_DIR/" 2>/dev/null || true
    echo "   ✅ Reel $reel_num clips copied"
  else
    echo "   ⚠️  No clips found for Reel $reel_num (waiting for generation)"
  fi
done

echo ""

# Copy audio
echo "🎵 Copying audio..."
if [ -f "$AUDIO_SOURCE/talo-enojo.mp3" ]; then
  cp "$AUDIO_SOURCE/talo-enojo.mp3" "$EDITOR_ROOT/public/assets/audio/"
  echo "   ✅ Audio file copied"
else
  echo "   ⚠️  Audio file not found yet (place talo-enojo.mp3 in $AUDIO_SOURCE)"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. cd editor-remotion"
echo "  2. npm run dev  (preview in browser)"
echo "  3. npx remotion render TaloReel1 out/reel1.mp4  (render to file)"
