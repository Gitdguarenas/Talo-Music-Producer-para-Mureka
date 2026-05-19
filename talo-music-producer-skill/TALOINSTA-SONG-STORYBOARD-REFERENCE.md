# TaloInsta — Generador de Guion y Storyboard Cinematográfico

> Skill para crear el guion visual completo y storyboard de una canción infantil TaloInsta,
> con prompts compatibles con **Magnific Freepik (Nano Banana Pro 2)** y **Seedance 2**.
> **Estilo visual:** 3D Pixar cartoon — como las imágenes de referencia de los personajes.

---

## PASO 0 — PREPARACIÓN OBLIGATORIA

**Antes de hacer cualquier otra cosa, ejecuta estos pasos en orden:**

1. **Lee `characters/personajes.md`** — Carga los perfiles visuales de todos los personajes. Si algún personaje tiene el descriptor marcado como `[pendiente]`, notifícalo al usuario antes de continuar y pídele que comparta la imagen del personaje.

2. **Lee `learnings/errors-log.md`** — Carga todas las reglas globales y errores frecuentes. Aplícalos durante toda la generación. No los menciones al usuario a menos que sean relevantes.

3. **¿El usuario compartió imágenes de personajes?** → Si hay imágenes adjuntas al mensaje, analízalas visualmente y actualiza `characters/personajes.md` con los descriptores exactos extraídos. Confirma al usuario qué actualizaste antes de continuar.

---

## PASO 1 — RECIBIR Y ENTENDER LA LETRA

La letra de la canción está en: `$ARGUMENTS`

Extrae de la letra:

### 1.1 Metadatos
- **Título:** (si está en el input, si no, propón uno)
- **Slug:** versión del título en minúsculas con guiones para usar como nombre de carpeta (ej: `la-cancion-del-arbol`)
- **Tema principal:** en una línea (ej: "la importancia de compartir")
- **Emoción dominante:** alegría / calma / ternura / emoción / curiosidad / mezcla

### 1.2 Estructura musical
Identifica y lista las secciones en orden. Usa solo las que realmente existan en la letra:
- INTRO
- VERSO 1
- CORO
- VERSO 2
- CORO (repetición)
- PUENTE
- OUTRO

Si la letra no tiene secciones explícitas, divídela lógicamente según cambios de emoción o tema.

### 1.3 Personajes relevantes
De los 4 personajes disponibles (Talo, Nuti, Tuco, Rubí), elige **solo los que tienen sentido narrativo** para esta canción. Mínimo 1, máximo 4. Justifica brevemente tu elección.

---

## PASO 2 — CREAR EL ARCO NARRATIVO

Escribe la **Sinopsis Visual** de la canción: 3 a 5 oraciones con inicio → nudo → desenlace. Positiva, cálida, para niños de 2 a 7 años.

---

## PASO 3 — PLANIFICAR LOS 8 FRAMES POR SECCIÓN

Para cada sección musical, crea exactamente **8 frames** de storyboard.

### Numeración
- Los frames se numeran de forma **continua en toda la canción** (no reiniciar por sección).

### Reglas por frame
- Cada frame = **1 acción o momento claro**
- Frame **1 de cada sección** = plano general o medio que establece contexto
- **Máximo 2 personajes** en el mismo frame salvo que la escena lo exija
- Los fondos dentro de una misma sección deben ser **consistentes**
- Las expresiones deben reflejar la **emoción de esa sección musical**

### Tipos de plano
| Plano | Cuándo usarlo |
|-------|--------------|
| **Plano general (PG)** | Establecer escenario, inicio de sección |
| **Plano medio (PM)** | Acciones corporales, interacciones |
| **Plano americano (PA)** | Personaje en movimiento |
| **Primer plano (PP)** | Expresiones faciales, emociones importantes |
| **Plano detalle (PD)** | Un objeto, una mano, flores — para énfasis |

---

## PASO 4 — GENERAR PROMPTS

Para cada frame, genera 2 prompts. Lee los descriptores de `characters/personajes.md` y cópialos literalmente — **nunca improvises la descripción de un personaje**.

**ESTILO OBLIGATORIO en todos los prompts de imagen:** `3D Pixar cartoon style, smooth 3D render, soft volumetric lighting`
**ESTILO OBLIGATORIO en todos los prompts de video:** `3D Pixar cartoon animation style, soft volumetric lighting`

---

### PROMPT DE IMAGEN — Magnific Freepik (Nano Banana Pro 2)

**Formato del prompt individual (por frame):**
```
[descriptor visual exacto del personaje desde personajes.md], [acción específica del frame], [nombre del escenario] background with [2-3 elementos visuales clave del fondo], soft volumetric lighting, vibrant saturated colors, 3D Pixar cartoon style, smooth 3D render, expressive character, TaloInsta universe, high quality
```

**Formato del prompt de GRID DE IMAGEN (1 imagen = 8 paneles numerados):**
```
storyboard sheet with 8 numbered panels in a 4x2 grid, [tema de la sección], [personajes con descriptor resumido], [escenario], soft volumetric lighting, vibrant colors, 3D Pixar cartoon style, smooth 3D render, each panel shows a different sequential moment, panels labeled 1 through 8, clean borders between panels, TaloInsta universe
```

**Notas para Magnific:**
- Prompts en **inglés**, lenguaje natural — sin sintaxis Midjourney (`--ar`, `--v`, etc.)
- Mantén el descriptor del personaje **exactamente igual** en todos los frames de una sección
- Para el color de Talo: incluye el color del momento (ej: `Talo the chameleon in bright yellow`)

---

### PROMPT DE VIDEO — Seedance 2

**Formato del prompt individual (por frame → clip):**
```
[descriptor visual del personaje], [acción específica animada], [escenario con elementos de fondo], [movimiento de cámara], 3D Pixar cartoon animation style, soft volumetric lighting, smooth fluid motion, [X] seconds
```

**Formato del prompt de GRID DE VIDEO (1 prompt = secuencia completa de 8 escenas en orden):**
```
3D Pixar cartoon animation, TaloInsta universe, [personaje(s)] with [descriptor visual resumido], continuous sequence of exactly 8 scenes in strict order without skipping:
Scene 1 — [acción + escenario + movimiento de cámara], [duración]s,
Scene 2 — [acción + escenario + movimiento de cámara], [duración]s,
Scene 3 — [acción + escenario + movimiento de cámara], [duración]s,
Scene 4 — [acción + escenario + movimiento de cámara], [duración]s,
Scene 5 — [acción + escenario + movimiento de cámara], [duración]s,
Scene 6 — [acción + escenario + movimiento de cámara], [duración]s,
Scene 7 — [acción + escenario + movimiento de cámara], [duración]s,
Scene 8 — [acción + escenario + movimiento de cámara], [duración]s.
Smooth transitions between each scene, consistent character design throughout, soft volumetric lighting.
```

**Movimientos de cámara disponibles:**
| Movimiento | Cuándo usarlo |
|------------|--------------|
| `static camera` | Momentos de calma, diálogo, abrazo |
| `gentle zoom in` | Descubrimiento, emoción creciente |
| `gentle zoom out` | Revelar escenario, cierre de escena |
| `slow pan right` | Personaje caminando hacia la derecha |
| `slow pan left` | Retorno, movimiento hacia atrás |
| `slow tilt up` | Revelar el Gran Árbol, cielo |
| `soft push in` | Énfasis emocional, conexión |

**Notas para Seedance 2:**
- Prompts en **inglés**
- Duración: `3s` para acciones rápidas, `5s` para escenas de calma
- En el grid de video, indica la duración de cada escena individualmente

---

## PASO 5 — FORMATO DE SALIDA

### Estructura del archivo `storyboards/[slug]/storyboard.md`:

```markdown
# [Título] — Storyboard
**Fecha:** [YYYY-MM-DD]
**Personajes:** [lista]
**Escenarios principales:** [lista]
**Total de frames:** [número]

---

## Sinopsis Visual
[3-5 oraciones]

---

## [NOMBRE DE SECCIÓN] — Frames [N]–[N+7]
> Emoción: [emoción] | Escenario: [escenario]

### Frame [N]: [Título breve]
| Campo | Detalle |
|-------|---------|
| **Plano** | [tipo] |
| **Personaje(s)** | [quién] |
| **Acción** | [qué pasa] |
| **Fondo** | [escenario] |
| **Emoción** | [emoción] |
| **Color de Talo** | [color + razón, solo si aparece] |

[repetir para los 8 frames — SOLO LAS TABLAS, sin prompts inline]

---

## PROMPTS — [NOMBRE DE SECCIÓN]

### Imágenes individuales (Magnific Nano Banana Pro 2)
**Frame [N]:** `[prompt]`
**Frame [N+1]:** `[prompt]`
**Frame [N+2]:** `[prompt]`
**Frame [N+3]:** `[prompt]`
**Frame [N+4]:** `[prompt]`
**Frame [N+5]:** `[prompt]`
**Frame [N+6]:** `[prompt]`
**Frame [N+7]:** `[prompt]`

### Grid de imágenes (Magnific — 4×2, 8 paneles)
`[grid image prompt]`

### Videos individuales (Seedance 2)
**Frame [N]:** `[prompt]`
**Frame [N+1]:** `[prompt]`
**Frame [N+2]:** `[prompt]`
**Frame [N+3]:** `[prompt]`
**Frame [N+4]:** `[prompt]`
**Frame [N+5]:** `[prompt]`
**Frame [N+6]:** `[prompt]`
**Frame [N+7]:** `[prompt]`

### Grid de video (Seedance 2 — secuencia completa)
`[grid video prompt con las 8 escenas en orden]`

---
[repetir para cada sección musical]
```

---

## PASO 6 — GUARDAR EL ARCHIVO

Crea el directorio `storyboards/[slug]/` y guarda el storyboard como `storyboard.md`.

---

## PASO 7 — CIERRE DE SESIÓN (OBLIGATORIO)

Al terminar, pregunta al usuario:

> *"¿Alguna corrección, ajuste o feedback sobre este storyboard antes de cerrar la sesión?"*

Luego actualiza `learnings/errors-log.md` con una entrada nueva:

```markdown
## [YYYY-MM-DD] — [Título]

### ✅ Lo que funcionó bien
-

### ⚠️ Errores cometidos / correcciones aplicadas
-

### 💬 Feedback del usuario
-

### 📌 Reglas nuevas a recordar
-
```

Si una regla aplica a todas las sesiones futuras, agrégala también a `## 📌 REGLAS GLOBALES`.

---

## CHECKLIST FINAL

- [ ] Estilo 3D Pixar en todos los prompts (imagen y video)
- [ ] Descriptores de personajes copiados exactamente de `personajes.md`
- [ ] Frames numerados de forma continua en toda la canción
- [ ] Cada sección tiene exactamente 8 frames
- [ ] Las tablas de frames están separadas de los prompts
- [ ] Los prompts están todos agrupados en la sección `PROMPTS — [SECCIÓN]`
- [ ] Grid de imagen (Magnific 4×2) generado por sección
- [ ] Grid de video (Seedance 2, 8 escenas en orden) generado por sección
- [ ] El color de Talo cambia de forma coherente con la emoción
- [ ] Los movimientos de cámara en Seedance 2 son simples y coherentes
- [ ] La sinopsis tiene inicio → nudo → desenlace claro
- [ ] Archivo guardado en `storyboards/[slug]/storyboard.md`
- [ ] `learnings/errors-log.md` actualizado al final
