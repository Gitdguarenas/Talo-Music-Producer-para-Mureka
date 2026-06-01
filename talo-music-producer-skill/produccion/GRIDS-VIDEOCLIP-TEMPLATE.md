# TEMPLATE — Grids de Videoclip (Nano Banana 2 + Seedance 2)

> Copia esta estructura cada vez que armes un GRIDS.md de videoclip.
> NO usar este formato para reels (reels usan 9:16 + Kling 2.5 + clips individuales de 5s).

---

## DIFERENCIA CLAVE: GRIDS vs REELS

| | GRIDS (videoclip) | REELS (redes sociales) |
|--|---|---|
| **Formato** | 16:9 landscape | 9:16 vertical |
| **Herramienta imagen** | Nano Banana 2 (grid de 12 frames) | Nano Banana Pro (imagen individual) |
| **Herramienta video** | Seedance 2 | Kling 2.5 (Start Frame → 5s) |
| **Ensamblaje** | CapCut | Video Combiner (Magnific Spaces) |
| **Duración por clip** | 5s–20s (según sección de canción) | 5s fijos |
| **Referencia de personaje** | @imgTalo, @imgRubi, etc. | Descriptor completo de personajes.md |

---

## ESTRUCTURA DE CARPETAS (por canción)

```
talo-[nombre-cancion]/
├── frames/     ← GRIDs generados con Nano Banana 2 (grid-01.png ... grid-N.png)
├── clips/      ← Clips generados con Seedance 2 (clip-01.mp4 ... clip-N.mp4)
└── audio/      ← Audio de la canción (nombre-cancion.mp3)
```

---

## TABLA DE CLIPS (cabecera del documento)

```markdown
## ESTRUCTURA DE CLIPS

| # | Sección de la canción | Duración |
|---|---|---|
| Clip 1 | [Intro + primera estrofa] | ~Xs |
| Clip 2 | [Chorus 1] | ~Xs |
| ...   | ...                     | ...  |
| **TOTAL** | | **~Xs ≈ [N] min** |
```

---

## FORMATO DE CADA GRID

Cada GRID tiene dos prompts: uno para **Nano Banana 2** (genera la imagen-cuadrícula de 12 frames) y uno para **Seedance 2** (anima esa cuadrícula y genera el clip).

### Prompt Nano Banana 2

```
NOMBRE_FRAME_EN_MAYÚSCULAS; Insignia: ●N; Formato 16:9, cuadrícula 12 frames, fondo off-white, bordes negros finos; Plano [tipo de plano] de [descripción visual]; [elementos del fondo y personajes]; [detalles emocionales]; Flecha punteada [dirección: hacia arriba / hacia abajo / hacia adelante / curva / orbital / etc.]; Subtítulo: [texto corto que aparece en el frame]
```

**Reglas:**
- 12 frames por grid (4 filas × 3 columnas = ●1 a ●12)
- El primero incluye el header de formato: `Formato 16:9, cuadrícula 12 frames, fondo off-white, bordes negros finos`
- Los siguientes frames NO repiten el header
- Cada frame separado por **dos saltos de línea**
- Personaje siempre referenciado como `@imgTalo`, `@imgRubi`, `@imgTuco`, `@imgNuti`
- Flecha punteada indica dirección del movimiento o narrativa del frame

**Tipos de plano comunes:**
- `Plano general de` — muestra escenario completo
- `Plano medio de` — personaje desde cintura arriba
- `Plano medio cercano de` — desde el pecho
- `Plano close-up de` / `Plano detalle de` — detalle específico
- `Plano desde arriba (bird's eye) de` — vista cenital

### Prompt Seedance 2

```
Scene: One continuous shot — [descripción breve del tipo de escena y mood general]

Character: Use @imgTalo as the character we follow throughout the scene, maintaining its appearance and scale exactly as it appears in the reference. [Agregar otros personajes si aplica.]

Character Motion: Use the grid reference to follow the movement sequence exactly: [lista de movimientos clave en orden → → →]

The scene begins [descripción de la apertura].

Direction: [Descripción de movimientos de cámara: ángulos, planos, transiciones, cómo se mueve la cámara durante la escena]

Overall Tone: [Descripción del mood emocional, energía, ritmo, atmósfera]

SoundFx: Base ambience of [ambiente base]. Specific sounds: [sonidos específicos]. Optional music: [descripción de música sugerida]. [Cómo termina el clip de audio]
```

---

## ENSAMBLAJE FINAL EN CAPCUT

```
1. Importar clip-01.mp4 → clip-N.mp4 en orden
2. Ajustar duración según tabla de estructura
3. Agregar transiciones suaves (crossfade 0.5s)
4. Importar audio ([nombre-cancion].mp3) y sincronizar con inicio
5. Exportar: MP4, 1080×1920 (si vertical) o 1920×1080 (si landscape), 30fps
```

---

## EJEMPLO MÍNIMO DE UN GRID COMPLETO

### GRID 1 — Intro (~Xs)

**Nano Banana 2:**
```
NOMBRE_A; Insignia: ●1; Formato 16:9, cuadrícula 12 frames, fondo off-white, bordes negros finos; Plano general de [escenario]; @imgTalo [acción]; [detalles]; Flecha punteada hacia adelante; Subtítulo: [texto]


NOMBRE_B; Insignia: ●2; Plano medio de @imgTalo [acción]; [detalles]; Flecha punteada curva; Subtítulo: [texto]

[...10 frames más...]
```

**Seedance 2:**
```
Scene: One continuous shot — [descripción]

Character: Use @imgTalo as the character we follow throughout the scene, maintaining its appearance and scale exactly as it appears in the reference.

Character Motion: Use the grid reference to follow the movement sequence exactly: [movimiento 1] → [movimiento 2] → [movimiento 3]

The scene begins with [apertura].

Direction: [dirección de cámara]

Overall Tone: [mood]

SoundFx: Base ambience of [ambiente]. Specific sounds: [sonidos]. Optional music: [música]. [Final de audio]
```
