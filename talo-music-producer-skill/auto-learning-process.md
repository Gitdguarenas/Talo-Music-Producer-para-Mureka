# Auto-Learning Process — Aprendizaje automático de la skill

## Propósito

Este documento explica cómo la skill **aprende automáticamente** sin requerir input explícito del usuario sobre errores, correcciones o patrones.

---

## Dos Mecanismos de Aprendizaje

### 1️⃣ Pre-flight Check + Iteración Interna (Opción 1)

**Cuando se activa:** Después de generar una canción completa

**Proceso:**

```
Usuario pide: "Crea una canción sobre Números para niños de 3–4 años"
                        ↓
Claude genera canción
                        ↓
Claude automáticamente evalúa contra 9 Must-Have (sin mostrar al usuario)
                        ↓
        ¿Pasó 9/9 Must-Have?
          ↙                    ↘
    SÍ (Aprobada)         NO (Fallos detectados)
        ↓                        ↓
    Entrega al usuario    Itera internamente
        ↓                  (ajusta letra/prompt)
    Registra en                  ↓
    Histórico          Evalúa nuevamente
    (0 iteraciones)             ↓
                        ¿Pasó 9/9?
                        ↙        ↘
                    SÍ           NO
                    ↓            ↓
                 Entrega     Itera de nuevo
                    ↓        (max 3 intentos)
                Registra
                (2 iteraciones)
```

**Lo que el usuario ve:**
- Solo la versión final (aprobada)
- Un resumen opcional de qué cambió internamente

**Lo que se registra automáticamente en feedback-learning-loop.md:**

```
### Números — Edad 3–4 años

| Generación | Estructura | BPM | Problemas detectados | Ajustes aplicados | Resultado |
|---|---|---|---|---|---|
| Gen 1 | Loop Educativo | 105 | Hook tardío, densidad Verso 2 | Reescribir Verso 1 con gancho, reducir palabras | ✅ Aprobado (2 iteraciones internas) |
```

---

### 2️⃣ Detección de Patrones + Auto-aplicación (Opción 2)

**Cuando se activa:** Cuando acumulamos 2–3 generaciones del **mismo tema + edad**

**Proceso:**

```
Sesión 1: Números 3–4 → Hook tardío (ajustado)
Sesión 2: Números 3–4 → Hook tardío (ajustado de nuevo)
Sesión 3: Números 3–4 → Hook tardío (ajustado por tercera vez)
                    ↓
        Claude detecta patrón:
        "Para Números 3–4, el hook tardío es recurrente"
                    ↓
        Extrae la solución:
        "Mover hook a Verso 1, línea 1–2"
                    ↓
        Registra como nueva REGLA:
        "Números 3–4: Hook siempre en primeros 5 seg"
                    ↓
        Sesión 4: Números 3–4
        → Claude consulta automáticamente la regla
        → Aplica hook en primeros 5 seg PRE-GENERACIÓN
        → Hook se resuelve desde el inicio
```

**Lo que el usuario ve:**
- La canción ya tiene el hook optimizado
- Al final: "Regla detectada y aplicada: Para Números 3–4, hook en primeros 5 seg"

**Lo que se registra automáticamente en feedback-learning-loop.md:**

```
### Reglas activas aprendidas

**Números (3–4 años):**
- Hook debe aparecer en primeros 5 seg (regla derivada de 3 generaciones con hook tardío)
- Densidad máxima 5 palabras/línea en este rango de edad (evitar incomprensión)
- Estructura Loop Educativo funciona mejor que Narrativa para números
```

---

## Flujo Completo de Una Sesión

### Escenario: Usuario pide 3 canciones en una sesión

**Canción 1: Números 3–4 años**

```
1. Claude revisa feedback-learning-loop.md
   → No hay histórico previo de Números 3–4
   → Aplica reglas generales de edad 3–4

2. Claude genera canción

3. Auto-evaluation (interno):
   ❌ Hook en seg 25 (debería ser seg 5)
   ❌ Coro en seg 22 (debería ser seg 12)

4. Itera internamente:
   - Ajusta Verso 1 con gancho fuerte
   - Mueve coro a segundo verso

5. Re-evalúa:
   ✅ 9/9 Must-Have

6. Entrega al usuario + registra:
   "Números — 3–4: Gen 1, Estructura Loop, BPM 105
   Problemas: Hook tardío + coro timing
   Ajustes: Reescribir Verso 1 + mover coro
   Resultado: ✅ (2 iteraciones internas)"
```

**Canción 2: Colores 4–5 años**

```
1. Claude revisa feedback-learning-loop.md
   → No hay histórico previo de Colores 4–5
   → Aplica reglas generales

2. Claude genera canción

3. Auto-evaluation:
   ✅ 9/9 Must-Have (primera iteración)

4. Entrega + registra:
   "Colores — 4–5: Gen 1, Estructura Educativa, BPM 108
   Problemas: Ninguno
   Ajustes: Ninguno necesarios
   Resultado: ✅ (0 iteraciones internas)"
```

**Canción 3: Números 3–4 años (segunda vez)**

```
1. Claude revisa feedback-learning-loop.md
   → ¡Hay histórico! Números 3–4 con Gen 1
   → Ve que Gen 1 tuvo problemas con hook y coro timing
   → Extrae aprendizaje: "Para Números 3–4, hook temprano es crítico"

2. Claude genera canción CON REGLA PRE-APLICADA:
   - Hook en Verso 1, primeros 10 palabras
   - Coro en segundo verso (seg ~12)

3. Auto-evaluation:
   ✅ 9/9 Must-Have (primera iteración)

4. Entrega + registra + resume:
   "Números — 3–4: Gen 2, Estructura Loop, BPM 110
   Problemas: Ninguno (regla de Gen 1 pre-aplicada)
   Ajustes: Ninguno necesarios
   Resultado: ✅ (0 iteraciones internas)
   
   [RESUMEN SESIÓN]
   Patrón detectado: Números 3–4 requiere hook temprano
   Regla registrada: Para futuras canciones de Números 3–4,
                     aplicar hook antes de seg 10"
```

---

## Qué Se Registra Automáticamente

### Después de cada generación

En `feedback-learning-loop.md > Histórico de Generaciones por Tema + Edad`:

| Campo | Qué es | Ejemplo |
|---|---|---|
| **Generación** | Número secuencial | Gen 1, Gen 2, Gen 3... |
| **Estructura** | Tipo de estructura utilizada | Loop Educativo, Narrativa, Pregunta-Respuesta |
| **BPM** | Tempo elegido | 105, 110, 115 |
| **Problemas detectados** | Qué falló en auto-evaluation | Hook tardío, coro timing, densidad |
| **Ajustes aplicados** | Cómo se arregló | Reescribir Verso 1, mover coro, reducir palabras |
| **Resultado** | Aprobado con X iteraciones | ✅ (0 it), ✅ (2 it), ❌ (rechazada) |

### Al detectar un patrón (2+ generaciones con el mismo problema)

En `feedback-learning-loop.md > Reglas activas aprendidas`:

```
**Números (3–4 años):** [Detectada en Gen 1 y Gen 2]
- Hook debe aparecer en primeros 10 segundos
- Coro entra en segundo verso (seg 12 máximo)
- Densidad máxima 5 palabras por línea
- Estructura Loop Educativo funciona mejor que Narrativa
```

---

## Cómo la Skill Usa Este Aprendizaje

### Paso 4 del Workflow SKILL.md

Cuando Claude va a generar una nueva canción:

```
Tema: Números
Edad: 3–4 años

↓ Consulta feedback-learning-loop.md ↓

¿Hay histórico de Números 3–4?
    ├─ SÍ → Lee "Histórico de Generaciones"
    │       + Lee "Reglas activas aprendidas"
    │       → Aplica automáticamente antes de generar
    │
    └─ NO → Aplica solo reglas generales de edad 3–4
```

### Pre-generación (antes de escribir la canción)

Claude toma decisiones basadas en histórico:

```
"Para Números 3–4, el histórico muestra:
- Hook fue un problema recurrente
- Solución probada: hook en Verso 1, líneas 1–2
- BPM óptimo: 105–110 (ambas generaciones usaron estos)

→ Aplicaré hook muy temprano (línea 1)
→ Elegiré BPM 108 (medio del rango efectivo)
→ Usaré estructura Loop (funcionó bien)"
```

### Durante generación (mientras escribe)

Claude aplica las reglas automáticamente sin mencionarlas.

### Post-generación (auto-evaluation)

Claude:
1. Evalúa contra Must-Have
2. Si falla: Itera internamente usando las mismas reglas
3. Si pasa: Registra automáticamente

---

## Consolidación al Final de la Sesión (Opcional)

Cuando lo pidas o al final de una sesión con múltiples canciones:

```
[RESUMEN DE APRENDIZAJES AUTOMÁTICOS]

PATRONES DETECTADOS ESTA SESIÓN:
- Números 3–4: Hook temprano es crítico (2 gen)
- Colores 4–5: Estructura Educativa funciona (1 gen)
- Emociones 4–6: Validación de sentimientos funciona (1 gen)

REGLAS NUEVAS REGISTRADAS:
✅ Números 3–4: Hook antes seg 10
✅ Colores 4–5: Intro corta, hook visual en cada color
✅ Emociones 4–6: Incluir pausa de 2 seg después de pregunta

MEJORAS OBSERVADAS:
- Gen 1 Números: 2 iteraciones internas
- Gen 2 Números: 0 iteraciones (regla pre-aplicada)
- Gen 3 Colores: 0 iteraciones
- Gen 4 Emociones: 0 iteraciones

EFECTIVIDAD: 75% de canciones aprobadas en primera generación
(vs. sesión anterior: 40%)
```

---

## Casos Especiales

### Caso 1: Usuario rechaza una canción en Mureka

Si después de generar, el usuario dice:
"Envié esta canción a Mureka y el resultado no fue bueno. El hook no funcionó"

Claude:

```
1. Registra en feedback-learning-loop.md:
   "Números 3–4 Gen 1: Mureka feedback — hook no funcionó en audio"

2. Ajusta la regla:
   "Para Números 3–4, el hook texto está bien,
    pero en audio Mureka lo canta muy rápido.
    Solución: Agregar en Style Prompt:
    'Hook must be sung slowly with clear enunciation'"

3. Registra el ajuste de Style Prompt para futuras generaciones
```

### Caso 2: Usuario aprueba una canción con notas

Si el usuario dice:
"Aprobada, pero me gustó cómo soló Verse 2 con la acción física"

Claude:

```
1. Registra como patrón aprobado:
   "Números 3–4: Verso 2 con acción física explícita funciona bien"

2. En futuras canciones de Números 3–4, incluye automáticamente
   acción física explícita en Verso 2
```

---

## Beneficios del Sistema

✅ **Sin esfuerzo del usuario** — No hay que decir "registra esto"
✅ **Mejora automática** — Cada tema/edad/estructura se optimiza
✅ **Transparencia** — Claude siempre explica qué reglas aplicó
✅ **Adaptabilidad** — Las reglas evolucionan con feedback real
✅ **Eficiencia** — Gen 1 puede necesitar iteraciones; Gen 3+ es casi siempre primera intención
✅ **Memoria acumulativa** — Nunca comete dos veces el mismo error en contexto específico

---

## Archivo de Referencia

El corazón del sistema es: **`feedback-learning-loop.md`**

Estructura:
```
Sección 1: Aprendizajes manuales (cuando el usuario quiera registrar algo específico)
Sección 2: Histórico de Generaciones por Tema + Edad (AUTO-FILLED)
Sección 3: Reglas activas aprendidas (DERIVADAS del histórico)
```

---

## Notas Técnicas

- **Máximo 3 iteraciones internas** — Si 3 intentos fallan, Claude pide input del usuario
- **N/A handling** — Si un Must-Have no aplica al tipo de canción, se marca N/A y se excluye
- **Contexto de sesión** — Las reglas se aplican dentro de la sesión; al cambiar de proyecto se consulta el histórico global
- **Actualización del histórico** — Es automática y silenciosa; no interrumpe el flujo de usuario
