# Feedback Learning Loop — Aprendizaje continuo de Talo Music Producer

## Propósito

Este archivo es un **registro acumulativo de aprendizajes** generado a lo largo del uso de la skill. Guarda:

- Correcciones aprobadas por el usuario en letras, estructura y producción
- Errores detectados y evitados en futuras producciones
- Patrones y prompts de Mureka que funcionan especialmente bien
- Decisiones creativas aprobadas que definen el estilo de Talo
- Reglas nuevas derivadas de experiencia práctica

El objetivo es que la skill **mejore continuamente**: cada canción genera aprendizajes que informan las próximas canciones, y el usuario nunca cometa dos veces el mismo error.

---

## Cuándo actualizar este archivo

Actualizar este archivo cuando ocurra alguno de estos eventos:

- ✅ El usuario corrige una letra y aprueba la versión mejorada
- ✅ Una canción generada por Mureka no funciona bien; se detecta y corrige la causa
- ✅ Una canción funciona especialmente bien; se identifica por qué
- ✅ Se detecta un error que se ha repetido más de una vez
- ✅ Se aprueba una nueva regla de estilo o voz para Talo
- ✅ Se descubre un Style Prompt o estructura de Mureka efectiva
- ✅ Se decide evitar un patrón específico (melodía, estructura, BPM, etc.)
- ✅ Se completa un análisis de competencia que aporta un patrón nuevo
- ✅ Se toma una decisión visual o de storyboard aprobada

---

## Tipos de aprendizaje

| Tipo | Descripción |
|---|---|
| **Corrección de letra** | Palabras, frases, densidad de palabras, claridad |
| **Ajuste de estructura** | Orden de secciones, entrada del coro, duración, metatags |
| **Ajuste de ritmo / BPM** | Tempo para edad, energía, cantabilidad |
| **Ajuste de voz** | Tono, velocidad de habla, claridad, tipo de voz |
| **Ajuste de prompt Mureka** | Style Prompt, Negative Guidance, Production Notes |
| **Aprendizaje de competencia** | Patrón efectivo observado en referencias |
| **Aprendizaje visual / storyboard** | Sincronía letra-acción, momentos de escena |
| **Error a evitar** | Patrón que no funcionó y no debe repetirse |
| **Patrón aprobado** | Estructura, ritmo o decisión creativa que funciona bien |

---

## Plantilla reutilizable

Usar esta plantilla cada vez que se registre un aprendizaje:

```
## Aprendizaje [número] — [título breve]

**Fecha:** [DD/MM/YYYY]
**Tema / canción:** [nombre]
**Tipo de aprendizaje:** [seleccionar de la lista anterior]

**Problema detectado:**
[Descripción del problema o error]

**Corrección aprobada:**
[Cómo se corrigió]

**Regla nueva:**
[Regla a aplicar en futuras canciones]

**Ejemplo antes:**
[Fragmento de letra o prompt antes de la corrección]

**Ejemplo después:**
[Fragmento de letra o prompt después de la corrección]

**Aplicar en futuras canciones cuando:**
[Circunstancias en que usar este aprendizaje]

**Evitar cuando:**
[Circunstancias en que NO aplicar]
```

---

## Aprendizaje 1 — Coro demasiado tardío en canción educativa completa

**Fecha:** 15/05/2026
**Tema / canción:** Contar del 1 al 10 con Talo (canción de prueba)
**Tipo de aprendizaje:** Ajuste de estructura

**Problema detectado:**
El primer coro entró en el segundo 25. Aunque cumple el límite máximo (30 seg), no cumple la regla ideal de entrar antes de los 20 segundos. El verso inicial antes del primer coro fue demasiado largo para una canción infantil educativa de 1:45–2:15.

**Corrección aprobada:**
En canciones completas de Talo para YouTube Kids con duración aproximada de 1:45–2:15, intentar que el primer coro o frase repetible principal entre antes del segundo 20. Si no es posible, justificarlo explícitamente.

**Regla nueva:**
Para canciones educativas completas de Talo, el primer coro debe entrar idealmente antes de 20 segundos. Si entra entre 20 y 30 segundos, marcarlo como ajuste menor y proponer una versión corregida con coro más temprano.

**Ejemplo antes:**
```
[Intro]     0:00–0:08
[Verse 1]   0:08–0:25  (demasiado largo antes del coro)
[Chorus]    0:25–0:40  ← coro en seg 25
```

**Ejemplo después:**
```
[Intro]     0:00–0:06
[Verse 1]   0:06–0:18  (intro breve, verso comprimido)
[Chorus]    0:18–0:33  ← coro antes de seg 20
```

**Aplicar en futuras canciones cuando:**
- Sean canciones completas para YouTube Kids
- Duración sugerida entre 1:30 y 2:30
- Tema educativo simple: números, colores, animales, formas, movimiento
- Se necesite alta retención inicial

**Evitar cuando:**
- Sea una canción narrativa donde la introducción más larga esté justificada
- Sea una canción tranquila de sueño o relajación (el ritmo de atención es diferente)
- El usuario pida explícitamente una introducción más larga

---

## Aprendizaje 2 — Letra educativa correcta pero poco memorable y sin personalidad de Talo

**Fecha:** 15/05/2026
**Tema / canción:** Contar del 1 al 10 con Talo (canción de prueba, versión mejorada)
**Tipo de aprendizaje:** Mejora de creatividad y marca

**Problema detectado:**
La letra cumple objetivamente con los criterios educativos, pero resultó demasiado básica y poco memorable. El coro no tiene una frase especialmente pegajosa. La sección de call-and-response incluye una suma ("uno más uno") que puede ser demasiado abstracta para niños de 2–3 años. Talo aparece nombrado, pero no protagoniza una acción visual propia o característica que lo diferencie.

**Corrección aprobada:**
En canciones de Talo, la letra debe combinar: aprendizaje + acción visual memorable + personalidad del personaje. Para canciones de números, usar imágenes concretas y propias de un camaleón: saltos, dedos, cambios de color, manchas, cola en espiral, hojas, burbujas, pasos o transformaciones visuales. Evitar preguntas matemáticas abstractas para edades 2–3 años, salvo que el usuario lo solicite explícitamente.

**Regla nueva:**
Cada canción educativa de Talo debe incluir al menos un recurso memorable propio del personaje o su mundo: cambio de color del camaleón, cola en espiral, manchas brillantes, hojas mágicas, juego visual sorpresa, o interacción directa que no sea solo una instrucción. El coro debe incluir una frase-hook cantable y memorable, no simplemente una instrucción educativa plana.

**Ejemplo antes:**
```
Verso:  "Uno, dos, tres
         ¡levanta tus dedos!"

Coro:   "Uno, dos, tres, cuatro, cinco
         seis, siete, ocho, nueve, ¡diez!
         ¡cuenta con Talo
         lo logramos otra vez!"
```
← Correcta, clara, educativa. Poco pegadiza. Sin identidad visual de Talo.

**Ejemplo después:**
```
Verso:  "Uno, dos, Talo saltó
         tres, cuatro, cambió de color
         cinco, seis, su cola gira
         siete, ocho, brilla y brilla"

Coro:   "Talo cuenta, Talo baila
         Talo salta uno, dos, tres
         ¡cambios mágicos con Talo!
         ¡mira cuánto aprendemos!"
```
← Memorable. Incluye acción visual (salto, cambio de color, cola). Hook pegajoso. Personalidad de Talo.

**Aplicar en futuras canciones cuando:**
- Se creen canciones educativas simples de números, colores, animales, formas o movimiento
- La primera versión sea técnicamente correcta pero suene plana o poco memorable
- Talo solo aparezca nombrado, pero no como personaje activo con acciones
- Se busque mayor retención y engagement a través de la identidad de marca

**Evitar cuando:**
- El usuario pida una canción extremadamente simple tipo ejercicio de aula
- Se trate de una canción tranquila de sueño o relajación donde la acción visual sería inapropiada
- La edad sea 2–3 años y la acción visual propuesta sea demasiado compleja de seguir

---

## Aprendizaje 3 — Hook debe estar en primeros 10 segundos para máxima retención

**Fecha:** 16/05/2026  
**Tema / canción:** Patrón observado en canciones infantiles virales  
**Tipo de aprendizaje:** Optimización de retención

**Problema detectado:**
Canciones con hook después del segundo 10 tienen caída de atención en YouTube Kids. Datos de retención muestran que ventana crítica es 0-10 seg para establecer el "por qué quedarse viendo".

**Corrección aprobada:**
En todas las canciones, el hook (frase más memorable) debe aparecer ANTES del segundo 10. Puede estar en el intro o en la entrada del coro, pero nunca después.

**Regla nueva:**
Hook en seg 0-10: máxima retención. Hook en seg 10-20: retención media. Hook después seg 20: riesgo de abandono.

**Ejemplo antes:**
```
[Intro]         0:00-0:08 (introducción genérica)
[Verso 1]       0:08-0:22 (contenido educativo, pero sin gancho memorable)
[Coro]          0:22-0:35 (recién aquí aparece la frase pegajosa)
```

**Ejemplo después:**
```
[Intro con hook] 0:00-0:06 (primeros 6 seg: "¡Hola, soy Talo!" + sonido identitario)
[Verso]         0:06-0:18
[Coro]          0:18-0:32 (repetición refuerza el hook del intro)
```

**Aplicar en futuras canciones cuando:**
- Sea YouTube Kids o Shorts (donde el scroll es factor)
- Edad 2-4 años (ventana de atención más corta)
- Objetivo sea alta retención inicial

**Evitar cuando:**
- Canción narrativa que requiere intro más larga (cuento, historia)
- Canción instrumental donde hook es musical, no lírico

---

## Aprendizaje 4 — Call-and-response con pausa de 2 segundos = máxima participación infantil

**Fecha:** 16/05/2026  
**Tema / canción:** Patrón de interacción efectiva  
**Tipo de aprendizaje:** Patrón que funciona

**Problema detectado:**
Call-and-response SIN pausa suficiente hace que el niño no tenga tiempo de responder; con pausa de 1 seg es cortante; con pausa >3 seg se siente lento.

**Corrección aprobada:**
Pausa ideal entre pregunta (Talo) y respuesta esperada (niño) = 2 segundos exactos. Esto permite que un niño de 2-5 años procese, piense y responda sin que el audio continúe.

**Regla nueva:**
Call-and-response: Pregunta (Talo) → Pausa 2 seg → [esperando respuesta del niño] → Confirmación ("¡Muy bien!"). Usar mínimo 1-2 veces por canción completa.

**Ejemplo antes:**
```
Talo: "¿Dónde está el rojo?" [pausa 0.5 seg] "Aquí está..."
(El niño no tiene tiempo de responder)
```

**Ejemplo después:**
```
Talo: "¿Dónde está el rojo?"
[Silencio - 2 segundos - música suave de fondo, sin Talo hablando]
[El niño busca/responde]
Talo: "¡Muy bien, muy bien! Lo encontraste!"
```

**Aplicar en futuras canciones cuando:**
- Edad objetivo 2-5 años
- Objetivo sea participación/interacción
- Bridge o sección específica para engagement

**Evitar cuando:**
- Canción de sueño (pausas pueden sentirse incómodas)
- Estructura muy rápida (ej. conteo rápido)

---

## Aprendizaje 5 — Verso con densidad baja (2-4 palabras) + acción clara = más cantable

**Fecha:** 16/05/2026  
**Tema / canción:** Composición de letra para niños 2-3 años  
**Tipo de aprendizaje:** Corrección de estructura

**Problema detectado:**
Versos con 6+ palabras por línea son difíciles de cantar/repetir para menores de 4 años. Requieren más aire, más precisión, mayor carga cognitiva.

**Corrección aprobada:**
Para edad 2-3 años, cada línea de verso debe ser 2-4 palabras MÁS una acción concreta. Ej. "¡Uno! Salta" (2 pals + acción) es mejor que "Uno, dos, Talo cuenta rápido" (6 pals).

**Regla nueva:**
Verso age 2-3: máximo 4 palabras por línea, cada línea = 1 número o 1 acción. Verso age 4-5: máximo 6 palabras, puede haber 2 elementos por línea.

**Ejemplo antes:**
```
Verso:
"Talo cuenta uno, dos, tres
y levanta sus dos pies
porque está muy feliz hoy"
(Línea 1 = 5 pals, Línea 2 = 6 pals, Línea 3 = 6 pals; difícil para 2-3 años)
```

**Ejemplo después:**
```
Verso:
"¡Uno! Salta
¡Dos! Gira
¡Tres! Color"
(Cada línea = 2-3 pals; una acción concreta; fácil de repetir)
```

**Aplicar en futuras canciones cuando:**
- Edad objetivo 2-3 años
- Tema educativo simple (números, colores, animales)
- Objetivo sea alta cantabilidad

**Evitar cuando:**
- Canción narrativa con más de una idea por verso
- Edad 5-6 años (pueden procesar frases más largas)

---

## Aprendizaje 6 — Repetición del coro 4+ veces en canción de 2 minutos

**Fecha:** 16/05/2026  
**Tema / canción:** Estructura repetitiva  
**Tipo de aprendizaje:** Patrón que funciona

**Problema detectado:**
Canciones con coro que aparece 2-3 veces suenan variadas pero el niño no retiene el hook. Canciones con coro 4+ veces aumentan retención exponencial.

**Corrección aprobada:**
En canción de 1:45-2:15, el coro debe repetirse MÍNIMO 4 veces. En Shorts (30-45 seg), mínimo 2 veces. Esto no es "aburrido" si el coro tiene 15+ seg variados.

**Regla nueva:**
Duración 1:45-2:15 → Coro 4 veces mínimo. Duración 30-45 seg (Short) → Coro 2 veces mínimo. Entre cada coro, verso o bridge diferente para mantener variedad.

**Ejemplo antes:**
```
Intro → Coro (1) → Verso 1 → Coro (2) → Verso 2 → Outro
(Solo 2 repeticiones del coro)
```

**Ejemplo después:**
```
Intro → Coro (1) → Verso 1 → Coro (2) → Verse 2 → Coro (3) → Bridge → Coro (4) → Outro
(4 repeticiones, con variedad entre ellas)
```

**Aplicar en futuras canciones cuando:**
- Duración 1:45-2:15 minutos
- Objetivo sea retención del hook
- Edad 2-5 años

**Evitar cuando:**
- Canción narrativa con trama que requiere más verso que coro
- Canción de Spotify/plataformas musicales (donde variedad > repetición)

---

## Aprendizaje 7 — Onomatopeyas cortas (1 sílaba) son más imitables que largas

**Fecha:** 16/05/2026  
**Tema / canción:** Producción vocal infantil  
**Tipo de aprendizaje:** Error a evitar

**Problema detectado:**
Onomatopeyas de 2+ sílabas ("¡Splash!", "¡Boing!", "¡Explosión!") son más difíciles de imitar para menores de 4 años que monosílabos ("¡Pam!", "¡Ñam!", "¡Muu!").

**Corrección aprobada:**
Preferir onomatopeyas de 1 sílaba para edad 2-4 años. Para edad 5-6, pueden ser 2 sílabas si son claras.

**Regla nueva:**
Edad 2-4: Onomatopeyas = 1 sílaba (Pam, Ñam, Muu, Splash es exception si es MUY clara). Edad 5-6: Pueden ser 1-2 sílabas.

**Ejemplo antes:**
```
"Talo salta y hace ¡Explosión! de colores"
(¡Explosión! = 3 sílabas, difícil para 2-3 años)
```

**Ejemplo después:**
```
"Talo salta y hace ¡PUM! de colores"
(¡PUM! = 1 sílaba, fácil de imitar)
```

**Aplicar en futuras canciones cuando:**
- Edad objetivo 2-4 años
- Onomatopeya es parte del hook o coro

**Evitar cuando:**
- Edad 5-6 años (pueden procesar 2 sílabas)
- Onomatopeya es decorativa, no central

---

## Aprendizaje 8 — BPM 110-115 es sweet spot para "conteo y marcha"

**Fecha:** 16/05/2026  
**Tema / canción:** Tempo para canciones de números y movimiento  
**Tipo de aprendizaje:** Descubrimiento de Mureka

**Problema detectado:**
BPM <110 suena lento para canciones de conteo; >125 suena apresurado para que el niño siga el ritmo. 110-115 permite que el niño cuente/marche sin sentir prisa ni lentitud.

**Corrección aprobada:**
Para canciones de "Números y conteo" + "Movimiento corporal", BPM óptimo = 110-115. Verificado en Mureka con ambos genres.

**Regla nueva:**
Números & marcha: 110-115 BPM (sweet spot). Más lento (105-109): riesgo de aburrimiento. Más rápido (116+): riesgo de apresuramiento.

**Ejemplo antes:**
```
Canción de conteo con BPM 100 = suena demasiado lenta, el niño se aburre
Canción de conteo con BPM 130 = suena apresurada, el niño no puede seguir
```

**Ejemplo después:**
```
Canción de conteo con BPM 112 = el niño puede cantar/contar a velocidad natural, con sensación de marcha constante
```

**Aplicar en futuras canciones cuando:**
- Tema: Números y conteo
- Tema: Movimiento corporal (marchar, saltar)
- Edad 2-5 años

**Evitar cuando:**
- Canción de sueño/tranquila (BPM 60-80)
- Canción de baile energético (120+)

---

## Aprendizaje 9 — Pause de 1 segundo después de número = tiempo de respuesta

**Fecha:** 16/05/2026  
**Tema / canción:** Timing de pausas en conteo  
**Tipo de aprendizaje:** Patrón que funciona

**Problema detectado:**
Conteos muy rápidos (sin pausa entre números) confunden a niños 2-3 años. Conteos con pausas excesivas (2+ seg) sienten demasiado lento.

**Corrección aprobada:**
En canción de conteo, después de cada número (o cada 2 números), insertar pausa de 0.5-1 seg para que el niño registre y pueda anticipar el siguiente.

**Regla nueva:**
Conteo 1-10: Cada número o dúo de números (1-2, 3-4, 5-6, etc.) seguido de pausa de 0.5-1 seg. Esto permite anticipación sin corte.

**Ejemplo antes:**
```
"Uno dos tres cuatro cinco seis siete ocho nueve diez"
(Sin pausas; suena como avalancha)
```

**Ejemplo después:**
```
"Uno [pausa 0.7 seg] dos [pausa 0.7 seg] tres..." 
O
"Uno dos [pausa 1 seg] tres cuatro [pausa 1 seg] cinco..."
(Pausas permiten seguimiento)
```

**Aplicar en futuras canciones cuando:**
- Tema: Números y conteo
- Edad 2-4 años
- Verso o sección específica de conteo

**Evitar cuando:**
- Coro del conteo debe ser continuo sin pausas (para dinamismo)

---

## Aprendizaje 10 — Cambio de color/estética cada 15-20 segundos = retención visual

**Fecha:** 16/05/2026  
**Tema / canción:** Storyboard y cambios de escena  
**Tipo de aprendizaje:** Patrón que funciona

**Problema detectado:**
Videos de Talo con escena estática por >20 seg muestran caída de atención en YouTube Kids. Cambios cada 15-20 seg mantienen engagement.

**Corrección aprobada:**
En storyboard, planificar cambio de fondo, cambio de pose de Talo, o introducción de nuevo elemento visual cada 15-20 seg.

**Regla nueva:**
0-15 seg: Escena 1. 15-30 seg: Escena 2 o cambio de Talo. 30-45 seg: Escena 3. Etc. Cambios no deben ser abruptos, sino gradualespara mantener continuidad pero renovar atención.

**Ejemplo antes:**
```
0:00-1:00 — Talo en mismo fondo, misma pose
(Después 30 seg, niño se aburre)
```

**Ejemplo después:**
```
0:00-0:15 — Talo en pradera verde
0:15-0:30 — Talo da un salto, fondo cambia a amarillo
0:30-0:45 — Talo en árbol, fondo con hojas
(Cada 15 seg, algo visual cambia)
```

**Aplicar en futuras canciones cuando:**
- Toda canción de YouTube Kids (1:45-2:15)
- Edad 2-4 años (atención más variable)

**Evitar cuando:**
- Canción de sueño (cambios podrían ser estimulantes)

---

## Aprendizaje 11 — Talo nunca está pasivo; siempre realiza la acción, nunca instrucciona

**Fecha:** 16/05/2026  
**Tema / canción:** Identidad de marca  
**Tipo de aprendizaje:** Patrón que funciona

**Problema detectado:**
Versiones donde Talo dice "Ahora levanta tus dedos" (instrucción al niño) vs. "Talo levanta sus dedos" (Talo hace la acción). Las primeras suenan escolares; las segundas son más atractivas.

**Corrección aprobada:**
Talo SIEMPRE debe ser el sujeto activo. Talo salta, Talo cambia color, Talo gira. El niño IMITA (implícitamente), pero la canción no dice "levanta tus dedos" sino "Talo levanta sus dedos".

**Regla nueva:**
Estructura de verso: "Talo [verbo de acción]" o "[Número/Color], Talo [acción]". Nunca: "Tú levantas" o "Ahora levanta". Talo guía por ejemplo, no por instrucción.

**Ejemplo antes:**
```
"Uno, dos, levanta tus dedos" 
(Instrucción plana)
```

**Ejemplo después:**
```
"Uno, dos, Talo levanta sus dedos"
(Talo es activo, el niño imita naturalmente)
```

**Aplicar en futuras canciones cuando:**
- Toda canción de Talo
- Objetivo sea mantener identidad de marca fuerte

**Evitar cuando:**
- Jamás evitar; es regla absoluta de Talo

---

## Aprendizaje 12 — Rimas simples AABB son más fáciles de anticipar que rimas complejas

**Fecha:** 16/05/2026  
**Tema / canción:** Estructura de rimas en coro  
**Tipo de aprendizaje:** Patrón que funciona

**Problema detectado:**
Rimas ABAB o ABCABC confunden a niños pequeños. Rimas AABB (línea 1-2 riman, línea 3-4 riman) permiten que el niño anticipe la siguiente línea.

**Corrección aprobada:**
Para edad 2-5 años, usar rimas AABB en coro. Ej: "saltó / pintó" (AA), "pies / vez" (BB).

**Regla nueva:**
Coro rimas: Preferir AABB. Rimas ABAB solo si edad 5-6 años. Nunca ABCABC para <5 años.

**Ejemplo antes:**
```
Verso:
"Talo salta (A)
y da una vuelta (B)
Cambió su color (A)
en la montaña (B)"
(ABAB - confuso para 2-4 años)
```

**Ejemplo después:**
```
Coro:
"Uno, dos, Talo saltó (A)
tres, cuatro, se pintó (A)
cinco, seis, mueve los pies (B)
siete, ocho, otra vez (B)"
(AABB - fácil de predecir)
```

**Aplicar en futuras canciones cuando:**
- Edad 2-5 años
- Coro principal
- Objetivo sea memorabilidad

**Evitar cuando:**
- Jamás hay razón para evitar AABB

---

## Aprendizaje 13 — "Preguntas retóricas" confunden a menores de 4 años; mejor hacer preguntas esperadas

**Fecha:** 16/05/2026  
**Tema / canción:** Tipo de preguntas en letra  
**Tipo de aprendizaje:** Error a evitar

**Problema detectado:**
Preguntas retóricas como "¿Sabes cuántos dedos tienes?" esperan que el niño ya sepa la respuesta, confundiendo si no la sabe. Mejor preguntas esperadas: "¿Dónde está el rojo?" (búsqueda activa).

**Corrección aprobada:**
Evitar preguntas retóricas (que asumellamadas conoztimiento previo). Usar preguntas de búsqueda/acción (¿Dónde? ¿Cuál? ¿Qué color ves?).

**Regla nueva:**
Tipo de pregunta prohibida: "¿Sabes qué es esto?" Tipo de pregunta permitida: "¿Dónde está?" "¿Qué ves?" "¿Cuál es?"

**Ejemplo antes:**
```
"¿Sabes cuántos colores hay?" 
(Pregunta retórica que confunde si no sabe)
```

**Ejemplo después:**
```
"Mira, mira, ¿qué color ves?"
(Pregunta con búsqueda activa, más natural)
```

**Aplicar en futuras canciones cuando:**
- Edad 2-4 años
- Bridge o sección con call-and-response
- Objetivo sea interacción sin confusión

**Evitar cuando:**
- Jamás usar preguntas retóricas para edad <4 años

---

## Aprendizaje 14 — Mureka: especificar "neutral Latin Spanish accent" evita acentos regionales fuertes

**Fecha:** 16/05/2026  
**Tema / canción:** Prompt de Mureka  
**Tipo de aprendizaje:** Descubrimiento de Mureka

**Problema detectado:**
Sin especificar, Mureka puede generar voz con acento argentino, mexicano o español muy fuerte. Talo requiere neutral latino.

**Corrección aprobada:**
En Style Prompt de Mureka, incluir siempre: "neutral Latin Spanish accent" o "neutral Latino accent". Esto controla la pronunciación.

**Regla nueva:**
Style Prompt template: Incluir SIEMPRE "with neutral Latin Spanish accent" en la descripción de voz.

**Ejemplo antes:**
```
Style Prompt: "warm friendly child voice"
(Mureka genera: voz con acento argentino fuerte)
```

**Ejemplo después:**
```
Style Prompt: "warm friendly child voice with neutral Latin Spanish accent"
(Mureka genera: voz neutra latino)
```

**Aplicar en futuras canciones cuando:**
- Toda canción de Talo
- Mureka Style Prompt para versión en español

**Evitar cuando:**
- Si el usuario explícitamente pide acento regional específico

---

## Aprendizaje 15 — Shorts: primeros 3 segundos deben ser AUDIO hook, no intro musical larga

**Fecha:** 16/05/2026  
**Tema / canción:** Formato Shorts/Reels  
**Tipo de aprendizaje:** Optimización por plataforma

**Problema detectado:**
Shorts con intro instrumental de 3+ seg antes de la voz pierden vistas en TikTok/Reels. El hook (voz) debe aparecer INMEDIATAMENTE (seg 0-1).

**Corrección aprobada:**
En Short/Reel, música de fondo puede empezar en seg 0, pero voz de Talo debe entrar en seg 0-2 máximo. Hook principal debe estar en seg 0-3.

**Regla nueva:**
Short/Reel timing: Seg 0 = inicio (música + voz simultánea). Seg 0-3 = hook/gancho debe estar presente. Seg 3+ = desarrollo.

**Ejemplo antes:**
```
Short:
0:00-0:04 — Intro instrumental (4 seg sin voz)
0:04-0:08 — Primer hook de Talo
(Pérdida de atención en primeros 4 seg)
```

**Ejemplo después:**
```
Short:
0:00-0:01 — Música + voz de Talo: "¡Uno, dos, Talo saltó!" (hook inmediato)
0:01-0:15 — Coro
0:15+ — Desarrollo
```

**Aplicar en futuras canciones cuando:**
- Versión Shorts (30-45 seg)
- Versión Reels (30-60 seg)
- Plataformas con scroll (TikTok, Instagram Reels, YouTube Shorts)

**Evitar cuando:**
- YouTube Kids versión larga (puede tener intro instrumental)

---

## Aprendizaje 16 — Evitar rangos de notas amplios; máximo 5-6 notas distintas en coro

**Fecha:** 16/05/2026  
**Tema / canción:** Melodía simple  
**Tipo de aprendizaje:** Error a evitar

**Problema detectado:**
Coros con 8+ notas distintas son difíciles de cantar/imitar para edad 2-5 años. Máximo 5-6 notas mantiene simplicidad.

**Corrección aprobada:**
Limitar rango melódico de coro a máximo 5-6 notas distintas. Esto no significa monótono; significa notas bien espaciadas y repetidas.

**Regla nueva:**
Coro: máximo 6 notas distintas. Verso: puede tener hasta 8 si es necesario, pero coro debe ser simple.

**Ejemplo antes:**
```
Coro con notas: Do, Re, Mi, Fa, Sol, La, Si, Do# (8 notas = demasiado complejo)
```

**Ejemplo después:**
```
Coro con notas: Do, Re, Mi, Sol, La (5 notas = simple, fácil de cantar)
```

**Aplicar en futuras canciones cuando:**
- Edad 2-5 años
- Coro debe ser fácil de repetir

**Evitar cuando:**
- Jamás; es regla de calidad infantil

---

## Aprendizaje 17 — Negative Guidance específico por tema es más efectivo que genérico

**Fecha:** 16/05/2026  
**Tema / canción:** Prompt de Mureka - Negative Guidance  
**Tipo de aprendizaje:** Descubrimiento de Mureka

**Problema detectado:**
Negative Guidance genérico ("No drums, no bass") no guía bien a Mureka. Negative Guidance específico por tema (ej. para "sueño": "No sudden loud sounds, No tempo changes") es más preciso.

**Corrección aprobada:**
Crear 10 sets diferentes de Negative Guidance (uno por categoría temática). No usar el mismo para todas las canciones.

**Regla nueva:**
Cada categoría temática (Números, Movimiento, Sueño, Emociones, etc.) tiene su propio Negative Guidance específico.

**Ejemplo antes:**
```
Negative Guidance (genérico para TODO):
"No rap delivery, No aggressive drums, No adult vocals"
(Se aplica igual a canción de sueño y a canción de movimiento)
```

**Ejemplo después:**
```
Negative Guidance (para canción de SUEÑO):
"No sudden loud sounds, No percussive attacks, No tempo changes, No high frequency screeches"

Negative Guidance (para canción de MOVIMIENTO):
"No smooth ambient sounds, No slow tempo, No soft dynamics, No reverb heavy"
```

**Aplicar en futuras canciones cuando:**
- Toda canción
- Mureka Style Prompt debe incluir Negative Guidance específico por tema

**Evitar cuando:**
- Jamás; siempre usar Negative Guidance específico

---

## Aprendizaje 18 — Storyboard debe ser "acción visual clara", no "escenas vagas"

**Fecha:** 16/05/2026  
**Tema / canción:** Dirección visual  
**Tipo de aprendizaje:** Patrón que funciona

**Problema detectado:**
Storyboard vago ("Talo en fondo colorido") no ayuda a animador. Storyboard claro ("Talo da 3 saltos hacia la izquierda, cada salto: rojo, azul, verde") es preciso.

**Corrección aprobada:**
Storyboard debe ser acción-específico: números, colores, direcciones, objetos. No adjetivos vagos.

**Regla nueva:**
Storyboard línea: "Talo [acción precisa]: [objeto/color/número específico], [dirección si aplica]"

**Ejemplo antes:**
```
Storyboard: "Verso 1 — Talo está feliz, hay colores"
(Demasiado vago)
```

**Ejemplo después:**
```
Storyboard: "Verso 1 — Talo da 3 saltos hacia arriba (uno, dos, tres), cada salto cambia su color: rojo, azul, verde"
(Acción clara, animador entiende exactamente qué dibujar)
```

**Aplicar en futuras canciones cuando:**
- Toda canción con componente visual
- Entregar storyboard a animador

**Evitar cuando:**
- Jamás; storyboard debe SIEMPRE ser claro

---

## Aprendizaje 19 — Intro corto (4-6 seg) + coro temprano = mejor retención inicial

**Fecha:** 16/05/2026  
**Tema / canción:** Estructura de entrada  
**Tipo de aprendizaje:** Corrección de estructura

**Problema detectado:**
Intros largos (10+ seg) retrasan la entrada del coro y del contenido educativo. Intros cortos (4-6 seg) permiten coro antes del seg 20.

**Corrección aprobada:**
Limitar intro a máximo 6 segundos. Hook o identificación de Talo puede estar en el intro, pero no debe ocupar más de 6 seg.

**Regla nueva:**
Intro: máximo 6 seg. Estructura ideal: Intro (4-6 seg) → Coro (10-15 seg) → Verso → Coro. Esto asegura coro antes del seg 20.

**Ejemplo antes:**
```
Intro:        0:00-0:12 (12 seg de música sin contenido)
Verso:        0:12-0:25
Coro:         0:25-0:40 (coro entra en seg 25, pasando el límite)
```

**Ejemplo después:**
```
Intro:        0:00-0:05 (5 seg - identidad de Talo)
Coro:         0:05-0:18 (coro en seg 5 - excelente retención)
Verso:        0:18-0:30
```

**Aplicar en futuras canciones cuando:**
- Toda canción de YouTube Kids 1:45-2:15
- Objetivo sea coro antes del seg 20

**Evitar cuando:**
- Canción narrativa donde intro larga es necesaria para contexto

---

## Aprendizaje 20 — Mureka genera mejor audio cuando BPM, instrumentación y mood están TODOS en el prompt

**Fecha:** 16/05/2026  
**Tema / canción:** Completitud del Style Prompt  
**Tipo de aprendizaje:** Descubrimiento de Mureka

**Problema detectado:**
Prompts incompletos a Mureka (ej. solo "BPM 110" sin mood/instrumentos) generan audio inconsistente. Prompts completos (BPM + mood + instrumentación + tempo + notas) generan audio cohesivo.

**Corrección aprobada:**
Toda instrucción a Mureka debe incluir: Título + Estilo + Mood + BPM + Instrumentación + Notas de producción. Nada faltante.

**Regla nueva:**
Style Prompt completo = [Title] + [Style] + [Mood] + [BPM] + [Instruments] + [Production Notes]. Si falta alguno, resultado es menos consistente.

**Ejemplo antes:**
```
"Children's counting song, 110 BPM, ukulele"
(Falta mood, falta instrumentación completa, falta notas)
```

**Ejemplo después:**
```
"Diez Saltitos de Color: Bright Latin children's counting song, playful marching mood, 110 BPM, featuring ukulele, xylophone, hand claps, light marimba, clean production, clear vocal delivery, 2-second pause in bridge"
(Completo, Mureka entiende exactamente qué generar)
```

**Aplicar en futuras canciones cuando:**
- Toda instrucción a Mureka
- Siempre incluir: Título + Estilo + Mood + BPM + Instrumentación + Notas

**Evitar cuando:**
- Jamás omitir componentes; siempre enviar Style Prompt completo

---

## Reglas activas aprendidas

| Regla | Tipo | Aplicar cuando | Evitar cuando |
|---|---|---|---|
| Coro antes del seg 20 en canción educativa completa; si entra entre 20–30 seg, marcarlo como ajuste menor y proponer corrección | Ajuste de estructura | Canciones YouTube Kids de 1:30–2:30, temas simples (colores, números, animales) | Canción narrativa con intro justificada, canción tranquila/sueño, intro larga solicitada explícitamente |
| Incluir acción visual memorable propia de Talo (color, cola, manchas, saltos, transformación) + hook pegajoso en coro, no solo instrucción plana | Mejora creativa y marca | Canciones educativas simples, primera versión plana, Talo solo nombrado sin acción | Canción de aula extremadamente simple, canción tranquila/sueño, acción visual inapropiada para edad |

---

## Prompts de Mureka que funcionaron

| Canción | Style Prompt efectivo | BPM | Edad | Resultado |
|---|---|---|---|---|
| *Pendiente de registrar* | | | | |

---

## Prompts de Mureka que fallaron

| Canción | Style Prompt problemático | BPM | Problema específico | Corrección |
|---|---|---|---|---|
| *Pendiente de registrar* | | | | |

---

## Decisiones creativas aprobadas para Talo

| Decisión | Ámbito | Aprobado | Notas |
|---|---|---|---|
| *Pendiente de registrar* | | | |

---

## Cómo usar este archivo

1. **Al iniciar una nueva canción** — revisar las secciones "Reglas activas aprendidas" y "Prompts de Mureka que funcionaron" para aplicar conocimiento previo
2. **Al evaluar un resultado** — si algo no funciona, verificar "Prompts de Mureka que fallaron" para evitar repetir el error
3. **Al aprobar una corrección** — el usuario comunica la aprobación y Claude propone un registro en este archivo
4. **En duda sobre un patrón** — buscar en "Decisiones creativas aprobadas" si hay precedentes

Este archivo crece con cada sesión; es el **historial de experiencia** de Talo Music Producer.

---

## Histórico de Generaciones por Tema + Edad

**NUEVO:** Este registro automático se llena cada vez que generamos una canción. Permite detectar patrones y evitar errores recurrentes en futuras canciones del mismo tema/edad.

### Números (1–10)

**Edad 2–3 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 3–4 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 4–5 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 5–6 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

---

### Colores

**Edad 2–3 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 3–4 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 4–5 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 5–6 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

---

### Letras / Alfabeto

**Edad 3–4 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 4–5 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 5–6 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

---

### Animales

**Edad 2–4 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 4–6 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

---

### Emociones

**Edad 3–5 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 4–6 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

---

### Movimiento / Acciones

**Edad 3–5 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 4–6 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

---

### Rutinas (Comer, bañarse, dormir)

**Edad 2–4 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 3–5 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

---

### Emociones / Comportamiento

**Edad 3–5 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 4–6 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

---

### Inglés Básico

**Edad 3–5 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 4–6 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

---

### Familia / Relaciones

**Edad 3–5 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 4–6 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

---

### Comida

**Edad 2–4 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 3–5 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

---

### Transporte

**Edad 3–5 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

**Edad 4–6 años**
| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Pendiente | — | — | — | — | — |

---

### Cómo se llena este histórico

**Automáticamente (Claude):**
1. Después de generar una canción y evaluarla contra los 9 Must-Have
2. Claude registra automáticamente: tema + edad + estructura + BPM + problemas + ajustes + resultado
3. Esta información se integra en el histórico correspondiente
4. En futuras canciones del mismo tema/edad, Claude consulta automáticamente este histórico y evita patrones conocidos

**Consolidación:**
- El histórico crece con cada generación
- Al final de cada sesión (o cuando lo pidas), Claude extrae patrones y actualiza "Reglas activas aprendidas"
- Ejemplo: Si 3 generaciones de "Números 3–4 años" fallan por "coro tardío", se agrega regla: "Para Números 3–4, mover coro a segundo 10 máximo"
