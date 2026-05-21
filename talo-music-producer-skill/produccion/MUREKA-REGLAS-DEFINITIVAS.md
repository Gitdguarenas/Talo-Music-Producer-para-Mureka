# Mureka — Reglas Definitivas para Lyrics y Style

> Referencia operativa estricta. Leer antes de generar cualquier canción en Mureka.
> Complementa `mureka-format.md` con las reglas precisas que Mureka entiende y las que ignora.

---

## PREFERENCIAS DE PRODUCCIÓN TALO (aplicar siempre)

### Estilos EXCLUIDOS
- ❌ **Cumbia** — nunca mencionar ni sugerir en el Style Prompt
- ❌ Reggaeton, trap, música agresiva

### Estilos PREFERIDOS
- ✅ Latin children's pop
- ✅ Latin folk infantil
- ✅ Warm acoustic
- ✅ Referencias: Canticuénticos, Luli Pampín, Bluey, Cocomelon

### Secciones habladas — evaluar por contexto
El metatag correcto es `[Spoken]` (1 palabra — Mureka lo reconoce; `[Spoken Word]` activa solo una palabra).

No es obligatorio en todas las canciones. Incluirlo cuando la canción lo justifique:
- Un momento de validación emocional (Tipo A: "Está bien, Talo. El miedo es real.")
- Un anuncio dramático que requiere suspenso (Tipo B exploración: "¡Pongan los binoculares! ¡Viene la A!")
- Una instrucción directa al niño que necesita salir de la música
- Un cambio de energía que la música sola no puede marcar

En canciones Tipo B simples sin narrativa (abecedario, números, colores básicos), evaluar si el ritmo lo permite — no forzarlo si interrumpe el flujo.

```
✅ Ejemplos de uso:
[Spoken]
¡Pongan los binoculares!
¡Viene la A!

[Spoken]
Está bien, Talo.
El miedo es real.
Aquí estamos todos.

[Spoken]
¿Listos para contar?
¡Uno, dos, tres... ya!
```

---

## CAMPO 1: LYRICS (Letra)

### REGLA 1 — Metatags: 1-3 palabras máximo

```
✅ [Intro]          → 1 palabra
✅ [Verse]          → 1 palabra
✅ [Verse A]        → 2 palabras
✅ [Double-time]    → 1 palabra
✅ [Spoken]         → 1 palabra
✅ [Build Up]       → 2 palabras
✅ [Outro]          → 1 palabra

❌ [Double-time with more energy and drums]   → demasiado largo
❌ [Please make it sound accelerated]         → demasiado largo
```

### REGLA 2 — Colocación de metatags

El metatag va en su propia línea, separado del texto. Nunca en medio del texto.

```
✅ CORRECTO:
[Verse]

Texto de la canción aquí
Línea 2

[Double-time]
Texto diferente

❌ INCORRECTO:
Texto aquí [Verse] más texto
```

### REGLA 3 — Palabras reconocidas por Mureka

| Categoría | Metatags válidos |
|-----------|-----------------|
| **Estructura** | `[Intro]`, `[Verse]`, `[Verse 1]`, `[Verse A]`, `[Chorus]`, `[Bridge]`, `[Outro]`, `[Interlude]` |
| **Ritmo** | `[Double-time]`, `[Half-time]`, `[Tempo Change]`, `[Beat Switch]` |
| **Voz** | `[Spoken]`, `[Monologue]`, `[Rap]`, `[Singing]`, `[Whisper]`, `[Shout]` |
| **Energía** | `[Build Up]`, `[Climax]`, `[Drop]`, `[Wind Down]`, `[Fade Out]` |
| **Instrumentación** | `[Percussion Solo]`, `[Guitar Solo]`, `[Instrumental Break]`, `[Vocal Harmony]`, `[A cappella]` |

> ❌ No inventar metatags: `[MegaClimox]` o `[SuperBridge]` — Mureka los ignora.

### REGLA 4 — Estructura de frase

**Frases cortas**
```
✅ "Abre la boca / sube al sol"
❌ "Sus alas extendidas buscan el horizonte"
```

**Repetición constante**
```
✅ "Anda, anda, anda"   → pegadizo
✅ "A, E, I, O, U"      → memorizable
```

**Rimas claras y naturales**
```
✅ "va / ya / volará"
✅ "está / allá / moverá"
❌ "azul / tul"   → forzado
```

**Acciones claras (para que los niños imiten)**
```
✅ "Mueve las alas"
✅ "Salta arriba"
✅ "Pega los labios"
```

### REGLA 5 — Lenguaje natural en español

- Palabras reales: "Anda", "Espera", "Iguana", "Ola", "Una"
- Lenguaje natural, NO abstracto
- Niños entienden sin explicación
- Fluye como español nativo

---

## CAMPO 2: DESCRIPTION / STYLE

### REGLA 1 — Máximo 500 caracteres

Contar espacios y saltos de línea. Usar ~490-500 caracteres, nunca exceder 500.

### REGLA 2 — Estructura de 3 bloques

**BLOQUE 1 — El Mundo Sonoro** (1-3 oraciones)
- Género específico
- Tempo (BPM o términos: fast, mid-tempo, slow)
- Instrumentos clave (no todos)
- Sonoridad general (bright, warm, clear, energetic)
- Producción técnica (reverb, clear, minimal)

**BLOQUE 2 — La Intención Lírica** (1-3 oraciones)
- De qué trata la canción
- Sentimientos / mood
- Narrativa
- Tono (playful, educational, joyful, energetic)
- Propósito (learning, memorization, participation)

**BLOQUE 3 — La Identidad Vocal** (1-3 oraciones)
- Tipo de voz (children's, cheerful, energetic)
- Timbre
- Técnica vocal
- Cómo se debe interpretar
- Energía / expresión

**Ejemplo correcto (~500 chars):**
```
Upbeat Spanish children's pop with strong, clear rhythm at 100-110 BPM.
Simple, repetitive word structure featuring Spanish vocabulary words that
naturally start with each vowel. Bright, energetic production with emphasis
on vocal clarity. Each word repeated three times creating hypnotic, catchy
rhythm.

Educational song teaching Spanish vowels through natural, repetitive word
association. Each vowel paired with common Spanish word: anda, espera,
iguana, ola, una. Simple three-word repetition followed by vowel emphasis.
Kids learn through natural language, not abstract sounds.

Bright, cheerful children's voice with crystal-clear word pronunciation.
Each Spanish word pronounced distinctly and with joy. Rhythm created through
word repetition and vocal emphasis. No singing technique needed—just clear,
energetic pronunciation of real Spanish words.
```

### REGLA 3 — Conexión entre Lyrics y Description

> ⚠️ MUY IMPORTANTE: si el metatag está en Lyrics, debe estar reflejado en Description.

| Si en Lyrics tienes… | Entonces en Description menciona… |
|---------------------|----------------------------------|
| `[Double-time]` | "tempo changes" / "accelerates" |
| `[Spoken]` | "spoken passages" / "narrative" |
| `[Percussion Solo]` | "prominent percussion" / "rhythmic" |
| `[Climax]` | "dynamic builds" / "intensity" |
| `[A cappella]` | "vocal-focused" / "no instruments" |
| `[Build Up]` | "builds energy" / "crescendo" |

### REGLA 4 — Sin contradicciones

```
❌ Lyrics dice [Double-time] pero Description dice "steady tempo"
❌ Lyrics tiene [Spoken] pero Description dice "pure singing"
❌ Lyrics tiene 5 vocales pero Description solo menciona 3

✅ Lyrics y Description hablan el MISMO IDIOMA
```

---

## CHECKLIST FINAL ANTES DE GENERAR

**Lyrics:**
- [ ] ¿Cada metatag tiene 1-3 palabras?
- [ ] ¿Están en líneas separadas?
- [ ] ¿Uso palabras reconocidas por Mureka?
- [ ] ¿Las frases son cortas?
- [ ] ¿Hay repetición constante?
- [ ] ¿Las rimas son naturales?
- [ ] ¿Hay acciones claras?
- [ ] ¿Es lenguaje natural en español?

**Description:**
- [ ] ¿Tiene menos de 500 caracteres?
- [ ] ¿Tiene Bloque 1 (Mundo Sonoro)?
- [ ] ¿Tiene Bloque 2 (Intención Lírica)?
- [ ] ¿Tiene Bloque 3 (Identidad Vocal)?
- [ ] ¿Menciono TODOS los metatags del Lyrics?
- [ ] ¿No hay contradicciones?
- [ ] ¿Lyrics y Description hablan igual?

---

## Conexión Lyrics → Description

| Lyrics define | Description explica |
|---------------|---------------------|
| Estructura | Cómo suena |
| Metatags | Qué significan esos cambios |
| Letra / Palabras | Cómo interpretarlas |
| Acciones | Qué energía tienen |

**Ejemplo real:**
```
LYRICS:
[Intro]
Anda, anda, anda,
¡A! ¡A! ¡A!

[Double-time]
Anda, espera, iguana,
¡A, E, I!

DESCRIPTION:
"...at 100-110 BPM... tempo changes from repetitive word structure
to accelerated celebration... rhythm created through word repetition..."

✅ Lyrics dijo [Double-time]
✅ Description explicó "accelerated"
✅ Conexión perfecta
```

---

## Fórmula rápida

**Paso 1 — Escribe Lyrics**
- Metatags 1-3 palabras
- Frases cortas
- Repetición
- Rimas naturales
- Acciones claras

**Paso 2 — Escribe Description** (3 bloques, < 500 chars)
- Bloque 1: Sonido + Tempo
- Bloque 2: Tema + Narrativa
- Bloque 3: Voz + Expresión

**Paso 3 — Revisa conexión**
- ¿Menciono los metatags usados?
- ¿Hay contradicciones?
- ¿Hablan el mismo idioma?

**Paso 4 — Genera en Mureka**
- Lyrics → campo Lyrics
- Description → campo Description

---

## Errores comunes a evitar

| Error | Corrección |
|-------|-----------|
| `[Double-time with more drums and energy]` — 6 palabras | `[Double-time]` — 1 palabra |
| `[MegaClimox]` — metatag inventado | `[Climax]` — metatag reconocido |
| Usar `[Double-time]` en Lyrics pero no mencionarlo en Description | Agregar "tempo changes" o "accelerates" en Description |
| "Sus alas extendidas buscan el horizonte" — frase larga | "Mueve las alas / sube al sol" — frase corta |
| Rima forzada: "azul / tul" | Rima natural: "va / ya / será" |
