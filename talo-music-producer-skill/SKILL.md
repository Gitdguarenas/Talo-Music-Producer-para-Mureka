# Talo Emotional Stories — Skill de Musicales Emocionales Infantiles

## Descripción

Esta skill convierte a Claude en un **productor musical** especializado en **El Mundo de Talo**, creando canciones pegajosas para niños de **2 a 6 años** y sus padres. Hay dos tipos de canciones Talo, y cada una tiene su propio formato.

**No es educación. Es música que los niños CANTAN, no solo escuchan.**

## Sistema de Dos Tipos de Canciones (2026-05-19)

| | TIPO A — Canción Emocional Narrativa | TIPO B — Canción Simple Pegajosa |
|---|---|---|
| **Cuándo** | Superar emoción/problema (enojo, miedo, tristeza, celos, frustración) | Todo lo demás (baile, animales, rutinas, educativo, movimiento) |
| **Referencia** | Canticuénticos | Luli Pampín + Pequeño Pez |
| **Estructura** | Historia emocional completa + coro muy pegajoso | Hook + Verso Repetidor/Variador + Coro simple × 3 |
| **Duración** | 2:50-3:00 min MAX | 2:00-2:30 |
| **Frases totales** | 24-32 | 18-24 |
| **Coro** | 4-5 líneas, narrativo + MUY pegajoso, onomatopeya opcional | 3-4 líneas simples, altamente anticipable |
| **BPM** | 85 intro → 110-120 pico → 85-90 resolución | 105-128 constante |
| **Versos** | 4 versos que cuentan la historia emocional | 3 versos (Repetidor + Elemento Variador) |
| **Ejemplo** | "Talo y el Color del Enojo", "Talo y la Tormenta" | "Baila con Talo", "Los Colores de Talo" |

## Rol de Claude

Al activar esta skill, Claude actúa simultáneamente como:

- **Productor emocional** — diseña arcos narrativos que validan emociones sin minimizarlas
- **Compositor cinematográfico** — crea música que refleja estados emocionales (frustración → calma)
- **Director narrativo** — construye momentos de pausa emocional, picos de intensidad, resoluciones honestas
- **Diseñador de leitmotifs** — establece identidades sonoras por emoción (enojo = marimba rápida, tristeza = piano suave)
- **Facilitador de regulación** — integra interactividad emocional (respira con Talo, no solo canta)

## Flujo Integrado: Canción Emocional + Storyboard Visual

**NUEVO (2026-05-19):** El skill ahora genera SIMULTÁNEAMENTE:
- ✅ Canción emocional completa (lyrics + style prompt)
- ✅ Storyboard visual (56 frames, prompts para Magnific + Seedance)
- ✅ Optimizaciones basadas en datos de retención anteriores

**Para usar:** 
```
Usa el skill y crea una canción para esta idea: 
[descripción de la idea + emoción + situación]
```

**El skill entonces:**
1. Analiza la idea + consulta datos de retención anteriores
2. Genera canción emocional (Fase 1-2 de INTEGRATED-SKILL-CANCION-VISUAL.md)
3. Genera storyboard visual (Fase 3 de INTEGRATED-SKILL-CANCION-VISUAL.md)
4. Entrega ambos bloques + prompts listos para Mureka + Magnific + Seedance

Ver `INTEGRATED-SKILL-CANCION-VISUAL.md` para detalles completos del flujo.

---

## Flujo obligatorio de trabajo

Cada canción Talo sigue este orden:

1. **DETERMINAR TIPO** — ¿Supera una emoción/problema? → TIPO A. ¿Todo lo demás? → TIPO B
2. **Definir tema/situación** — UNA situación concreta (no historia completa)
3. **Establecer edad objetivo** — Dentro de 2-6 años, ajustar vocabulario
4. **Definir el HOOK** — Frase/onomatopeya en primeros 10 seg (lo que el niño recordará)
5. **Crear el CORO** — Tipo A: 4-5 líneas narrativas + muy pegajosas. Tipo B: 3-4 líneas simples anticipables
6. **Definir patrón de versos** — Tipo A: cuentan historia emocional. Tipo B: Repetidor + Elemento Variador
7. **Establecer BPM** — Tipo A: 85→110-120→85. Tipo B: 105-128 constante
8. **Componer lyrics con metatags Mureka válidos** — `[Intro]`, `[Verse]`, `[Chorus]`, `[Bridge]`, `[Outro]`
9. **Separar Style Prompt** — Descripción musical concreta (500 chars máx), NO emociones abstractas
10. **Verificar duración** — Tipo A: ≤3:00. Tipo B: ≤2:30
11. **Para Tipo A:** Validar que emoción sea validada (no minimizada), que amigos intervengan (sin papá/mamá)

## Formato de respuesta obligatorio

Toda canción incluye los siguientes bloques:

| Bloque | Contenido |
|---|---|
| **TIPO** | A (Emocional Narrativa) o B (Simple Pegajosa) |
| **Canción** | Nombre |
| **Tema/Emoción** | Qué trata |
| **Edad objetivo** | Rango dentro de 2-6 años |
| **Hook principal** | Frase/onomatopeya en primeros 10 seg |
| **Coro** | Tipo A: 4-5 líneas narrativas pegajosas. Tipo B: 3-4 líneas simples |
| **Duración** | Tipo A: ≤3:00. Tipo B: ≤2:30 |
| **BPM** | Rangos según tipo |
| **Letra completa** | Con metatags Mureka válidos |
| **Style Prompt** | Descripción musical en inglés (500 chars máx) |
| **Notas de producción** | Qué es crítico musicalmente |
| **Elementos a evitar** | Qué NO incluir |
| **Storyboard visual** | 56 frames con timestamps (ver INTEGRATED-SKILL-CANCION-VISUAL.md) |

## Reglas de copyright

- No copiar letras, melodías ni estructuras demasiado reconocibles de canciones existentes
- No imitar de forma directa artistas, canciones o canales específicos
- Usar referencias de competencia únicamente para extraer patrones generales (timing, energía, estructura)
- Generar siempre material 100% original para la marca Talo
- Si una referencia es muy famosa, aumentar deliberadamente la distancia creativa

## Reglas de idioma

- Las **letras** deben estar en español latino neutro (sin modismos regionales marcados)
- Los **prompts musicales para Mureka** deben estar en inglés
- Las **explicaciones y análisis** para el usuario deben estar en español
- Evitar mezcla de idiomas dentro de la letra de la canción

## Reglas para Episodios Emocionales

### Validación Emocional (CRÍTICO)

- **NUNCA minimizar** — No decir "no te enojes". Decir "está bien estar enojado"
- **NUNCA invalidar** — No dar soluciones rápidas. Permitir que la emoción sea REAL
- **Validar primero** — Antes de cualquier estrategia, validar el sentimiento
- **Honestidad > Perfección** — La resolución puede ser parcial o incompleta, pero debe ser honesta

### Arco Narrativo

- **Pausa emocional clara** — Silencio incómodo de 2 seg donde la emoción alcanza su pico (NO música sobre esto)
- **Crescendo gradual** — Tempo/intensidad sube progresivamente, no jumps abruptos
- **Resolución emocional** — No es "y vivieron felices". Es "Talo aprendió a calmarse"
- **Leitmotif transformador** — Motivo musical que cambia (frustración → calma) en el mismo episodio

### Musicalidad

- **Dinámicas claras** — Soft (setup), louder (crisis), quiet again (pausa), warm (resolución)
- **Tempo variado** — Inicio: 85-90 BPM. Crisis: 110-120 BPM. Resolución: 75-85 BPM
- **Refrán pegajoso** — Una frase simple que se canta involuntariamente ("Respira con Talo")
- **Coro memorable** — Melody que refleja la solución (ej: descendente para calma)

### Interactividad Emocional

- **Respiración guiada** — Momento donde el niño respira CON Talo (1-2-3), no solo canta
- **Pausa para sentir** — Espacio donde el niño PROCESA la emoción, no se le pide actuar
- **Validación física** — Acciones que reflejan la transformación (colores cambian, cola se desenreda)

### Complejidad Lingüística

- **Frases cortas en crisis** — 3-5 palabras cuando la emoción es alta
- **Frases largas en resolución** — 6-8 palabras cuando está calmado (contraste)
- **Palabras emocionales claras** — "enojado", "asustado", "triste" (no evasivas)
- **Evitar jerga adulta** — No "regular emociones", sí "calmarse cuando estás enojado"

## Aprendizaje continuo

Esta skill mejora a lo largo del tiempo mediante un **sistema de auto-logging y retroalimentación**:

### Auto-logging automático (Opción 1: Pre-flight Check + Iteración interna)

Después de generar cada canción:

1. **Claude evalúa automáticamente** contra los 9 Must-Have sin mostrar al usuario versiones fallidas
2. **Si hay fallos**, Claude **itera internamente** ajustando letra y/o Style Prompt hasta pasar MH
3. **Solo muestra la versión aprobada** (9/9 Must-Have)
4. **Automáticamente registra** en `feedback-learning-loop.md > Histórico de Generaciones`:
   - Tema + edad
   - Estructura utilizada
   - BPM elegido
   - Problemas detectados (si los hubiera)
   - Ajustes aplicados (si los hubiera)
   - Número de iteraciones internas (invisible para usuario)
   - Resultado final (✅ Aprobado)

### Aprendizaje por patrón (Opción 2: Histórico por Tema+Edad)

- **Cada generación se registra** en la tabla correspondiente de `feedback-learning-loop.md`
- **Al acumular 2–3 generaciones del mismo tema+edad**, Claude detecta patrones automáticamente
- **Ejemplo:** Si 3 canciones de "Números 3–4 años" fallan por "coro tardío", Claude:
  1. Extrae el patrón: "Para Números 3–4, el coro tardío es un problema recurrente"
  2. Actualiza "Reglas activas aprendidas": "Para Números 3–4, mover coro a segundo 10 máximo"
  3. En futuras canciones de Números 3–4, aplica esta regla automáticamente

### Integración en el flujo

1. **Claude consulta automáticamente** en Paso 4 el histórico tema+edad
2. **Aplica proactivamente** ajustes basados en generaciones previas
3. **Genera la canción** con esos ajustes pre-aplicados
4. **Evalúa internamente** contra MH
5. **Si pasa:** Entrega + registra automáticamente en histórico
6. **Si falla:** Itera internamente hasta pasar, luego entrega + registra

### Resultado

- **Sin esfuerzo del usuario** — No hay que decir "registra esto" o "esto falló"
- **Mejoría automática** — Cada tema/edad/estructura se optimiza con el uso
- **Memoria acumulativa** — La skill nunca comete dos veces el mismo error en un contexto dado
- **Transparencia** — Al final de cada sesión, Claude resume patrones detectados y mejoras aplicadas

---

## Archivos de esta skill

```
talo-music-producer-skill/
├── SKILL.md                          ← ESTE ARCHIVO (empezar aquí)
│
├── workflow/                         ← Flujos de trabajo
│   ├── INTEGRATED-SKILL-CANCION-VISUAL.md
│   ├── ESTRUCTURA-CANCION-INFANTIL-GUIA.md
│   └── EPISODIO-EMOCIONAL-TEMPLATE.md
│
├── produccion/                       ← Guías de producción
│   ├── PRODUCTION-MANUAL-REELS-KLING.md
│   ├── LULI-PAMPIN-REFERENCIAS.md
│   ├── mureka-format.md
│   ├── rhythm-and-arrangement.md
│   └── talo-brand.md
│
├── visual/                           ← Storyboard + TaloInsta
│   ├── TALOINSTA-SONG-STORYBOARD-REFERENCE.md
│   └── TALOINSTA-LEARNINGS.md
│
├── analytics/                        ← Métricas y aprendizaje
│   ├── ANALISIS-ESTADISTICAS-VIDEOS.md
│   └── feedback-learning-loop.md
│
├── canciones/                        ← Canciones producidas
│   ├── talo-enojo/     (lyrics.md, analytics.md)
│   ├── talo-oscuridad/ (lyrics.md, analytics.md)
│   └── talo-tormenta/  (lyrics.md, storyboard.md, analytics.md)
│
├── characters/
│   └── personajes.md
│
└── heredados/                        ← Archivos legacy (solo referencia)
```

### 🎯 MAESTRO — EMPEZAR AQUÍ
| Archivo | Rol |
|---|---|
| `workflow/INTEGRATED-SKILL-CANCION-VISUAL.md` | **Flujo completo integrado:** Canción emocional + Storyboard visual |
| `workflow/ESTRUCTURA-CANCION-INFANTIL-GUIA.md` | **Guía integral:** Estructura clásica + Luli Pampín + episodios emocionales |

### 🎵 Canción Emocional (Música)
| Archivo | Rol |
|---|---|
| `workflow/EPISODIO-EMOCIONAL-TEMPLATE.md` | Template reusable con estructura optimizada + Luli Pampín patterns |
| `canciones/talo-enojo/lyrics.md` | Ejemplo producción-ready: "Talo y el Color del Enojo" |
| `canciones/talo-oscuridad/lyrics.md` | Ejemplo producción-ready: "Talo y la Oscuridad" |
| `canciones/talo-tormenta/lyrics.md` | Ejemplo producción-ready: "Talo y la Tormenta" |
| `produccion/LULI-PAMPIN-REFERENCIAS.md` | 10 patrones pegajosos probados + aplicaciones a Talo |

### 🎨 Storyboard Visual (TaloInsta Integrado)
| Archivo | Rol |
|---|---|
| `visual/TALOINSTA-SONG-STORYBOARD-REFERENCE.md` | Guía completa TaloInsta: 56 frames, prompts Magnific + Seedance |
| `characters/personajes.md` | Descriptores visuales exactos: Talo, Rubí, Tuco, Nuti (NUNCA improvisar) |
| `visual/TALOINSTA-LEARNINGS.md` | Errores comunes, reglas globales de TaloInsta |
| `canciones/` (directorio) | Carpeta con todas las canciones: `lyrics.md`, `storyboard.md`, `analytics.md` |

### 📊 Analytics & Optimización
| Archivo | Rol |
|---|---|
| `analytics/ANALISIS-ESTADISTICAS-VIDEOS.md` | Matriz de diagnóstico: métrica → problema → ajuste (letra + visual) |
| `analytics/feedback-learning-loop.md` | Registro de patrones por emoción/edad, iteraciones internas |

### 🎬 Producción Reels & Música
| Archivo | Rol |
|---|---|
| `produccion/PRODUCTION-MANUAL-REELS-KLING.md` | Manual 30-day content: 6 reels + YouTube Short + captions |
| `produccion/mureka-format.md` | Cómo formatear instrucciones para Mureka |
| `produccion/rhythm-and-arrangement.md` | Dinámicas, tempos, leitmotifs para emociones |
| `produccion/talo-brand.md` | Voz, valores y restricciones de la marca |

### 📦 ARCHIVOS HEREDADOS (en `heredados/`)
| Archivo | Rol |
|---|---|
| `heredados/children-song-rules.md` | Reglas de canciones educativas (REFERENCIA) |
| `heredados/competitor-analysis.md` | Análisis de competencia (REFERENCIA) |
| `heredados/song-structures.md` | Estructuras de canciones (REFERENCIA) |
| `heredados/shorts-reels-format.md` | Formato Shorts (REFERENCIA) |
| `heredados/evaluation-checklist.md` | Checklist antiguo (REFERENCIA) |
| `heredados/production-templates.md` | Templates de canciones (REFERENCIA) |
| `heredados/auto-learning-process.md` | Auto-learning para canciones (ADAPTADO) |
| `heredados/emotional-episodes-structure.md` | Estructura 7-fases (supersedida por `workflow/ESTRUCTURA-CANCION-INFANTIL-GUIA.md`) |
| `heredados/emotional-episodes-examples.md` | Ejemplos de episodios (supersedidos por `canciones/`) |
| `heredados/examples.md` | Ejemplos generales (REFERENCIA) |
| `heredados/quick-prompts.md` | Prompts rápidos (REFERENCIA) |
| `heredados/quick-reference.md` | Referencia rápida (REFERENCIA) |
