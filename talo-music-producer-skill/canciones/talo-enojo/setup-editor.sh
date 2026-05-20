#!/bin/bash
# Setup script: Copia clips y audio a editor-remotion

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
CLIPS_SOURCE="$SCRIPT_DIR/clips"
AUDIO_SOURCE="$SCRIPT_DIR/audio"
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
CLIP_NUM=1
for reel_num in 1 2 3 4 5 6; do
  REEL_DIR="$EDITOR_ROOT/public/assets/reel$reel_num"
  CLIP_FILE="$CLIPS_SOURCE/clip$CLIP_NUM.mp4"
  if [ -f "$CLIP_FILE" ]; then
    cp "$CLIP_FILE" "$REEL_DIR/" 2>/dev/null || true
    echo "   ✅ Reel $reel_num clips copied (clip$CLIP_NUM.mp4)"
    CLIP_NUM=$((CLIP_NUM + 1))
  else
    echo "   ⚠️  No clip found for Reel $reel_num at $CLIP_FILE"
  fi
done

echo ""

# Copy audio
echo "🎵 Copying audio..."
AUDIO_FILE=""
if [ -f "$AUDIO_SOURCE/talo-enojo.mp3" ]; then
  AUDIO_FILE="$AUDIO_SOURCE/talo-enojo.mp3"
elif [ -f "$AUDIO_SOURCE/0518.MP3" ]; then
  AUDIO_FILE="$AUDIO_SOURCE/0518.MP3"
fi

if [ -n "$AUDIO_FILE" ]; then
  cp "$AUDIO_FILE" "$EDITOR_ROOT/public/assets/audio/talo-enojo.mp3"
  echo "   ✅ Audio file copied"
else
  echo "   ⚠️  Audio file not found yet"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "  1. cd editor-remotion"
echo "  2. npm run dev  (preview in browser)"
echo "  3. npx remotion render TaloReel1 out/reel1.mp4  (render to file)"
