---
name: magnific-spaces-nodes-overview
description: |
  Use this skill when generating or reasoning about Magnific Spaces (formerly Freepik
  Spaces) workflows. It explains how nodes work, how they connect, and the canonical
  workflow patterns for creative output pipelines. Load this skill any time you need
  to design, describe, or output a Magnific Spaces workflow.
---

# Magnific Spaces — How Nodes Work

## Core Mental Model

A workflow is a directed graph of nodes on an infinite canvas, flowing left → right.
Every node has **inputs** (left side, ports) and **outputs** (right side, ports).
You chain nodes by dragging from an output port to a compatible input port.
Ports are **color-coded by data type** — connections only snap if types match (image to image, text to text, video to video, audio to audio, list to compatible).

Two foundational rules:
- **Output ports** accept unlimited connections — one output can feed many downstream nodes.
- **Input ports** accept one connection by default — connecting a new source replaces the old one. Some inputs accept multiple (e.g., reference image ports).
- **Dashed lines** between nodes mean batch data flowing from a List node.

Add nodes with **Spotlight** (press `Space` or `/`), the left node panel, or the canvas `+` button. Spotlight has two kinds of entries:
- **Base nodes** (e.g., Image Generator) — generic, pick the model later.
- **Model variants** (e.g., Image Generator with Flux Ultra) — pre-configured with a specific model, skips a step.

There are two execution categories:
- **Generative AI nodes** — have a Run button, consume credits, generate new content. Cost shows live on the Run button.
- **Non-generative nodes** — manual or organizational tools (Text, Upload, Group, Sticky note), free.

Three run modes on every node:
- **Run** — executes only this node using current inputs.
- **Run Downstream** — runs this node + everything downstream of it (skips upstream re-execution; saves credits when iterating).
- **Run All** — executes the full chain from inputs to outputs.

Most generator nodes have a **Number of generations** control (2–10) — produce multiple results in one run, browse via arrow buttons in the node history.

---

## Node Categories & Roles

### 1. INPUT / IMPORT NODES — "Bring content in"

Collect data from users or inject static assets into the workflow.

| Node | Type | Use |
|------|------|-----|
| Upload | image/video/audio | Bring files in directly from your computer |
| Media | image/video/audio | Pick from personal history, Magnific stock library, or Community library |
| Text | text | Write prompts, scripts, or notes — supports rich formatting and `@mentions` to dynamically reference other nodes' outputs |

**Rule:** Every workflow starts with at least one Input node. The Text node is also a source node — it has no inputs, only a text output that can feed many generators.

---

### 2. ASSISTANT — "Your prompt engineer / context bridge"

The Assistant node is the universal LLM helper. Adapts to whatever you connect to it.

| Capability | Use |
|-----------|-----|
| Prompt engineering | Refine rough instructions into optimized prompts before feeding generators |
| Image / video description | Connect media to the Media port → get a detailed text description |
| Script writing | Draft voiceover scripts from a brief or from a connected product image |
| Multi-input synthesis | Give it an image + reference track + script brief at once — it builds a unified prompt from all of them |
| Batch prompt generation | Connect a List of topics → get one prompt per topic |

Inputs: **Media** (images), **Texts**, **Video**.
Modes: **Simple response** (single text) or **As list** (structured list — pairs perfectly with downstream batch nodes).
Set a **System Prompt** to shape the AI's personality (e.g., "You are a professional prompt engineer specializing in photorealistic image descriptions").

Available LLM providers: Claude, Gemini, GPT, others — selectable as variants in Spotlight.

**Key insight:** The Assistant is the "context bridge" of Spaces — the more references you wire into it, the sharper the downstream generation.

---

### 3. IMAGE NODES — "Generate, transform, polish images"

Image nodes split into **generators** (create from scratch) and **processors** (transform existing images).

| Node | Input | Output | Use |
|------|-------|--------|-----|
| Image Generator | Prompt + optional reference images | Image | Text-to-image with 40+ AI models in dropdown (Flux, Mystic, Imagen, Nano Banana, GPT Image, Ideogram, Recraft, Seedream, Runway, HiDream, Classic) |
| Image Upscaler | Image + optional prompt | Image | Two modes: **Creative** (AI-enhanced detail) and **Precision** (faithful scaling). Output up to 10K |
| Variations | Image + optional prompt | Grid of image variations | Modes: Angles / Expressions / Demographics / Storyboard / Custom |
| Reframe (Change Camera) | Image | Image | New perspectives — front, side, top, custom angles. Great for product photography and depth |
| Style Transfer | Image + reference image/style | Image | Apply artistic styles while preserving structure |
| Relight | Image + prompt / reference / lightmap | Image | Change scene lighting using prompt, reference image, or custom lightmap |
| Image Editor | Image | (terminal — no output) | Umbrella node with: Crop, Remove Background, Expand, Color grading, AI auto-crop. Edited result becomes a new creation |
| Image to Prompt | Image | Text | Reverse-engineer a prompt from any image |
| Inpainting (Ideogram) | Image + Mask + prompt | Image | Mask-based edits in specific regions |

The **Image Editor is a terminal node** (no output ports). Place it at the end of an image chain. To skip the umbrella selector, search Spotlight directly for "Crop" or "Remove Background".

---

### 4. VIDEO NODES — "Generate, combine, enhance video"

| Node | Input | Output | Use |
|------|-------|--------|-----|
| Video Generator | Prompt + optional Start Frame + optional End Frame + optional reference video | Video | 40+ models from Kling, MiniMax/Hailuo, Runway, Google Veo, Sora, PixVerse, Seedance, Wan, Luma, LTX Studio, Omni Human |
| Video Combiner | Multiple video clips + optional audio | Video | Joins clips in sequence and lays audio on top, in one run |
| Video Upscaler | Video | Video | Three modes: **Topaz** (professional), **Magnific AI** (creative enhancement, presets like Artistic), **Sharpen** (quick fix). Up to 4K, FPS Boost available |
| Video Audio Mix | Video + voiceover + music + SFX | Video | Final audiovisual combine — typically the last node before export |

**Frame ports:** Video Generators have **Start Frame** and **End Frame** input ports. Connect an Image Generator output → Start Frame for image-to-video. Connect End Frame of clip A → Start Frame of clip B for smooth transitions when stitching scenes through Video Combiner.

Advanced/debug-mode video nodes (functionality may shift): Extract Frames, Frames to Video, Edit Video.

---

### 5. AUDIO NODES — "Voice, music, sound design"

Three generators that take text and output audio. They follow the same node logic as everything else — connect, run, flow.

| Node | Use |
|------|-----|
| Voiceover | Text-to-speech using ElevenLabs (v3 supports audio tags like `[urgent]`, `[whispers]`, `[breathing]`) and Google. Hundreds of voices, controls for speed/stability/voice similarity, up to 10 takes per run |
| Music Generator | Text-to-music with Google Lyria and similar — describe genre, tempo, instrumentation, emotional function |
| Sound Effects | Text-to-SFX — specify whether you need a looping texture or a single event, always include duration |

All three feed naturally into **Video Audio Mix** or directly into **Video Generator** sound layers.

---

### 6. DESIGNER NODE — "Layout studio inside Spaces"

A full graphic design editor embedded in Spaces. Multi-page layouts, with connected nodes feeding **dynamic content** into the design.

- Connect images, text, or lists from the canvas → they appear inside Designer as connectable assets.
- Inside Designer: **fuchsia frame** = dynamic element (linked to a node), **blue frame** = static element.
- Replace dynamic content via the Replace icon — every linked element updates everywhere at once.
- When you connect two or more lists, Designer auto-pairs them by index (image #1 with text #1, etc.).
- One layout × N list items = N rendered designs per page; N pages × N items = N × pages outputs.

**Critical rule:** All connected lists must have the same number of items.

Designer is the "creative studio" inside Spaces — use it to assemble final deliverables (banners, social ads, multi-page posts) without leaving the canvas.

---

### 7. UTILITY NODES — "Scale, organize, annotate"

| Node | Use |
|------|-----|
| List | Batch processing engine. Fill manually, paste a column, or generate via Assistant. Connect to Image Generator / Video Generator / Variations / Voiceover / Designer → one run produces one output per list item |
| Group | Visual container — drag nodes inside to bundle. Groups expose **dynamic output ports** based on contents (an Image Generator inside = image port appears). Move the group, all children move |
| Sticky note | Free-form annotations on the canvas. Colors: yellow / blue / green / pink / purple / orange. Sizes: Small / Medium / Large |
| Stickers | Emoji markers — quick visual flags for "look here", "needs review", etc. |

---

### 8. WORKFLOW APPS — "Reusable, shareable workflows"

Once a workflow is solid, save it as a **Workflow App**: it becomes a single reusable block with defined inputs and outputs — your own custom AI tool. Teammates run it in one click; it can also be executed via the Magnific API (Enterprise tier).

---

## Canonical Workflow Patterns

### Pattern A — Simple text-to-image
```
[Text] → [Image Generator]
```

### Pattern B — Assistant-enhanced prompt
```
[Text (rough idea)] → [Assistant (refine prompt)] → [Image Generator]
```

### Pattern C — Image-to-video (preferred over text-to-video)
```
[Image Generator] ──→ Start Frame ──→ [Video Generator]
[Text (motion prompt)]                 →
```

### Pattern D — Generate → upscale → finish
```
[Text] → [Image Generator @1K] → [Image Upscaler @4K] → [Image Editor (Crop)]
```

### Pattern E — Style transfer without LoRA
```
[Upload (style reference)] → [Assistant (describe style)] → [Image Generator (new content in same style)]
```

### Pattern F — Talking character
```
[Image Generator (portrait)] ──┐
[Text (script)] → [Voiceover] ─┴→ [Video Generator with Omni Human / Kling Motion Control]
```

### Pattern G — Batch with List
```
[List (10 prompts)] → [Image Generator] → 10 images in one run → [Image Upscaler]
```

### Pattern H — Multi-format campaign
```
[List (1:1, 9:16, 16:9, 4:5)]  ──┐
[Text (single prompt)]           ──→ [Image Generator] → 4 versions, one per ratio → [Designer]
```

### Pattern I — Full audiovisual pipeline
```
[Text (scene 1)] → [Image Generator] → [Video Generator (clip 1)] ─┐
[Text (scene 2)] → [Image Generator] → [Video Generator (clip 2)] ─┤
[Text (scene 3)] → [Image Generator] → [Video Generator (clip 3)] ─┤
                                                                    ├→ [Video Combiner]
[Text (script)] → [Voiceover] ─────────────────────────────────────┤    ↓
[Text (mood)]   → [Music Generator] ───────────────────────────────┤   [Video Audio Mix] → [Video Upscaler @4K]
[Text (FX)]     → [Sound Effects] ─────────────────────────────────┘
```

### Pattern J — Designer-driven multi-format export
```
[Image Generator (hero visual)] ─┐
[List (headlines × 4)]           ──→ [Designer (4 pages: 1:1, 9:16, 16:9, story)] → 16 final designs
[List (CTAs × 4)]                ─┘
```

---

## Building Best Practices

- **Start at 1K, finish at 4K.** Generate fast at low resolution, pick the best result, then upscale. Saves time and credits.
- **Lock the seed when iterating.** With seed locked, only your prompt changes affect the output — much easier to compare variations.
- **Use Run Downstream** when changing a downstream model — it skips re-running upstream nodes that haven't changed (saves credits).
- **Use the Assistant on the prompt port** when the user gives you a vague brief — it tightens prompts before the generator burns credits.
- **Image-to-video > text-to-video.** Generate a still first, feed it as Start Frame to the video model — far more visual control.
- **Use `@mentions` in Text nodes** to reference other nodes dynamically. When the source changes, your prompt updates automatically.
- **Use Lists for any batch.** 10 prompts, 5 aspect ratios, 8 languages — one List + one run.
- **Use Groups to organize complex workflows.** "Character Design" group, "Background Generation" group — keeps the canvas legible at scale.
- **Color-code Sticky notes** to mark phases (yellow = WIP, green = approved, pink = review).
- **Save reusable workflows as Workflow Apps** — one-click execution for the rest of the team.
- **Variants in Spotlight save a step** — search "Flux Ultra" instead of adding a generic Image Generator and picking the model.
- **Number of generations 2–10** — explore without re-running the node manually.

---

## Node type reference

- **Input:** Upload, Media, Text
- **AI Helper:** Assistant (Claude / Gemini / GPT / others)
- **Image Generation:** Image Generator (40+ models)
- **Image Processing:** Image Upscaler (Creative / Precision), Variations, Reframe / Change Camera, Style Transfer, Relight, Image Editor (umbrella: Crop, Remove Background, Expand, AI auto-crop, color grading), Inpainting, Image to Prompt
- **Video Generation:** Video Generator (40+ models with Start/End Frame ports)
- **Video Processing:** Video Combiner, Video Upscaler (Topaz / Magnific AI / Sharpen), Video Audio Mix, Extract Frames (debug), Frames to Video (debug), Edit Video (debug)
- **Audio:** Voiceover, Music Generator, Sound Effects
- **Layout:** Designer (multi-page graphic design editor with dynamic content)
- **Utility:** List, Group, Sticky note, Stickers
- **Reusability:** Workflow App (publish workflow as a single-block tool)
