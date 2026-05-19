# TALO INTEGRATED SKILL — Canción Emocional + Storyboard Visual
**Generador completo de episodios musicales con guion visual**

---

## VISIÓN GENERAL

Cuando solicites: **"Usa el skill y crea una canción para esta idea: [descripción]"**

El skill ejecuta un flujo de 3 fases:

```
FASE 1: ANÁLISIS DE IDEA
  ↓
FASE 2: GENERACIÓN DE CANCIÓN EMOCIONAL
  ↓
FASE 3: GENERACIÓN DE STORYBOARD VISUAL
  ↓
ENTREGA: Canción + Storyboard + Prompts listos para Mureka + Seedance
```

---

## FASE 1: ANÁLISIS DE IDEA (5-10 min)

**Input:** Descripción de la idea del usuario + posibles documentos/imágenes  
**Output:** Metadatos + Estructura clarificada + Analytics previos analizados

### 1.0 PRE-ANÁLISIS: Si el usuario pasa imágenes o documentos

**SI usuario adjunta imagen al chat** (screenshot YouTube, imagen de personaje):
- La leo directamente (capacidad multimodal nativa)
- Extraigo métricas, tablas, descriptores visuales

**SI usuario sube un PDF al repositorio:**
- Lo leo con la herramienta Read
- Extraigo estructura, tablas, patrones

**SI usuario pega un transcript de video:**
- Lo analizo directamente en el chat

### 1.1 Extraer Metadatos

```
Emoción dominante: [enojo/miedo/tristeza/celos/vergüenza/soledad]
Título propuesto: [nombre canción]
Edad target: 2-6 años
Lección emocional: [validación de X + regulación de Y + integración de Z]
Personajes a incluir: [Talo + 2-3 de: Rubí/Tuco/Nuti]
Escenario principal: [La Plaza del Gran Árbol / El Río / etc.]
Duración objetivo: [2:30-3:00 minutos]
```

### 1.2 Consultar ANALISIS-ESTADISTICAS-VIDEOS.md

**Preguntas clave (si hay datos previos):**
- ¿Qué hooks funcionaron? (retención > 40% en 0-15 seg)
- ¿Dónde cayeron usuarios? (ver tabla de frames → timestamps)
- ¿Qué onomatopeyas/ritmos funcionan mejor?
- ¿Qué CTR promedio? (mejorar visual si < 2%)

**Aplicación:**
Si Frames 1-8 tuvieron 78% → Mantener estilo de hook explosivo
Si Frames 17-24 cayeron a 42% → Verso 2 necesita más energía visual
Si Frames 41-48 (Verso 3 + Silencio) cayeron abruptamente → Silencio necesita más apoyo visual

### 1.3 Validar Emoción contra Framework

Revisar `emotional-episodes-structure.md`:
- ¿Tempo correcto para esta emoción?
- ¿Leitmotif (frustración ascendente → calma descendente)?
- ¿Validación emocional explícita?
- ¿Amigos en Verso 4 (NO papá/mamá)?

---

## FASE 2: GENERACIÓN DE CANCIÓN EMOCIONAL

**Referencia:** `ESTRUCTURA-CANCION-INFANTIL-GUIA.md` + `EPISODIO-EMOCIONAL-TEMPLATE.md`

### 2.1 Estructura Base (Verificar siempre)

```
[Intro] — 3-5 seg, hook explosivo
↓
[Verso 1] — 3 líneas, acción clara
[Coro] — 3-4 líneas (IDÉNTICO, pegajoso)
↓
[Verso 2] — 3 líneas, patrón repetidor + variador
[Coro] — EXACTAMENTE IGUAL
↓
[Verso 3] — 3 líneas, pico emocional (NO minimizar)
[Pausa Silencio] — 2 segundos (validación)
[Spoken] — Validación emocional explícita
↓
[Verso 4] — Intervención de amigos (Rubí, Tuco, Nuti)
[Bridge] — Regulación + guía (respiración, transformación)
↓
[Verso 5] — Resolución calmada
[Final Coro] — EXACTAMENTE IGUAL (positivo reforzado)
↓
[Outro] — 2-3 líneas, baja intensidad, cierre
```

**Duración Total:** 2:30–3:00 minutos (máximo)

### 2.2 Checklist de Pegajosidad (Luli Pampín)

- [ ] ¿Hook en primeros 3-5 segundos? (onomatopeya o frase pegajosa)
- [ ] ¿Verso 1-2-3 máximo 3 líneas cada uno?
- [ ] ¿Coro 3-4 líneas, IDÉNTICO todas las veces?
- [ ] ¿Verso Repetidor + Elemento Variador?
- [ ] ¿Onomatopeyas en Intro y Verso 3?
- [ ] ¿Rimas AABB naturales (no forzadas)?
- [ ] ¿Vocabulario simple (edad 2-6)?
- [ ] ¿Narrativa completa: Setup → Conflicto → Resolución?
- [ ] ¿Más coro que verso (coro ~40% de la canción)?
- [ ] ¿Rhythmo bouncy (saltable/aplaudible)?

### 2.3 Checklist de Validación Emocional

- [ ] ¿Verso 3 VALIDA emoción (no minimiza)?
- [ ] ¿Silencio de 2 segundos después del pico?
- [ ] ¿Spoken explícitamente valida ("Está bien...")?
- [ ] ¿Verso 4 tiene amigos (Rubí, Tuco, Nuti)?
- [ ] ¿SIN papá/mamá/adultos en narrativa?
- [ ] ¿Bridge guía regulación (respiración/transformación)?
- [ ] ¿Verso 5 + Coro = resolución positiva?
- [ ] ¿Outro refuerza: "Intento de nuevo" o "Estoy seguro"?

### 2.4 Checklist de Metatags (Para Mureka)

Válidos ÚNICAMENTE:
- `[Intro]`, `[Verse]`, `[Pre-Chorus]`, `[Chorus]`, `[Bridge]`
- `[Spoken]`, `[Silence]`, `[Pause]`, `[Outro]`

❌ NUNCA INCLUIR EN LYRICS:
- `[Talo abre los ojos]` (acción)
- `[Sonido de lluvia]` (efecto de sonido)
- `[Camera zoom]` (directiva visual)

→ Estos van a **PRODUCTION NOTES**

### 2.5 Separación Crítica: Style Prompt vs Lyrics

**STYLE PROMPT (500 caracteres máx):**
- Tempo (BPM range)
- Instrumentación (ukulele, marimba, piano)
- Atmósfera (warm, safe, validating)
- Vocal (warm female, no high notes)
- Estilo (Bluey-style, 3D Pixar aesthetic)

❌ NO incluir narrative, emoción abstracta, o acciones

**LYRICS:**
- Solo metatags válidos + letra
- Narrativa completa
- Punto + Verso

Ejemplo correcto:
```
STYLE PROMPT:
Warm acoustic arrangement, 85-115 BPM building to chaos then returning to calm. 
Soft ukulele, gentle glockenspiel, warm marimba. Female voice, no aggression. 
2-second absolute silence at peak. Piano gentle for validation. Bluey-style 
intimate soundtrack. Clean organic mix.

LYRICS:
[Intro - soft]
Talo quiere construir...
```

### 2.6 Salida Final Canción

Entregar en formato:

```markdown
## CANCIÓN: [Nombre]
**Emoción:** [X]
**Duración:** [X:XX]

### STYLE PROMPT
[texto]

### LYRICS
[metatags + letra]

### PRODUCTION NOTES
- Talo intenta construir...
- Pico emocional en Verso 3
- 2 segundos silencio (validación)
- Amigos llegan en Verso 4
- Rojo → Verde (transformación cromática)
- Outro: Intento de nuevo

### NEGATIVE GUIDANCE
❌ No papá/mamá
❌ No minimizar emoción
❌ No metatags de acción en lyrics
[etc.]
```

---

## FASE 3: GENERACIÓN DE STORYBOARD VISUAL

**Referencia:** `.claude/commands/song-storyboard.md` (TaloInsta) + `ANALISIS-ESTADISTICAS-VIDEOS.md`

### 3.1 Paso 0 — Cargar Bases de Datos Visuales

ANTES de generar cualquier frame:

1. **Lee `/characters/personajes.md`** (TaloInsta)
   - Descriptores exactos de Talo, Rubí, Tuco, Nuti
   - Sistema de cambio de color de Talo
   - Paletas de color exactas

2. **Lee `/learnings/errors-log.md`** (TaloInsta)
   - Errores comunes cometidos
   - Reglas globales a recordar

3. **Consulta ANALISIS-ESTADISTICAS-VIDEOS.md**
   - ¿Dónde caen usuarios? → Optimizar esos frames
   - ¿Qué CTR tenemos? → Mejorar frame de thumbnail en Verso 1
   - ¿Qué retención promedio? → Aumentar energía visual en caídas

### 3.2 Metadatos Visuales (Extraer de Canción)

```
Título: [mismo de la canción]
Slug: [versión minúscula con guiones]
Tema principal: [una línea]
Emoción dominante: [alegría/calma/ternura/miedo/enojo/mezcla]
Personajes: [lista de quiénes aparecen]
Escenarios principales: [lista de dónde ocurre]
```

### 3.3 Sinopsis Visual (3-5 oraciones)

Escribir una sinopsis cálida que resume:
- Inicio: ¿Dónde estamos?
- Nudo: ¿Qué desafío enfrenta Talo?
- Desenlace: ¿Cómo se resuelve?

**Ejemplo - Enojo:**
```
Talo construye una torre hermosa en la Plaza del Gran Árbol. 
Mientras apila cubos de colores, la torre comienza a tambalear. 
Su frustración crece hasta explotar en rabia. 
En la pausa más vulnerable, sus amigos aparecen para validar su sentimiento. 
Con respiración calmada y apoyo, Talo intenta de nuevo—esta vez, con confianza.
```

### 3.4 Planificar Frames (8 por sección)

**Estructura:**
```
Intro (Frames 1-8)
Verso 1 (Frames 9-16)
Verso 2 (Frames 17-24)
Verso 3 + Pausa + Spoken (Frames 25-32)
Verso 4 + Bridge (Frames 33-40)
Verso 5 + Coro Final (Frames 41-48)
Outro (Frames 49-56)
```

**Total: 56 frames (7 secciones × 8 frames)**

### 3.5 Reglas por Frame

Para cada frame, definir:

| Campo | Detalle |
|-------|---------|
| **Número** | 1-56 (continuo) |
| **Plano** | PG/PM/PA/PP/PD (ver tabla abajo) |
| **Personaje(s)** | [Quién aparece] |
| **Acción** | [Qué pasa en este frame] |
| **Fondo** | [Escenario exacto] |
| **Emoción visual** | [Cómo se ve la emoción] |
| **Color de Talo** | [Verde/Azul/Amarillo + razón, si aplica] |

**Tipos de Plano:**

| Plano | Cuándo usarlo | Ejemplo |
|-------|---------------|---------|
| **PG** (General) | Inicio de sección, establecer escena | Talo en Plaza del Gran Árbol |
| **PM** (Medio) | Acciones corporales, interacciones | Talo colocando cubos |
| **PA** (Americano) | Movimiento de personaje | Talo caminando con cubo |
| **PP** (Primer Plano) | Expresiones cruciales | Cara de Talo enojada |
| **PD** (Detalle) | Objeto importante | Cubo cayendo |

### 3.6 Aplicar Datos de Retención para Optimizar Visualmente

**Si sabemos dónde caen usuarios (del ANALISIS-ESTADISTICAS-VIDEOS.md):**

**Problema:** Caída en 0-15 seg (hook débil)
**Solución Visual:** 
- Frame 1 debe ser EXPLOSIVO (color saturado, Talo grande, movimiento dinámico)
- Frame 2-3 onomatopeyas visualizadas (¡Pam!, ¡Pío!, luces brillantes)

**Problema:** Caída en 30-60 seg (verso demasiado largo/aburrido)
**Solución Visual:**
- Frames 9-16 (Verso 1): Máximo calma → Frames 17-24 (Verso 2) ENERGÍA SUBE
- Añadir movimiento dinámico cada 2 frames (no estático)

**Problema:** Bajo engagement (no hay conexión emocional)
**Solución Visual:**
- Frames 25-32 (Verso 3): PICO EMOCIONAL muy visible (cara grande, color intenso)
- Frames 33-40 (Amigos): Abrazo visual, presencia de grupo (compañía visible)

**Problema:** CTR bajo (thumbnail débil)
**Solución Visual:**
- Frame 9 (inicio de Verso 1) debe ser el candidato a thumbnail
- Talo GRANDE, colores SATURADOS, acción clara, 3-4 personajes máximo

### 3.7 Generar Prompts para Magnific + Seedance

**Para cada frame, generar 2 prompts:**

#### A) PROMPT INDIVIDUAL (Magnific Nano Banana Pro 2)

Formato:
```
[Descriptor visual exacto de personaje de personajes.md], 
[acción específica del frame], 
[nombre de escenario] background with [2-3 elementos visuales], 
soft volumetric lighting, vibrant saturated colors, 
3D Pixar cartoon style, smooth 3D render, expressive character, 
TaloInsta universe, high quality
```

**Ejemplo Frame 1 (Hook):**
```
Talo the chameleon, 3D cartoon children's character, 5 years old, 
bipedal stance, bright medium-green scaly-velvety body with lighter 
green belly, large expressive hazel-amber eyes with white sclera, 
distinctive golden yellow spiral marking on center of forehead, 
small blue circular dot patterns scattered on back and sides, 
long curled spiral tail with small blue stripe details, 3-fingered 
hands and 3-toed feet, 90cm tall child proportions, HOLDING A COLORFUL 
CUBE AND SMILING WITH EXCITEMENT, standing in Plaza del Gran Árbol with 
warm golden sunlight, mushy flowers, and ancient tree in background, 
soft volumetric lighting, vibrant saturated colors, 3D Pixar cartoon 
style, smooth 3D render, expressive character, TaloInsta universe
```

#### B) PROMPT GRID (8 paneles, 4×2)

```
storyboard sheet with 8 numbered panels in a 4x2 grid, 
[sección + tema + personajes + emoción], 
soft volumetric lighting, vibrant colors, 
3D Pixar cartoon style, smooth 3D render, 
each panel shows a different sequential moment, 
panels labeled 1 through 8, clean borders between panels, 
TaloInsta universe
```

#### C) PROMPT VIDEO INDIVIDUAL (Seedance 2)

```
[Descriptor de personaje], [acción animada], 
[escenario], [movimiento de cámara], 
3D Pixar cartoon animation style, soft volumetric lighting, 
smooth fluid motion, [duración]s
```

**Movimientos de cámara (Seedance 2):**
- `static camera` — Momentos calma/diálogo
- `gentle zoom in` — Emoción creciente
- `gentle zoom out` — Revelar escena
- `slow pan right` — Caminando derecha
- `slow pan left` — Retorno izquierda
- `slow tilt up` — Revelar Grande Árbol/cielo
- `soft push in` — Énfasis emocional

#### D) PROMPT GRID VIDEO (Seedance 2 — Secuencia Completa)

```
3D Pixar cartoon animation, TaloInsta universe, 
[personaje(s) con descriptor resumido], 
continuous sequence of exactly 8 scenes in strict order:
Scene 1 — [acción + escenario + camera], [duración]s,
Scene 2 — [acción + escenario + camera], [duración]s,
[... Scene 3-8 ...]
Smooth transitions between scenes, consistent character design, 
soft volumetric lighting.
```

### 3.8 Formato de Salida — Archivo Storyboard

Crear directorio: `storyboards/[slug]/`

Guardar como: `storyboard.md`

Estructura:

```markdown
# [Título] — Storyboard Visual
**Fecha:** YYYY-MM-DD
**Personajes:** [lista]
**Escenarios principales:** [lista]
**Total de frames:** 56

---

## Sinopsis Visual
[3-5 oraciones]

---

## [NOMBRE SECCIÓN] — Frames N–N+7
> Emoción: [X] | Escenario: [X] | Duración: [X]s

### Frame N: [Título]
| Campo | Detalle |
|-------|---------|
| **Plano** | [tipo] |
| **Personaje(s)** | [quién] |
| **Acción** | [qué] |
| **Fondo** | [dónde] |
| **Emoción** | [cómo se ve] |
| **Color Talo** | [color + razón] |

[repetir para Frames N+1...N+7]

---

## PROMPTS — [NOMBRE SECCIÓN]

### Imágenes individuales
**Frame N:** `[prompt Magnific]`
[... Frames N+1 a N+7 ...]

### Grid de imágenes
`[prompt grid Magnific 4×2]`

### Videos individuales
**Frame N:** `[prompt Seedance]`
[... Frames N+1 a N+7 ...]

### Grid de video (Seedance — secuencia completa)
`[prompt grid Seedance con todas las escenas en orden]`

---
[repetir para cada sección]
```

### 3.9 Guardar en Proyecto

**ESTRUCTURA OBLIGATORIA — Cada canción en su propia carpeta:**

```
talo-music-producer-skill/
└── canciones/
    ├── talo-enojo/
    │   ├── lyrics.md        ← Style Prompt + Lyrics + Production Notes
    │   ├── storyboard.md    ← 56 frames + prompts Magnific + Seedance
    │   └── analytics.md     ← Llenar después de recibir datos YouTube
    ├── talo-oscuridad/
    │   ├── lyrics.md
    │   ├── storyboard.md
    │   └── analytics.md
    ├── talo-tormenta/
    │   ├── lyrics.md        ✅ creado
    │   ├── storyboard.md    ✅ creado
    │   └── analytics.md     ← pendiente (publicar → esperar datos)
    └── [próxima canción]/
        ├── lyrics.md
        ├── storyboard.md
        └── analytics.md
```

**Regla:** Al crear una canción nueva, crear carpeta `canciones/[slug]/` y guardar:
- `lyrics.md` — SIEMPRE en el mismo acto de generar la canción
- `storyboard.md` — SIEMPRE en el mismo acto de generar el storyboard
- `analytics.md` — Crear vacío, llenar cuando lleguen datos de YouTube

---

## FASE 4: ENTREGA FINAL

Cuando completes ambas fases, entregar:

### 4.1 Bloque 1: CANCIÓN EMOCIONAL

```
## CANCIÓN: [Nombre]
[todas las secciones de Fase 2.6]
```

### 4.2 Bloque 2: STORYBOARD VISUAL

```
## STORYBOARD: [Nombre]
[todas las secciones de Fase 3.8]
```

### 4.3 Bloque 3: INSTRUCCIONES DE PRODUCCIÓN

```
## PRÓXIMAS ACCIONES

**Para Mureka (Música):**
1. Copiar STYLE PROMPT de Canción
2. Copiar LYRICS (metatags + letra)
3. Subir a Mureka
4. Esperar audio ~5-10 min
5. Descargar MP3

**Para Magnific Freepik (Imágenes):**
1. Usar Prompts Individuales para cada frame (o Grid 4×2)
2. Generación: ~2 min por imagen
3. Descargar alta resolución (mínimo 1920×1080)

**Para Seedance 2 (Videos):**
1. Usar Grid de Video (secuencia completa de 8 escenas)
2. O usar Prompts Individuales si prefieres control total
3. Generación: ~3-5 min por sección
4. Descargar en 1080p, 24fps mínimo

**Post-Producción:**
1. Sincronizar audio (Mureka) con video (Seedance/imágenes)
2. Agradecer: Musica: Mureka | Video: Seedance | Animación: [TaloInsta]
3. Configurar YouTube (título, desc, tags, thumbnail)
4. Agendar premiere (miércoles 5 PM UTC-5)

**Analytics:**
1. Esperar 3-7 días de datos
2. Reportar en ANALISIS-ESTADISTICAS-VIDEOS.md con screenshot
3. Usar insights para ajustar próxima canción
```

---

## EJEMPLO COMPLETO: "Talo y el Color del Enojo"

### FASE 1: ANÁLISIS
```
Emoción: Enojo
Idea: Talo construye una torre que se le cae. Frustración escalada. Validación emocional.
Hook: "¡Uno, dos, tres! ¡Los cubos aquí!"
Personajes: Talo, Rubí, Tuco, Nuti
Escenario: Plaza del Gran Árbol
Duración: 2:50
Retención anterior: "Colores" cayó en 30-60 seg → Hacer Verso 2 más corto/energético
```

### FASE 2: CANCIÓN
[Ver EPISODIO-ENOJO-LYRICS-FINAL.md completo]

### FASE 3: STORYBOARD
[Ver `/storyboards/talo-enojo/storyboard.md` cuando se genere]

### FASE 4: ENTREGA
```
Canción: ✅ Lyrics finales + Style Prompt listos para Mureka
Storyboard: ✅ 56 frames documentados
Prompts: ✅ Magnific (individual + grid 4×2) + Seedance (individual + grid)
YouTube: ✅ Configuración lista (título, desc, tags, thumbnail prompt)
Analytics: 📊 Ready para recibir datos miércoles
```

---

## CHECKLIST INTEGRADO — ANTES DE ENTREGAR

### Canción
- [ ] Hook en primeros 3-5 seg
- [ ] Verso max 3 líneas, coro 3-4 líneas IDÉNTICO
- [ ] Verso Repetidor + Variador aplicado
- [ ] Validación emocional explícita (Verso 3 + Silencio + Spoken)
- [ ] Amigos en Verso 4 (NO papá/mamá)
- [ ] Metatags válidos (NO acciones en lyrics)
- [ ] Duración 2:30–3:00 minutos
- [ ] Style Prompt separado, 500 chars máx

### Storyboard
- [ ] Personajes descritos exactamente según `personajes.md`
- [ ] 56 frames en total (7 secciones × 8 frames)
- [ ] Frames numerados de forma continua
- [ ] Planos variados (PG, PM, PA, PP, PD)
- [ ] Color de Talo coherente con emoción
- [ ] Escenarios del fijo de Aldea TaloInsta
- [ ] Sinopsis 3-5 oraciones
- [ ] Prompts en inglés, con estilo Pixar explícito

### Optimización por Retención
- [ ] ¿Frames 1-8 (Intro) son EXPLOSIVOS? (hook visual)
- [ ] ¿Frames donde cae retención tienen ENERGÍA?
- [ ] ¿Frames 25-32 (Pico emocional) son grandes/emotivos?
- [ ] ¿Frame 9 es candidato a thumbnail? (Talo grande, colores saturados)

### Deliverables
- [ ] Storyboard guardado en `storyboards/[slug]/storyboard.md`
- [ ] Canción en formato final (Lyrics + Style Prompt separados)
- [ ] Prompts copiables (Magnific + Seedance)
- [ ] Instrucciones de producción claras

---

## FLUJO RECOMENDADO DE USO

**Usuario dice:**
> "Usa el skill y crea una canción para esta idea: Talo siente miedo a la oscuridad"

**Yo respondo (automático):**

1. **Leo la idea** → Extraigo: Emoción=Miedo, Tema=Oscuridad, Lección=Validación+Seguridad
2. **Consulto ANALISIS-ESTADISTICAS-VIDEOS.md** → ¿Qué funcionó antes? ¿Dónde caen usuarios?
3. **Genero Canción Emocional** → Sigo ESTRUCTURA-CANCION-INFANTIL-GUIA.md + EPISODIO-EMOCIONAL-TEMPLATE.md
4. **Genero Storyboard Visual** → 56 frames siguiendo song-storyboard.md + optimizaciones de retención
5. **Entrego:**
   - Canción completa (Lyrics + Style Prompt)
   - Storyboard (56 frames documentados)
   - Prompts para Magnific (individual + grid)
   - Prompts para Seedance (individual + grid)
   - Instrucciones de producción

**Tiempo total:** ~30-40 minutos por episodio completo

---

## INTEGRACIÓN CON YOUTUBE + ANALYTICS

Después de cada lanzamiento:

1. **Espera 3-7 días** de datos en YouTube Studio
2. **Adjunta screenshot** de Analytics al chat (retention curve, CTR, engagement)
3. **Yo leo la imagen directamente** y extraigo los datos

4. **Análisis automático:**
   - Si retención 0-15 seg = 78% ✅ → Frame 1-8 funciona
   - Si retención 30-60 seg = 42% ❌ → Frame 17-24 (Verso 2) necesita ajuste
   - Si retención en pico emocional cae → Frame 41-48 (Verso 3+Silencio) ajuste necesario

5. **Yo analizo:**
   - ¿Qué funcionó? (patrones a mantener)
   - ¿Dónde perdemos usuarios? (qué frames corresponden)
   - ¿Qué cambios hacer en próxima canción?

6. **Uso insights para próxima canción:**
   - Si Frames 1-8 débiles → Hook más explosivo, colores saturados, Talo GRANDE
   - Si Frames 17-24 caen → Verso 2 más energético, más movimiento visual
   - Si Frames 41-48 caen → Pico emocional más grande, cara en primer plano

**Ejemplo:**
```
Usuario adjunta screenshot YouTube → yo leo imagen directamente
Veo: 0-15 seg: 78% / 30 seg: 65% / 1:00: 42% ← CAÍDA
↓
Correlaciono: 1:00 = Frames 25-40 (Verso 2 + Coro 2) ← AQUÍ CAE
↓
Diagnóstico: "Verso 2 muy largo, sin energía visual"
↓
Ajuste para próxima: "Verso 2 solo 3 líneas + onomatopeya '¡Pam!'"
```

---

**Este skill es el puente entre música y visuals. Cada canción incluye guion visual completo.**
