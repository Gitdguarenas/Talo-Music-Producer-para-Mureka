---
name: magnific-spaces-advanced-nodes
description: |
  Use this skill when a Magnific Spaces (formerly Freepik Spaces) workflow requires
  advanced capabilities beyond basic generation: List for batch processing, Designer
  for layout assembly, Variations for exploration, Assistant for prompt engineering,
  Video Combiner / Video Audio Mix for audiovisual production, Groups for organization,
  or Workflow Apps for reusable pipelines. Load this skill when the user's prompt
  involves ads, multi-element compositing, batch variations, multi-format output,
  multilingual campaigns, character animation, or saving a workflow for the team.
---

# Magnific Spaces — Advanced Tools & Nodes

## When to Move Beyond Basic Generation

A basic workflow is: Text → Image Generator → Export.

You need advanced nodes when:
- You're building **ad creatives** that combine multiple elements into a final layout
- You need **batch variations** (multiple prompts, ratios, languages, products through one model)
- You want **A/B variants** without rebuilding the workflow
- You need **multi-format output** (1:1, 9:16, 16:9, 4:5 in one run)
- You want to **animate characters** or add speech to images
- You need **full audiovisual production** (video + voiceover + music + SFX)
- You want **quality refinement** (upscaling, relighting, reframing)
- You want to **save the pipeline** for the team to reuse

---

## THE LIST NODE — The Batch Engine

### What it is

The List node is a structured collection of inputs (text prompts, image references, language codes, aspect ratios — anything) that feeds another node. Connect it to a generator and **every list item runs in one execution**, producing one output per item. This is Magnific Spaces' batch processing engine and the most powerful single feature for production at scale.

Visually: connections coming **out of a List** are drawn as **dashed lines** to indicate batch flow.

### When to use it

Any time you'd otherwise run the same generator multiple times manually:
- 10 banner variations
- 8 language localizations
- 4 aspect ratios for multi-platform
- 5 product names mapped to consistent lifestyle shots
- 12 scenes for a storyboard
- 20 character poses

### How to fill a List

Three ways:
1. **Manually** — type or paste items directly into the node.
2. **Assistant-generated** — connect Assistant set to "As list" output → auto-populates the List with structured items (e.g., "give me 10 prompt variations of a winter ad in different climates").
3. **Drag-and-reorder** — sequence matters when feeding into Storyboard / Video Combiner flows.

### List patterns

**Pattern: Multi-language ad**
```
[Image (base ad creative)] ──────────────────────────┐
[List ("Spanish", "French", "German", ...)]          ──→ [Designer (layout with dynamic text)] → 8 localized ads in one run
[Assistant (translate + adapt copy per language)] ──→ [List (translated copies)] ──┘
```

**Pattern: Multi-format social pack**
```
[List ("1:1 Instagram", "9:16 TikTok", "16:9 YouTube", "4:5 Feed")] ──→ [Image Generator] → 4 sized exports
[Text (single prompt)]                                              ──→
```

**Pattern: Product catalog with consistent style**
```
[List (product names: "ceramic mug", "linen napkin", "oak board")] ──→ [Image Generator] → 3 hero shots in same style
[Text (style description: "soft daylight, pastel tones, editorial")]──→
```

**Pattern: Character variations → video set**
```
[Variations (8 character poses)] ──→ [List (split outputs)] ──→ [Video Generator] → 8 character videos in one run
[Text (motion prompt)]            ──→
```

### List + Assistant power combo

Connect Assistant (mode: "As list") into a List node, then List into a generator:
```
[Brief (Text)] → [Assistant ("generate 10 prompt variations of [brief], each with different lighting") - mode: As list] → [List] → [Image Generator]
```
One run = 10 fully prompt-engineered variations.

### Tips

- **Use checkboxes in Lists to iterate quickly** — include or exclude items without deleting them. Test a subset before running the full batch.
- **Switch to grid view** for image lists — thumbnails make review much faster than file names.
- **Drag to reorder** — the processing order matches list order, which matters in Storyboard / Combiner flows.

---

## THE DESIGNER NODE — Your Layout Engine

### What it is

A full graphic design editor embedded inside Spaces. Multi-page layouts with **dynamic content** fed from connected nodes. The bridge between AI-generated assets and finished, branded design output.

### When to use it

Whenever your workflow generates multiple elements (visuals + copy + logos) that need to be **assembled into a final designed asset**:
- Ad creatives combining product shot + headline + CTA + logo
- Multi-page social packs (carousel, story, post in one design)
- Banners with overlay text driven by lists
- Product packaging with brand-aligned typography
- Multi-format exports (1:1 / 9:16 / 16:9 / 4:5) in a single run

### How to wire it

Connect any node output (image, text, list) → Designer adopts it as available **dynamic content**:

```
[Image Generator (background)]            ──→ [Designer]
[Image Editor → Remove Background (product)] → [Designer]
[Upload (logo)]                           ──→ [Designer]
[Text (headline)]                         ──→ [Designer]
[Assistant (CTA copy)]                    ──→ [Designer]
```

Inside Designer:
- **Fuchsia frame** = dynamic element (linked to a node — updates when source changes).
- **Blue frame** = static element (set inside Designer only).
- The **Replace icon** swaps any dynamic element; every linked instance updates at once.

### Multi-page + Lists = matrix output

When you connect 2+ Lists, Designer **auto-pairs by index**: image #1 with text #1, #2 with #2, etc.

For multi-format output, create one Designer page per format. Connected lists with N items × P pages = **N × P final designs** in one run.

> **Critical rule:** all connected lists must have the same number of items.

### Power patterns with Designer

**Pattern: A/B campaign at scale**
```
[Image Generator (4 hero options via Number of generations)] → [List] ─┐
[Assistant (5 headline variants - As list)]                  → [List] ─┤
[Upload (logo)]                                                      ──→ [Designer (1 page, 4×5 = 20 outputs)] → 20 ad variants
```

**Pattern: Localized social pack**
```
[List (5 languages)]            ──┐
[Assistant (translated headlines per language - As list)] ──┐
[Image Generator (1 visual)]    ──→ [Designer (3 pages: feed, story, banner)] → 5 lang × 3 formats = 15 final designs
```

### Designer behavior notes

- Saves **automatically** with version history.
- **Read-only when teammate is editing** — no overwrites, no lost versions.
- Designer is connectable downstream — feed any rendered page into another node (animation, upscale, export).

---

## THE VARIATIONS NODE — Visual Exploration

### What it is

Takes a single image and generates a **grid of visual variations** without re-prompting from scratch. Far faster than re-running the generator.

### Modes

| Mode | Output |
|------|--------|
| **Angles** | Same subject, different camera angles (front, ¾, side, top). Great for product photography |
| **Expressions** | Same character, different facial expressions. Great for emotion sheets and character design |
| **Demographics** | Same scene, diverse representation. Great for inclusive campaign art |
| **Storyboard** | Sequenced narrative shots driven by a story prompt |
| **Custom** | Free-form variation guided by a prompt |

### How to wire it

```
[Image Generator] → [Variations (mode: Expressions)] → [List (split outputs)] → [Image Upscaler] → [Designer]
```

### Use cases

- **Product photography** — Angles mode for multi-view e-commerce listings
- **Character design** — Expressions for emotion sheets
- **Storyboarding** — Storyboard mode with narrative prompt for visual sequences
- **Inclusive content** — Demographics mode for diverse marketing materials

---

## THE ASSISTANT NODE — Prompt Engineering at Scale

### What it does

Runs an LLM (Claude / Gemini / GPT / others) on connected inputs. Adapts to whatever you wire to it — text, images, video, audio descriptions — and outputs refined text.

### Inputs

- **Texts** — instructions, briefs, raw prompts
- **Media** — images for analysis or description
- **Video** — for video summarization

### Output modes

- **Simple response** — single text block
- **As list** — structured list, perfect for piping into a List or batch generator

### Power workflows

**Workflow: Style transfer without LoRA**
```
[Upload (style reference image)] → [Assistant (mode: Simple, "describe this image's style in detail for a Flux prompt")] → [Image Generator]
```

**Workflow: Brief → 10 prompt variants**
```
[Text (brief)] → [Assistant (mode: As list, "generate 10 prompt variations of this brief, each emphasizing a different mood")] → [List] → [Image Generator]
```

**Workflow: Multimodal context fusion**
```
[Upload (product image)] ──┐
[Upload (reference track)] ──→ [Assistant ("write a 30-sec voiceover script that matches this product's mood and the reference track's energy")] → [Voiceover]
[Text (campaign brief)]    ──┘
```

**Workflow: Translation at scale**
```
[List (target languages)] ──┐
[Text (master headline)]   ──→ [Assistant ("translate the headline into each language, output as list")] → [List] → [Designer]
```

### System Prompt

Set a System Prompt on the Assistant to shape behavior:
> "You are a senior copywriter for editorial fashion brands. Write headlines under 8 words, no exclamation points, evocative language. Output only the final lines."

System Prompts produce dramatically different results than a generic setup — invest in them when building reusable Apps.

---

## VIDEO PRODUCTION — Combiner, Audio Mix, Lipsync

### Standard image-to-video pipeline

```
[Text (visual brief)]          → [Image Generator]    ─→ Start Frame ─→ [Video Generator]
[Text (motion + camera brief)] ──────────────────────────────────────→
```

> **Always prefer image-to-video over text-to-video.** You get character likeness, scene composition, and visual control that text-to-video can't deliver.

### Multi-scene production with Video Combiner

The **Video Combiner** takes one or more video clips and a single audio track, joins clips in sequence, and lays audio on top — all in one run.

```
[Video Generator (clip 1)] (End Frame ─→ Start Frame of next) ─┐
[Video Generator (clip 2)] (End Frame ─→ Start Frame of next) ─┤
[Video Generator (clip 3)]                                      ─┤
                                                                 ├→ [Video Combiner]
[Voiceover]                                                     ─┤
```

**Smooth transitions tip:** wire **End Frame output** of clip A → **Start Frame input** of clip B before the Combiner. Clips bridge into each other instead of cutting.

### Full audiovisual mix

The **Video Audio Mix** node combines voiceover + music + SFX over a video. Typically the final node before upscale and export.

```
[Video Combiner] ──────────────────────┐
[Voiceover]      ──────────────────────┤
[Music Generator] ─────────────────────├→ [Video Audio Mix] → [Video Upscaler @4K] → [Image Editor (Crop)] / Designer
[Sound Effects]  ──────────────────────┘
```

### Lipsync / talking character

```
[Image Generator (portrait)] ──┐
[Voiceover or Upload audio]   ──→ [Video Generator with Omni Human 1.5 or Kling Motion Control]
[Text (optional motion brief)]──┘
```

Best practices:
- Use a clean, front-facing portrait with neutral expression
- Lipsync works on real photos and AI-generated character images
- Omni Human 1.5 = premium quality from image + audio
- Kling Motion Control = camera/VFX control with audio-driven motion

---

## GROUPS — Organize Complex Workflows

### What they are

Visual containers that bundle related nodes. Drag nodes inside a Group → they move together. Groups expose **dynamic output ports** based on contents (an Image Generator inside the group = the group exposes an Image port; add a Video Generator = a Video port appears).

### When to use

- Bundle a **mini-workflow as a unit** ("Character Design" group with Text + Image Generator + Variations + Upscaler)
- Connect the group's exposed port to multiple downstream branches — the group becomes a self-contained building block
- **Color-code by phase**: blue = inputs, green = generation, orange = post-processing
- Visual clarity at scale — one glance and you know what each section does

### Stickers + Sticky notes

Lightweight annotations:
- **Sticky notes** — comments, reminders, briefs (yellow / blue / green / pink / purple / orange; Small / Medium / Large)
- **Stickers** — emoji markers (⭐ for favorites, ⚠️ for needs-review, ✅ for approved). Quick visual flags without writing.

---

## RUN MODES — Save Credits While Iterating

Every node has three execution modes:

| Mode | Behavior |
|------|----------|
| **Run** | Execute only this node with current inputs. |
| **Run Downstream** | Run this node + everything downstream. **Skips upstream re-execution.** Use when you've changed only a downstream model — saves credits. |
| **Run All** | Execute the full chain from inputs to outputs. |

**Rule of thumb:** when iterating on the final stage (e.g., trying a different upscaler or a different video model), use **Run Downstream** from the node you changed. Don't re-burn credits regenerating the upstream image.

### Number of generations

Most generator nodes have a **2–10 generations** control. One run produces multiple results, all browsable in node history with arrow buttons. Use it to explore variations without running the node manually multiple times.

### @mentions

Inside any Text node, type `@` followed by a node name to reference another node's output dynamically. When the source changes, your prompt updates automatically. Crucial for workflows where a downstream prompt depends on an upstream Assistant output or generated description.

---

## WORKFLOW APPS — Reusable Pipelines

### What they are

Save any workflow as a **Workflow App** — it becomes a single block with defined inputs and outputs, like building your own custom AI tool. Teammates run it in one click. Enterprise tier can also execute it via the Magnific API (POST `/v1/ai/apps/{app-id}/run`).

### When to publish as an App

- Workflow proven and stable
- Teammates need to run it repeatedly with different inputs
- Brand-aligned production pipeline (logo, fonts, color palette baked in)
- Programmatic execution from your own systems (API)

### App input types

| Type | Accepts |
|------|---------|
| `creation` | Image URL, base64, or existing creation ID |
| `text` | Plain text string |
| `number` | Numeric value |
| `select` | Value from predefined dropdown options |

### Workflow → App pattern

```
[ App input: brand brief (text) ]       ──┐
[ App input: product photo (creation) ]  ──┤
[ App input: target language (select) ]  ──→ [Assistant (translate + brief)] → [Image Generator] → [Designer (brand template)] → [Image Upscaler] → [App output: final asset]
```

Once published: teammates plug in three inputs, click run, get the final branded asset. No canvas knowledge required.

---

## Advanced Workflow: Full Ad Production Pipeline

```
[Text (campaign brief)]                                                       ─┐
[Upload (product photo)]                                                       ─┤
[Upload (brand logo)]                                                          ─┤
[List (target languages: ES / FR / DE / IT / PT)]                              ─┤
                                                                                │
        ↓                                                                       │
[Assistant (refine brief into Image Generator prompt + translate headlines     │
            into each language + output As list)]                               │
        ↓                                                                       │
        ├──[Image Generator (background/lifestyle, Mystic for editorial)]   ──→ │
        ├──[Image Editor → Remove Background on product photo]               ──→ │
        ├──[List of translated headlines]                                     ──→ │
        ├──[Brand logo]                                                        ──→ │
                                                                                │
                                                ↓                              │
                              [Designer (3 pages: 1:1, 9:16, 16:9)]          ─→
                                                ↓
                                  → 5 langs × 3 formats = 15 final designs
                                                ↓
                                  [Image Upscaler — Precision @ 4K]
                                                ↓
                                  [Image Editor → Crop (final framing)]
                                                ↓
                                  [Save as Workflow App]
```

---

## Summary: Which Advanced Node Do I Need?

| Goal | Use |
|------|-----|
| Combine visual elements into a final designed layout | Designer |
| Batch process multiple inputs through one model | List |
| Explore variations from one image (angles/expressions/etc.) | Variations |
| Refine prompt / generate copy / translate / describe media | Assistant |
| Reverse-engineer a prompt from an image | Image to Prompt |
| Mask-based regional edits | Inpainting (Ideogram) |
| Background removal / crop / expand | Image Editor (Remove Background / Crop / Expand) |
| Change camera angle on a still | Reframe / Change Camera |
| Change scene lighting | Relight |
| Apply artistic style to image | Style Transfer |
| Animate a character speaking | Video Generator + Omni Human 1.5 / Kling Motion Control |
| Stitch multiple video clips | Video Combiner |
| Lay audio over video | Video Audio Mix |
| Production-grade video upscale | Video Upscaler — Topaz |
| Creative video upscale with grain/sharpness control | Video Upscaler — Magnific AI |
| Image upscale (creative, AI texture) | Image Upscaler — Creative (Sparkle/Illusio/Sharpy engine) |
| Image upscale (faithful to source) | Image Upscaler — Precision |
| Multi-format crop (1:1 / 9:16 / 16:9 / 4:5) | List of ratios + Image Generator OR Designer with multiple pages |
| Multilingual ad localization | List of languages + Assistant + Designer |
| Multiple model A/B comparison | One Text node feeding multiple Image Generators with different models |
| Organize complex canvas | Group + Sticky note + Stickers |
| Save credits while iterating downstream | Use **Run Downstream** instead of Run All |
| Make workflow reusable for the team | Save as Workflow App |
| Execute workflow programmatically | Workflow App + Magnific API (Enterprise) |
