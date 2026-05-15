# Mureka Format — Guía de producción para canciones infantiles de Talo

## ¿Qué es Mureka?

Mureka es una plataforma de generación musical con IA. Para obtener resultados de calidad en canciones infantiles educativas, las instrucciones deben ser precisas, separadas por función y bien estructuradas.

---

## Principio clave

Mureka debe recibir **dos elementos separados y claramente diferenciados**:

1. **Lyrics (letra)** — escrita en español latino neutro, con metatags claros que delimiten cada sección. La letra es el contenido que Mureka cantará.

2. **Style Prompt** — descripción musical completamente en inglés, con estilo, tempo, tipo de voz, instrumentos, energía por sección y calidad de producción. El Style Prompt guía cómo suena la canción, no qué dice.

Nunca mezclar instrucciones de producción dentro de la letra, ni escribir el Style Prompt en español.

---

## Formato recomendado de entrega

Cada producción de Talo para Mureka debe incluir los siguientes bloques en este orden:

### Title
Nombre descriptivo en español. Incluir tema y emoción si es posible.
Ejemplo: `Los Números de Talo — Contamos Juntos`

### Lyrics
Letra completa en español latino con metatags. Ver sección de metatags.

### Style Prompt
Descripción musical en inglés. Ver sección de Style Prompt.

### Negative Guidance / Avoid
Lista de elementos que Mureka debe evitar. En inglés.

### Production Notes
Indicaciones adicionales: efectos especiales, coros infantiles, sonidos de ambiente, transiciones.

### Short Version
Versión condensada de 30–55 segundos para YouTube Shorts, Instagram Reels o TikTok. Incluye letra corta + Style Prompt adaptado.

### Loop Version
Versión diseñada para repetirse sin corte. El outro conecta naturalmente con el intro. Indicar en Production Notes: `"Designed for seamless loop, no hard ending."`

---

## Formato de Lyrics — Reglas para canciones infantiles

- **Líneas cortas** — máximo 6–8 palabras por línea cantada
- **Evitar demasiadas palabras** — densidad baja, espacio para que el niño procese
- **Español latino neutro** — sin modismos regionales ni vocabulario adulto
- **Secciones separadas con metatags** — siempre en inglés, entre corchetes
- **Coros repetidos** — el coro debe aparecer al menos 3 veces en versión larga
- **Pausas interactivas** — marcar con `[Pause]` donde el niño debe responder o imitar
- **Partes habladas** — marcar con `[Spoken]` para indicar que esa parte no se canta
- **Call and Response** — marcar con `[Call and Response]` para alternar voz de Talo y respuesta esperada del niño

---

## Metatags recomendados para Mureka

| Metatag | Uso recomendado | Cuándo usarlo |
|---|---|---|
| `[Intro]` | Introducción musical o vocal | Primeros 3–10 seg, gancho inicial |
| `[Verse 1]` | Primera estrofa | Presenta el tema educativo |
| `[Pre-Chorus]` | Transición hacia el coro | Cuando se necesita subir energía antes del coro |
| `[Chorus]` | Coro principal | La frase más repetible y memorable |
| `[Post-Chorus]` | Remate o extensión del coro | Para reforzar el hook con variación corta |
| `[Bridge]` | Sección de contraste | Momento interactivo, cambio de energía |
| `[Interlude]` | Pausa instrumental | Entre secciones, para respirar o cambiar escena |
| `[Pause]` | Silencio intencional | Para que el niño responda, imite o espere |
| `[Silence]` | Corte total de audio | Pausa dramática antes de un coro final |
| `[Spoken]` | Parte hablada, no cantada | Preguntas, instrucciones o narración de Talo |
| `[Call and Response]` | Alternancia pregunta-respuesta | Talo pregunta, niño responde |
| `[Final Chorus]` | Coro final con máxima energía | Cierre con todos los instrumentos y mayor intensidad |
| `[Outro]` | Despedida y cierre | Últimos 5–10 seg, frase memorable de Talo |
| `[End]` | Fin definitivo de la canción | Cierre limpio sin fade |
| `[Fade Out]` | Cierre con reducción gradual de volumen | Para versiones de loop o fondo |

---

## Style Prompt en inglés

El Style Prompt debe describir la canción en una o dos oraciones densas, cubriendo:

| Campo | Descripción |
|---|---|
| **Genre** | Género musical principal |
| **Target audience** | Edad y tipo de oyente |
| **Vocal type** | Voz principal (child, warm female, friendly male, etc.) |
| **Language / accent** | Latin Spanish, neutral accent |
| **Tempo / BPM** | Velocidad numérica o descriptiva |
| **Mood** | Estado emocional general y por sección |
| **Instrumentation** | Instrumentos principales |
| **Arrangement** | Cómo evolucionan los instrumentos a lo largo de la canción |
| **Production quality** | Nivel de producción (bright, clean, warm, lo-fi, etc.) |
| **Section dynamics** | Indicar cambios de energía entre secciones |

### Plantilla base del Style Prompt

```
Spanish Latin children's educational song for ages 2–6, warm and friendly
[vocal type] voice, neutral Latin accent, [BPM] BPM, [mood] mood,
featuring [instruments], [arrangement description], bright and clean
production, high energy on chorus, gentle on verses, interactive pause
before final chorus.
```

---

## Instrumentación recomendada para Talo

Usar una combinación de estos instrumentos según el tipo de canción:

| Instrumento | Carácter |
|---|---|
| Ukulele | Alegre, desenfadado, ligero |
| Xylophone | Clásico infantil, melódico y simple |
| Marimba | Cálido, latino, rítmico |
| Hand claps | Invita al movimiento, marca el pulso |
| Soft drums | Soporte rítmico sin agresividad |
| Light percussion | Shaker, maracas, clave — textura latina suave |
| Acoustic guitar | Calidez, acompañamiento discreto |
| Pizzicato strings | Juguetón, delicado, expresivo |
| Playful synth | Colorido, moderno, llamativo |
| Children backing vocals | Refuerza el coro, crea comunidad — usar cuando aplique |

---

## Rangos de BPM sugeridos

| Tipo de canción | BPM sugerido |
|---|---|
| Canción de saludo | 90–100 BPM |
| Colores / números / letras | 95–110 BPM |
| Movimiento / baile | 110–130 BPM |
| Rutina tranquila (comer, bañarse) | 80–95 BPM |
| Sueño / relajación | 60–80 BPM |
| Short / Reel energético | 115–135 BPM |

---

## Negative Guidance / Avoid

Incluir siempre en los prompts para Mureka:

```
Avoid: dark or tense mood, aggressive or heavy drums, complex or fast
lyrics, adult romantic tone, religious references, direct imitation of
known melodies or songs, references to real artists or brands, regional
slang, overly dense verses, spoken word without musical backing, long
instrumental intros over 5 seconds.
```

---

## Plantilla lista para copiar

Ejemplo completo basado en contar del 1 al 5 con Talo:

```
Title:
Uno Dos Tres con Talo

Lyrics:

[Intro]
¡Hola! Soy Talo
¡Vamos a contar!

[Verse 1]
Uno, dos, tres
¡cuenta conmigo!
cuatro y cinco
¡lo logramos, amigo!

[Chorus]
¡Uno, dos, tres, cuatro, cinco!
¡cuenta con Talo, brinca, brinca!
¡uno, dos, tres, cuatro, cinco!
¡qué divertido es contar!

[Call and Response]
¿Cuántos dedos ves aquí?
[Pause]
¡Uno, dos, tres!

[Final Chorus]
¡Uno, dos, tres, cuatro, cinco!
¡cuenta con Talo, brinca, brinca!
¡uno, dos, tres, cuatro, cinco!
¡qué divertido es contar!

[Outro]
¡Hasta pronto, amigos!
¡Talo los quiere mucho!

---

Style Prompt:
Spanish Latin children's educational counting song for ages 2–5, warm
and friendly female voice with child backing vocals on chorus, neutral
Latin accent, 105 BPM, happy and energetic mood, featuring xylophone,
ukulele, hand claps and soft drums, build energy gradually from intro to
chorus, bright and clean production, short pause before final chorus for
child interaction.

---

Negative Guidance:
Avoid dark mood, heavy drums, complex melodies, adult tone, regional
slang, overly dense verses, long instrumental intro.

---

Production Notes:
Add child laughing sound at the very start of intro. Hand claps on every
beat during chorus. Short 1-second silence after [Pause] tag. Fade out
gently on outro.
```

---

## Errores comunes

Evitar estos errores al preparar canciones de Talo para Mureka:

| Error | Por qué es un problema |
|---|---|
| **Prompt demasiado largo o fragmentado** | Mureka procesa mejor instrucciones densas y concisas en una o dos oraciones |
| **Letra con demasiadas palabras por línea** | El niño no puede seguir el ritmo y pierde el hilo educativo |
| **Coro que tarda más de 30 segundos en aparecer** | Se pierde la retención del espectador infantil antes del gancho |
| **Mezclar instrucciones en español e inglés sin orden** | Mureka puede ignorar o malinterpretar partes del prompt |
| **No indicar edad objetivo en el Style Prompt** | El resultado puede sonar genérico, no adaptado a 2–6 años |
| **No pedir pronunciación clara o tempo específico** | La IA puede generar letra cantada demasiado rápido o con dicción poco clara |
| **Usar referencias a artistas reales en el prompt** | Riesgo de imitación no deseada y posibles problemas de copyright |
