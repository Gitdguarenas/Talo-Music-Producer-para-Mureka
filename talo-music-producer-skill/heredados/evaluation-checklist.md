# Evaluation Checklist — Control de calidad para canciones de Talo

## Cómo usar este checklist

Este checklist se aplica en tres momentos distintos del flujo de producción:

1. **Antes de enviar a Mureka** — verificar que la letra y el prompt están listos para generar
2. **Después de recibir el audio generado** — evaluar el resultado de Mureka contra los criterios de calidad
3. **Antes de publicar o crear video** — validación final antes de animación, edición y publicación

Completar todas las secciones relevantes según el momento. No todas las secciones aplican igual en cada etapa.

---

## Sistema de Ponderación

Los 68 ítems están clasificados en 3 niveles de importancia:

| Nivel | Símbolo | Peso | Descripción | Cantidad |
|---|---|---|---|---|
| **Must-Have** | 🔴 | 60% del score | Críticos absolutosque no pueden fallar | 8 ítems |
| **Should-Have** | 🟠 | 30% del score | Muy importantes, enriquecen la calidad | 35 ítems |
| **Nice-to-Have** | 🟡 | 10% del score | Opcionales, mejoran pero no son esenciales | 25 ítems |

### Formula de Scoring Ponderado

```
Score final = (MH-cumplidos / MH-totales × 60) + (SH-cumplidos / SH-totales × 30) + (NH-cumplidos / NH-totales × 10)

Notas:
- Si un ítem es N/A (no aplica), se excluye del denominador
- Mínimo para pasar: todas las MH + 80% de SH
- Un fallo en MH puede bajar score >10%
```

### Umbrales de Decisión

| Score | Estado | Acción |
|---|---|---|
| **90–100%** | ✅ Aprobada | Proceder a producción / video |
| **75–89%** | 🔧 Ajustar letra / prompt | Corregir ítems fallidos y reenviar a Mureka |
| **60–74%** | 🔄 Regenerar en Mureka | Ajustar prompt completo y regenerar desde cero |
| **Menos de 60%** | ❌ Rechazar | Descartar y recomenzar con nuevo enfoque |
| **Cualquier MH fallido** | ❌ Rechazar | Incluso si score total es alto |
| **Copyright alto** | ❌ Rechazar | Prioridad sobre otras métricas |

---

## Sistema de decisión (simplificado)

| Resultado | Criterio | Acción |
|---|---|---|
| **Aprobada** | Score 90–100, sin riesgos de copyright | Proceder a producción / video |
| **Ajustar letra / prompt** | Score 75–89 o problemas menores específicos | Corregir los ítems fallidos y reenviar a Mureka |
| **Regenerar en Mureka** | Score 60–74 o problemas estructurales en el audio | Ajustar prompt completo y regenerar desde cero en Mureka |
| **Rechazar** | Score menor a 60, riesgo de copyright alto, tono inadecuado, o fallo en cualquier MH | Descartar y recomenzar con nuevo enfoque creativo |

> **CRÍTICO:** Riesgo de copyright alto O cualquier ítem Must-Have fallido = RECHAZAR automáticamente, sin importar score total.

---

## A. Marca e identidad Talo

- [ ] 🔴 **MH** — La letra usa español latino neutro (sin modismos regionales marcados)
- [ ] 🟠 **SH** — El tono es cálido, seguro y familiar para niños de 2–6 años
- [ ] 🔴 **MH** — La presencia de Talo en la letra es natural, no forzada (Talo es activo)
- [ ] 🔴 **MH** — No hay referencias a marcas externas, violencia, miedo ni temas inapropiados
- [ ] 🟠 **SH** — El mensaje educativo es claro y simple
- [ ] 🟡 **NH** — El estilo es consistente con el universo de El Mundo de Talo

**Ítems: 6 (MH: 3, SH: 2, NH: 1)**

---

## B. Objetivo educativo

- [ ] 🟠 **SH** — Hay un solo objetivo educativo principal (no mezclar colores + números + emociones en una canción)
- [ ] 🔴 **MH** — El vocabulario es apropiado para la edad objetivo (2–6 años)
- [ ] 🟠 **SH** — El aprendizaje ocurre dentro de un juego, historia o actividad — no como clase rígida
- [ ] 🟠 **SH** — La palabra o concepto clave se repite al menos 3 veces en la canción
- [ ] 🟡 **NH** — El niño puede identificar qué aprendió sin que se lo declaren explícitamente

**Ítems: 5 (MH: 1, SH: 3, NH: 1)**

---

## C. Letra y cantabilidad

- [ ] 🟠 **SH** — Las frases cantadas tienen entre 4 y 8 palabras por línea
- [ ] 🔴 **MH** — Las palabras del hook son de 1–3 sílabas (hook pegajoso)
- [ ] 🔴 **MH** — El coro es fácil de repetir en las primeras 2 escuchas (hook cantable)
- [ ] 🟠 **SH** — La densidad de palabras es baja (espacio para respirar entre frases)
- [ ] 🟠 **SH** — Hay pausas suficientes para que el niño procese o responda
- [ ] 🟠 **SH** — La pronunciación es clara y sin palabras ambiguas
- [ ] 🟡 **NH** — No hay exceso de texto en ninguna sección

**Ítems: 7 (MH: 2, SH: 4, NH: 1)**

---

## D. Estructura musical

- [ ] 🟠 **SH** — El gancho aparece en los primeros 0–10 segundos (retención inicial)
- [ ] 🔴 **MH** — El primer coro entra idealmente antes de los 20 segundos, y nunca después de los 30 (CRÍTICO para retención)
- [ ] 🔴 **MH** — La intro dura 10 segundos o menos (facilita coro temprano)
- [ ] 🟠 **SH** — El coro se repite al menos 3 veces (versión larga) o 2 veces (Short)
- [ ] 🟠 **SH** — Hay al menos un cambio de energía claro entre secciones
- [ ] 🟡 **NH** — El cierre es memorable o permite loop natural

**Ítems: 6 (MH: 2, SH: 3, NH: 1)**

---

## E. Producción para Mureka

- [ ] 🟠 **SH** — Las etiquetas de sección están en inglés (`[Intro]`, `[Verse]`, `[Chorus]`, `[Final Chorus]`, etc.)
- [ ] 🟠 **SH** — El prompt musical está escrito en inglés
- [ ] 🟠 **SH** — El estilo musical está bien definido (genre tags, mood tags)
- [ ] 🟠 **SH** — Se indicó BPM sugerido o descripción de tempo
- [ ] 🟠 **SH** — Los instrumentos solicitados son apropiados para canciones infantiles
- [ ] 🟠 **SH** — El tipo de voz está especificado (edad, género, acento, neutral latino)
- [ ] 🟡 **NH** — Se incluyó Negative Guidance si hay riesgos de resultado adulto o incorrecto
- [ ] 🟡 **NH** — Las instrucciones de producción están en el Style Prompt, no dentro de las lyrics

**Ítems: 8 (MH: 0, SH: 6, NH: 2)**

---

## F. Interacción infantil

- [ ] 🟠 **SH** — Hay al menos una pregunta directa al niño
- [ ] 🟠 **SH** — Hay al menos una instrucción de movimiento corporal
- [ ] 🟠 **SH** — Hay al menos una pausa de respuesta ([Pause] de 1.5–3 segundos)
- [ ] 🟡 **NH** — Las onomatopeyas presentes aportan valor expresivo o participativo
- [ ] 🟠 **SH** — Si aplica, hay un momento de call-and-response claro
- [ ] 🟡 **NH** — El clip puede funcionar con participación familiar (padre/madre canta con el niño)

**Ítems: 6 (MH: 0, SH: 4, NH: 2)**

---

## G. Ritmo, arreglo y retención

- [ ] 🔴 **MH** — El BPM es adecuado para el tipo de canción y la edad objetivo (métrica consistente)
- [ ] 🟠 **SH** — La energía de cada sección es coherente con su función
- [ ] 🟠 **SH** — Hay al menos un micro cambio de textura o instrumento cada 15–25 segundos
- [ ] 🟠 **SH** — El [Chorus] tiene más capas de producción que el [Verse]
- [ ] 🟡 **NH** — El bridge o pausa no genera aburrimiento ni desconexión
- [ ] 🟠 **SH** — El primer tercio de la canción (0:00–0:40) es el más fuerte

**Ítems: 6 (MH: 1, SH: 4, NH: 1)**

---

## H. Shorts / Reels

- [ ] 🟠 **SH** — Existe o está planificada una versión corta de 25–45 segundos
- [ ] 🟠 **SH** — La versión corta tiene una sola idea educativa
- [ ] 🟠 **SH** — El hook de la versión corta aparece en los primeros 3 segundos
- [ ] 🟠 **SH** — Hay una frase repetible identificada para el clip corto
- [ ] 🟡 **NH** — El cierre de la versión corta permite loop o tiene CTA natural
- [ ] 🟡 **NH** — La duración de la versión corta está dentro del rango recomendado

**Ítems: 6 (MH: 0, SH: 4, NH: 2)**

---

## I. Visual / storyboard

- [ ] 🟠 **SH** — Cada sección principal sugiere una acción visual clara
- [ ] 🟠 **SH** — La letra es sincronizable con animación o ilustración
- [ ] 🟡 **NH** — Hay momentos identificados para cambio de escena o plano
- [ ] 🟠 **SH** — Los gestos descritos en la letra son simples de animar o de imitar
- [ ] 🟡 **NH** — La canción tiene potencial visual para producción de video

**Ítems: 5 (MH: 0, SH: 3, NH: 2)**

---

## J. Copyright y diferenciación

- [ ] 🟠 **SH** — No se copia melodía, letra ni estructura demasiado reconocible de otra canción
- [ ] 🟠 **SH** — No se imita directamente ningún artista, canal o personaje conocido
- [ ] 🟠 **SH** — Las referencias de competencia se usaron solo para extraer patrones generales
- [ ] 🟠 **SH** — La identidad visual y sonora de Talo es diferenciada
- [ ] 🟡 **NH** — La distancia creativa respecto a las referencias es suficiente

**Ítems: 5 (MH: 0, SH: 4, NH: 1)**

> **NOTA CRÍTICA:** Si hay riesgo de copyright ALTO en cualquier ítem J, automáticamente RECHAZAR la canción, sin importar el score total en otras secciones.

---

## K. Evaluación del audio generado

*(Completar solo después de recibir resultado de Mureka)*

- [ ] 🟠 **SH** — La voz se entiende con claridad en toda la canción
- [ ] 🟠 **SH** — La letra cantada coincide razonablemente con lo escrito
- [ ] 🟠 **SH** — El tempo funciona correctamente para niños de 2–6 años
- [ ] 🟠 **SH** — El coro destaca claramente sobre los versos
- [ ] 🟠 **SH** — No hay artefactos de audio, cortes extraños ni glitches
- [ ] 🟠 **SH** — El sonido no es adulto, oscuro ni agresivo
- [ ] 🟡 **NH** — La canción mantiene la atención durante toda su duración
- [ ] 🟠 **SH** — El resultado es apto para producción de video infantil

**Ítems: 8 (MH: 0, SH: 7, NH: 1)**

---

## Score Ponderado Calculado

**Fórmula:**
```
Score final = (MH-cumplidos / MH-totales × 60) + (SH-cumplidos / SH-totales × 30) + (NH-cumplidos / NH-totales × 10)

Si un ítem es N/A (no aplica):
- Marcar como [ ] N/A (checkbox con "N/A" escrito)
- Excluir del denominador de su categoría
- Ejemplo: Si no hay bridge, item F.6 = N/A, no se cuenta en denominador de SH

Cálculo con N/A:
- Denominador se ajusta automáticamente
- Si 35 items SH totales y 2 son N/A → se cuentan solo 33 items SH
- Score = (items-cumplidos / 33) × 30 (en lugar de / 35)
```

**Cuándo usar N/A:**
- Item aplicable pero NO se incluyó en la canción (ej: sin bridge = F.5 = N/A)
- Item de estructura opcional que no se necesitó
- Item de formato que no aplica a este tipo de canción
- **NUNCA:** marcar como N/A un item que SÍ se incluyó pero falló

**Desglose de ítems:**
- Must-Have (MH): 8 ítems — A.1, A.3, A.4, B.2, C.2, C.3, D.2, D.3, G.1
  - Ponderación: 60% del score final
  - Mínimo requerido: 100% (todos deben pasar)
  
- Should-Have (SH): 35 ítems — resto de la evaluación
  - Ponderación: 30% del score final
  - Mínimo requerido: 80% de los SH
  
- Nice-to-Have (NH): 25 ítems — items opcionales/mejoras
  - Ponderación: 10% del score final
  - Mínimo requerido: 0% (no es obligatorio)

**Total: 68 ítems (pre-Mureka: 60 ítems sin sección K)**

| Score | Estado | Acción | Regla |
|---|---|---|---|
| **90–100%** | ✅ Aprobada | Proceder a producción | Todos MH pasan + 80% SH |
| **75–89%** | 🔧 Ajustar | Corregir ítems y reenviar | Todos MH pasan pero SH <80% |
| **60–74%** | 🔄 Regenerar | Revisar prompt completo | Algunos MH pasan pero no todos |
| **<60%** | ❌ Rechazar | Replantear enfoque | Múltiples MH fallidos |
| **Cualquier MH fallido** | ❌ Rechazar INMEDIATO | No importa score total | Overrule automático |
| **Copyright alto** | ❌ Rechazar | Prioridad máxima | Overrule automático |

---

## Diagnóstico rápido

| Problema detectado | Causa probable | Acción recomendada |
|---|---|---|
| **El coro no engancha** | Hook débil, coro tardío o melodía poco memorable | Reescribir el coro; moverlo antes del segundo 20 |
| **La letra no se entiende** | Demasiadas palabras, BPM muy alto o pronunciación poco clara | Reducir densidad; bajar BPM; pedir pronunciación clara en Style Prompt |
| **Suena demasiado adulta** | Instrumentación compleja, vocabulario adulto o BPM inadecuado | Simplificar arreglo; revisar vocabulario; ajustar BPM |
| **Muy lenta o aburrida** | BPM bajo, falta de micro cambios, verso sin energía | Aumentar BPM; agregar capa rítmica; introducir variación cada 20 seg |
| **Demasiadas palabras** | Versos densos, frases largas, exceso de información | Cortar versos; elevar espacios; reducir a 1 idea por sección |
| **No sirve para Short** | Sin hook claro, coro tardío o demasiadas ideas | Identificar frase clave; extraer solo coro + una idea; diseñar cierre loop |
| **Parece una canción conocida** | Estructura o melodía demasiado similar a referente | Aumentar distancia creativa; cambiar tempo, tonalidad y estructura |
| **Audio con artefactos** | Prompt con instrucciones contradictorias o Mureka saturado | Simplificar Style Prompt; regenerar con menos instrucciones simultáneas |
| **Niño no puede participar** | Sin pausas, sin preguntas, sin movimientos | Agregar [Pause], instrucción de movimiento y al menos una pregunta |
| **Final abrupto** | Outro demasiado corto o sin diseño de loop | Alargar outro; diseñar cierre que conecte con intro |

---

## Salida esperada del evaluador

Cuando Claude evalúa una canción usando este checklist, debe devolver:

1. **Score ponderado** — cálculo con fórmula (MH% × 0.6) + (SH% × 0.3) + (NH% × 0.1)
2. **Desglose por categoría** — Score de MH, SH, NH por separado
3. **Decisión** — Aprobada / Ajustar / Regenerar / Rechazar con **regla de override** si aplica
4. **Problemas principales** — máximo 3 problemas, priorizando fallos en MH
5. **Cambios concretos** — qué líneas, secciones o instrucciones cambiar exactamente
6. **Recomendación de acción** — si conviene ajustar el prompt, reescribir la letra o regenerar completo
7. **Versión corregida** — si aplica, entregar lyrics o Style Prompt corregido listo para usar

Formato de salida sugerido:

```
=== EVALUACIÓN PONDERADA ===

Score final: XX/100 (XX%)
  - Must-Have: X/8 ítems (XX%)  [60% del score]
  - Should-Have: XX/35 ítems (XX%)  [30% del score]
  - Nice-to-Have: XX/25 ítems (XX%)  [10% del score]

Decisión: [✅ Aprobada / 🔧 Ajustar / 🔄 Regenerar / ❌ Rechazar]

[Si hay override: ⚠️ OVERRIDE: Rechazar por [razón: MH fallido / Copyright alto]]

Problemas principales (priorizados):
1. 🔴 [MH fallido si aplica] ...
2. 🟠 [SH fallido si aplica] ...
3. 🟡 [otro si aplica] ...

Cambios concretos:
- Sección [X]: cambiar "[línea actual]" por "[línea propuesta]"
- Sección [X]: [acción específica]

Acción recomendada:
[Texto específico: reescribir verso, ajustar BPM, regenerar con nuevo prompt, etc.]

[Versión corregida si aplica]
```
