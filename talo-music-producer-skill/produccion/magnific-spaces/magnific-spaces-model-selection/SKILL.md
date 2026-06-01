---
name: magnific-spaces-model-selection
description: |
  Use this skill whenever you need to recommend or assign a model to a node in
  Magnific Spaces (formerly Freepik Spaces). Covers image models, video models,
  upscalers, audio models, and Assistant LLMs. Always load this skill before
  setting the model on any AI node.
---

# Magnific Spaces — How to Choose Models

## Decision Framework

Ask three questions before picking a model:

1. **What is the output type?** (image / video / audio / text / vector)
2. **What is the primary use case?** (product shot / social ad / animation / character / editorial / batch variations / typography…)
3. **What constraints apply?** (credit budget / speed / style control / text in image / reference images / character consistency / resolution…)

Magnific Spaces is **model-agnostic**: each generator node has a dropdown of models, and you can pick a different one per node in the same workflow. Use the right tool for each job.

---

## IMAGE GENERATION MODELS

### Go-to families — cover 80% of cases

| Family | Best for | Notes |
|--------|----------|-------|
| **Flux** (Schnell, Dev, Pro, Pro Ultra, Flux 2 Klein/Flex/Pro/Max) | Photorealism, versatile generation, reference-image control | Schnell = cheapest/fastest; Pro Ultra & Flux 2 Max = highest quality; Flux 2 Flex = strong style/reference imitation |
| **Seedream** (3.0, 4.5, 5 Lite, 5) | High-resolution photoreal, complex scenes, image editing | Seedream 4.5 = flagship aesthetics; Seedream 5 = chain-of-thought reasoning + live web search |
| **Mystic** (Magnific proprietary) | Editorial / inspiration aesthetic, premium polish | Magnific's flagship — strongest fit for editorial/fashion/atmospheric work |
| **Google Imagen** (4, 4 Fast) | Photorealism, detailed text-to-image from scratch | Imagen 4 Fast = budget tier; Imagen 4 = full quality |
| **Google Nano Banana** (2, Pro) | Generation + natural-language editing in one model | Up to 5 subjects + 14 objects character-consistency in a single workflow; resolutions 1K to 4K |
| **Ideogram V3** | Text-in-image, accurate typography, character reference | Best-in-class for legible typography, supports style + character reference images |
| **Recraft V4** | Design-grade composition, branding, vectors | Top model for design-forward work; balanced composition, cohesive color, precise prompt following |
| **GPT Image** (1.5) | Pixel-perfect text rendering, transparent backgrounds | Resolutions up to 4K |
| **HiDream** | Diverse creative styles, artistic / editorial | Strong prompt adherence for non-photoreal work |
| **Classic** | Quick-and-cheap exploration | Magnific's basic tier — good for rapid iteration |
| **Runway** | Versatile, strong instruction following | High visual quality |

### Image model decision tree

```
Need an image?
  ↓
Start with Flux Pro 1.1 or Seedream 4.5 (versatile defaults)
  ↓
Need it cheaper / faster? → Flux Schnell or Classic
  ↓
Output not good enough?
  ├─ Need editorial / inspiration / Magnific aesthetic → Mystic
  ├─ Need photoreal at 4K with editing capability → Nano Banana Pro or GPT Image 1.5
  ├─ Need character consistency across many images → Nano Banana Pro (5 subjects + 14 objects) or Ideogram V3 + character reference
  ├─ Need text in image → Ideogram V3 (typography champ) or GPT Image 1.5
  ├─ Need design-grade composition / branding → Recraft V4
  ├─ Need style imitation from a reference → Flux 2 Flex or Seedream 4.5
  ├─ Need vector / SVG-style output → Recraft V4
  ├─ Need transparent background → GPT Image 1.5
  ├─ Need complex multi-element scenes → Flux 2 Pro/Max or Seedream 5
  └─ Need maximum prompt reasoning + live web grounding → Seedream 5
```

---

## IMAGE EDITING / TRANSFORMATION

These are nodes (not just models). Each node has its own model under the hood.

| Goal | Node / Tool |
|------|-------------|
| Conversational edit ("change the background", "swap object") | Image Generator with **Nano Banana Pro** or **Seedream 4.5** model |
| Mask-based inpainting | Inpainting node (Ideogram) |
| Outpainting / canvas expansion | Image Editor → Expand (Flux Pro / Seedream V4.5 / Ideogram engines) |
| Background removal | Image Editor → Remove Background |
| Crop / resize / aspect ratio | Image Editor → Crop (presets: 1:1, 4:3, 16:9, 3:2 + verticals + custom + Free + AI auto-crop) |
| Relighting (whole-scene lighting change) | Relight node — accepts prompt, reference image, or custom lightmap |
| Style transfer | Style Transfer node — predefined styles or custom reference image |
| Multi-angle perspective from one image | Reframe / Change Camera node — horizontal 0–360°, vertical −30° to 90°, zoom 0–10 |
| Auto crop based on subject | Image Editor → Crop with AI auto-crop |
| Reverse-engineer prompt from image | Image to Prompt node |

---

## VIDEO MODELS

Magnific Spaces' Video Generator supports **40+ models**. The high-impact families:

| Family | Best for | Notes |
|--------|----------|-------|
| **Kling** (2.5, O1 Pro/Std, Elements Pro/Std, Motion Control) | Most versatile cinematic / product video | Elements = multi-image composition; O1 = first/last frame interpolation; Motion Control = camera/VFX directing |
| **Google Veo** (3, 3.1, 3.1 Fast) | Premium cinematic with **audio generation included** | Veo 3.1 = current flagship; 3.1 Fast = budget version |
| **Runway** (Gen-4, Gen-4.5, Turbo) | Premium cinematic, fast turnaround | Gen-4.5 = top-tier; Turbo = fast iteration |
| **Sora 2** | Premium cinematic, complex scene logic | OpenAI's flagship video |
| **MiniMax / Hailuo** | Cost-effective, multi-shot capability | Hailuo 2.3 Fast at 768p included in unlimited on Premium+/Pro |
| **Seedance** (V1.5) | Reliable, cost-effective | ByteDance |
| **Wan** (2.2, 2.5) | Animated illustrations, broad use cases | Wan 2.2 at 480p included in unlimited on Premium+/Pro |
| **Luma Ray 2** | Animated illustrations, fast turnaround | Ray 2 Flash = budget |
| **PixVerse** | Stylized output, lipsync variant | |
| **LTX Studio** | Multi-shot narrative video | |
| **Omni Human 1.5** | Talking-character / lipsync from image + audio | Premium quality |

### Video workflow rule

> **Always prefer image-to-video over text-to-video.**
> Generate a still image first (Image Generator), connect it to **Start Frame** of the Video Generator. You get significantly more control over the visual output, character likeness, and scene composition.

### Video model decision tree

```
Need a video?
  ↓
Do you have a reference image?
  ├─ YES → Use as Start Frame → Kling 2.5 (default) or Veo 3.1
  └─ NO (text-to-video) → Kling 2.5 or Veo 3.1
  ↓
Special case?
  ├─ Talking character / lipsync → Omni Human 1.5 (image+audio) or Kling Motion Control
  ├─ Premium cinematic → Runway Gen-4.5 or Sora 2 or Veo 3.1
  ├─ Need audio in video → Veo 3 / Veo 3.1 (audio included)
  ├─ Start + End Frame interpolation → Kling O1 Pro or Std
  ├─ Multi-image element composition → Kling Elements Pro or Std
  ├─ Multi-shot / long sequence → MiniMax / Hailuo or LTX Studio
  ├─ Camera & VFX control → Kling Motion Control
  ├─ Fast / budget → Runway Gen-4 Turbo, Luma Ray 2 Flash, Hailuo Fast, Wan 2.2
  └─ Animated illustration look → Wan 2.5 or Luma Ray 2
```

---

## IMAGE UPSCALER (Magnific's signature tool)

The **Image Upscaler** node has two modes — both use Magnific's proprietary tech.

### Creative mode — AI-enhanced detail

Adds bold texture, imaginative variation, stylized texture. Best for stylized content, concept work, AI-driven exploration.

**Three engines** (pick by content type):
| Engine | Best for |
|--------|----------|
| **Illusio** | Illustrations, stylized art |
| **Sharpy** | Sharp detail, graphic content |
| **Sparkle** | Photos, photorealistic content |

**Four presets** (start here, then go Custom):
| Preset | Behavior |
|--------|----------|
| Subtle | Closest to original, gentle enhancement |
| Vivid | Punched-up texture and color |
| Wild | Maximum imaginative variation |
| Custom | Manual control via four sliders |

**Four sliders** in Custom mode:
- **Creativity** — how far the AI invents new detail
- **Resemblance** — how close output stays to original (inverse pull to Creativity)
- **HDR** — dynamic range punch
- **Fractality** — detail density / micro-texture

### Precision mode — Faithful upscaling

Upscales while staying close to the original. Best for clean production output where you want resolution gain without reinterpretation.

### When to use which

| Need | Mode |
|------|------|
| Final ad / hero asset that must stay loyal to the source | Precision |
| Concept exploration, stylization, artistic punch | Creative |
| Portrait / skin detail | Creative + Sparkle engine |
| Illustrated / drawn content | Creative + Illusio engine |
| Print-ready clean upscale | Precision (up to 10K) |

Upscaling is almost always the **second-to-last node** in an image chain, before the Image Editor or Designer.

---

## VIDEO UPSCALER

The **Video Upscaler** node has three modes:

| Mode | Best for |
|------|----------|
| **Topaz** | Professional final delivery, broadcast-ready output |
| **Magnific AI** | Creative enhancement, Artistic preset, AI-driven texture/grain |
| **Sharpen** | Quick fix, fastest, just needs a clean-up boost |

Magnific AI Video Upscaler controls (Custom mode): Creativity (0–100%), Flavor (Vivid / Natural), Sharpen (0–100%), Smart Grain (0–100%), Premium Quality (On/Off), Turbo Mode (On/Off), FPS Boost (On/Off). Output up to 4K (2160p) for clips ≤15s.

---

## AUDIO MODELS

| Node | Provider(s) | Best for |
|------|-------------|----------|
| **Voiceover** | ElevenLabs (v3 supports audio tags), Google | Narration, dialogue, dubbing. ElevenLabs v3 = control via `[urgent]`, `[whispers]`, `[breathing]`, `[laughing]` tags. Google = describe scenario in narrative form |
| **Music Generator** | Google Lyria and similar | Original tracks — be explicit about genre, tempo, instrumentation, emotional function |
| **Sound Effects** | Magnific SFX engine | Foley, ambient, single events. Always include duration and specify looping vs single event |

Audio nodes feed into **Video Audio Mix** (final combine over a video) or directly into a **Video Generator** that accepts audio.

---

## ASSISTANT (LLM) MODELS

The Assistant node supports models from **four providers** — selectable as variants in Spotlight (search "Claude", "Gemini", etc.):

- **Anthropic** — Claude family (great for nuanced prompt engineering, structured reasoning)
- **Google** — Gemini family (multimodal strength, fast)
- **OpenAI** — GPT family
- **Others** — additional providers added regularly

Use the Assistant for:
- Prompt enhancement (rough idea → optimized generator prompt)
- Copy generation (headlines, CTAs, ad copy, scripts)
- Translation / localization (great for List + Assistant batch flows)
- Image / video / audio description
- Multi-input synthesis (image + text + reference audio → unified prompt)

Set a **System Prompt** to shape behavior:
> "You are a professional prompt engineer specializing in editorial fashion photography. Output only the final prompt, no preamble."

Set output mode:
- **Simple response** — one text output
- **As list** — structured list output, perfect for feeding into a downstream List or directly into a batch generator

---

## Model Selection Quick-Reference Card

| Task | Recommended |
|------|-------------|
| Product shot, static ad | Flux Pro / Flux 2 Pro or Seedream 4.5 |
| Editorial / fashion / atmospheric | Mystic |
| Fast prototyping / cheapest | Flux Schnell or Classic |
| Text-in-image, accurate typography | Ideogram V3 or GPT Image 1.5 |
| Design-grade / branding / vectors | Recraft V4 |
| Character consistency (multi-scene) | Nano Banana Pro or Ideogram V3 + character reference |
| Conversational image edit | Nano Banana Pro |
| Mask-based inpainting | Ideogram Inpainting node |
| Outpainting | Image Editor → Expand (Seedream V4.5 or Flux Pro engine) |
| Background removal | Image Editor → Remove Background |
| Image-to-video product animation | Kling 2.5 |
| Premium cinematic video | Runway Gen-4.5 or Sora 2 or Veo 3.1 |
| Video with audio included | Veo 3.1 |
| Talking character / lipsync | Omni Human 1.5 |
| Multi-shot / long video | MiniMax / Hailuo or LTX Studio |
| Budget-friendly video | Runway Gen-4 Turbo, Luma Ray 2 Flash, Hailuo Fast |
| Image upscale (creative) | Magnific Upscaler — Creative + Sparkle (photo) / Illusio (illustration) / Sharpy (graphic) |
| Image upscale (faithful) | Magnific Upscaler — Precision |
| Video upscale (production) | Topaz |
| Video upscale (creative) | Magnific AI |
| Voiceover with emotional control | ElevenLabs v3 + audio tags |
| Multilingual voiceover at scale | Google Voiceover + List of languages |
| Original music | Music Generator with Google Lyria |
| Prompt engineering / Assistant | Claude (nuance) or Gemini (multimodal speed) |
