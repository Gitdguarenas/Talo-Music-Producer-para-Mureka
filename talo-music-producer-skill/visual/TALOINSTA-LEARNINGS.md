# TaloInsta — Registro de Aprendizajes y Errores

> Este archivo se actualiza al final de CADA sesión de generación de storyboard.
> Su propósito es evitar que se repitan errores y mantener la calidad y consistencia del universo TaloInsta.
> **Siempre léelo antes de comenzar una nueva generación.**

---

## 📌 REGLAS GLOBALES (extraídas de experiencia acumulada)

> Esta sección se va llenando con reglas consolidadas a medida que se generan storyboards.
> Cada regla tiene origen en un error o corrección real.

1. Estilo visual: SIEMPRE usar "3D Pixar cartoon style, smooth 3D render, soft volumetric lighting" — nunca "2D cartoon illustration style"
2. Los prompts van AGRUPADOS al final de cada sección en un bloque "## PROMPTS — [SECCIÓN]", no inline frame por frame
3. Cada sección tiene 4 subsecciones de prompts: imágenes individuales (8) → grid imagen → videos individuales (8) → grid video
4. El grid de video Seedance 2 describe la secuencia completa de 8 escenas en orden estricto, sin saltar ninguna
5. El frame de silencio/pausa del Verso 3 es siempre una imagen completamente quieta (personaje exhausto sentado o paralizado)
6. Los cambios de color de Talo deben ser graduales: usar "shifting to", "returning to", "fading from" en los descriptores
7. Siempre incluir la escala relativa cuando aparecen 2+ personajes: Talo 90cm > Nuti 85cm > Tuco 80cm > Rubí 75cm
8. Cada storyboard DEBE incluir un "SISTEMA DE ANALYTICS TRACKING" al inicio con tabla de frames→timestamps para correlacionar con datos de retención de YouTube
9. Color arc de Talo en episodios de miedo: Verde → Azul-Verde (curioso) → Azul (miedo leve) → Azul-Violeta (miedo alto) → Azul-Negro (paralizado) → Verde-Azul (primer alivio) → Verde (resolución) → Verde-Amarillo (confianza)
10. Cada storyboard debe incluir tabla "RESUMEN ANALYTICS TRACKING POST-PUBLICACIÓN" al final, con campos vacíos para llenar después de recibir datos de YouTube Studio
11. El gesto "1-2-3" con dedos de Talo es gesto SIGNATURE de la marca — incluir siempre que la canción lo permita
12. Callbacks visuales: usar el mismo frame/elemento del Intro en el Outro pero con emoción transformada (ej: gotita aterradora → gotita hermosa)
13. **[REELS — DATO REAL]** Frame 1 de un Reel con ojos cerrados + fondo boscoso causó 50% de drop en los primeros 3 segundos y 90% de drop para los 10 segundos. Regla permanente: Frame 1 de Reels SIEMPRE tiene ojos abiertos mirando a cámara + fondo sólido sin escenario complejo + Talo ya en plena acción desde frame 0
14. **[REELS]** El color de Talo en Frame 1 nunca es verde neutro — siempre el tono más vivo de la sesión (amarillo, naranja, multicolor). Verde se reserva para frames de calma (frames 2-4), nunca el gancho
15. **[REELS]** En Seedance 2, el prompt de Frame 1 SIEMPRE incluye: `character is ALREADY mid-action at frame 0, no fade-in, instant full brightness, no transition` — si no lo dice, el generador puede crear una entrada suave que destruye el gancho

---

## ⚠️ ERRORES FRECUENTES A EVITAR

> Esta sección lista patrones de error que han aparecido más de una vez.

*[Vacío — se poblará con uso]*

---

## 📅 HISTORIAL DE SESIONES

<!-- FORMATO para cada entrada nueva:

## [YYYY-MM-DD] — [Título de la Canción]

### ✅ Lo que funcionó bien
-

### ⚠️ Errores cometidos / correcciones necesarias
-

### 💬 Feedback del usuario
-

### 📌 Reglas nuevas a recordar (agregar también a REGLAS GLOBALES si aplica)
-

---
-->

## 2026-05-17 — Respira con Talo

### ✅ Lo que funcionó bien
- La estructura de 12 secciones × 8 frames (96 frames totales) cubrió toda la canción sin forzar ni cortar
- El arco de color de Talo fue narrativamente coherente: Verde → Naranja (Verso 2) → Naranja-Rojo (Verso 3 pico) → Verde suave (consolado) → Amarillo (celebración)
- La pausa de 2 segundos de silencio del Verso 3 se tradujo visualmente en un frame estático de Talo agotado — solución efectiva
- La distinción entre el Coro 1 (Talo solo, intentando) y el Coro repetición (invitando al espectador) añadió profundidad narrativa
- Los prompts Magnific en inglés siguieron el formato de lenguaje natural sin sintaxis Midjourney
- Los prompts Seedance 2 incluyen siempre movimiento de cámara + duración
- Los personajes usaron los descriptores exactos de personajes.md en todos los frames

### ⚠️ Errores / notas técnicas
- El volumen de 96 frames requirió dividir la generación en 3 partes — considerar esto para canciones largas
- El frame 84 (Tuco vuela, Rubí y Nuti abrazados) tiene 3 personajes sin Talo — es una excepción justificada por la narrativa

### 💬 Feedback del usuario
- Cambiar estilo de "2D cartoon" a "3D Pixar cartoon" (los personajes son 3D render estilo Pixar)
- Los prompts deben estar agrupados al final de cada sección para fácil copy-paste
- Agregar grid de video Seedance 2 (secuencia completa de 8 escenas en orden)

### 📌 Reglas nuevas a recordar
- Estilo: SIEMPRE 3D Pixar cartoon style, smooth 3D render, soft volumetric lighting
- Prompts siempre agrupados en bloque al final de la sección (no inline)
- Grid de video = 1 prompt con 8 escenas en orden estricto para Seedance 2
- Para canciones con más de 8 secciones, generar el storyboard en bloques
- El CORO tiene dos funciones: antes del Verso 3 = intento en solitario; después = celebración con amigos

---

## 2026-05-20 — Diagnóstico de retención: Reel publicado (nombre no registrado)

### ✅ Lo que funcionó bien
- El thumbnail generó clics (50% Feed, 25% Historias, 25% Reels) — la imagen estática funciona como gancho de pre-clic
- Reel de 33 segundos — duración dentro del rango correcto

### ⚠️ Errores / diagnóstico de datos reales
- **Drop del 50% en 0-3 segundos** → Frame 1 falló completamente como gancho de retención
- **Drop del 90% para el segundo 10** → El contenido posterior al Frame 1 fue irrelevante porque casi nadie llegó
- **Causa identificada visualmente:** Talo con ojos cerrados + fondo boscoso complejo en Frame 1
- Thumbnail y primer frame discrepan en energía: el thumbnail puede captar el clic pero si el primer frame del video es "tranquilo", el usuario abandona de inmediato

### 💬 Feedback del usuario
- "Necesitamos ajustar los reels. Caen muy fuerte"
- La curva de retención fue compartida directamente como evidencia

### 📌 Reglas nuevas a recordar (agregadas a REGLAS GLOBALES como #13, #14, #15)
- Frame 1 de Reels = ojos abiertos + fondo sólido + Talo ya en plena acción desde frame 0 (sin excepción)
- Color de Talo en Frame 1 nunca verde neutro — siempre el más vivo (amarillo/naranja/multicolor)
- Prompts Seedance para Frame 1 SIEMPRE incluyen: `character is ALREADY mid-action at frame 0, no fade-in, instant full brightness`
- El thumbnail siendo bueno pero el reel cayendo = el HOOK VISUAL del video (no la imagen estática) es el problema
