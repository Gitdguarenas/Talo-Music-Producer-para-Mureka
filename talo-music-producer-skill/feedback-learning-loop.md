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
