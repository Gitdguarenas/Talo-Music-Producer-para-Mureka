# FLUJO DE PRODUCCIÓN COMPLETO
## "Talo y la Oscuridad" — De Mureka a Video Final

---

## 📋 PASO A PASO

### PASO 1: GENERAR MÚSICA EN MUREKA ✅ READY

**Archivo:** PROMPT-MUREKA-OSCURIDAD.md

**Acciones:**
1. Abre [Mureka.ai](https://mureka.ai) o tu plataforma Mureka
2. Copia el **Style Prompt** completo:
   ```
   Children's discovery song. Talo sees strange things in darkness, Búho reveals 
   the truth. Starting 80 BPM curious/scared, Búho calms with 85 BPM gentle revelation. 
   Soft piano, delicate wind, crickets. Warm child voice (Talo confused→brave) + 
   deep owl voice (Búho protective/teacher). No scary sounds. Mood: mystery→understanding. 
   Hook: "Soy valiente, tengo curiosidad, la oscuridad no da miedo." Bluey-style 
   emotional learning. Brave + curious energy. Clean organic mix, no autotune.
   ```
3. Copia la **Letra** completa de LETRA-OSCURIDAD.md
4. Genera la música
5. Descarga como MP3: `oscuridad.mp3`
6. Guarda en: `talo-oscuridad/audio/oscuridad.mp3`

**Duración esperada:** ~1:45-2:00 minutos  
**Formato esperado:** MP3, 44.1kHz, high quality

---

### PASO 2: CREAR GRIDS CON NANO BANANA 2 (7 GRIDs)

**Archivo:** PROMPTS-NANO-BANANA-SEEDANCE.md (secciones GRID 1-7)

**Acciones para cada GRID:**

1. Abre [Nano Banana 2](https://www.nano-banana.com) o plataforma similar
2. Copia el prompt específico (GRID 1, GRID 2, etc.)
3. Asegúrate que el formato sea **12 frames en grid layout (4x3 o 3x4)**
4. Genera el GRID
5. Descarga como PNG: `grid-01.png`, `grid-02.png`, etc.
6. Guarda en: `talo-oscuridad/frames/grid-XX.png`

**GRIDs a generar:**
- [ ] GRID 1: Intro (Talo despierta)
- [ ] GRID 2: Verso 1-2 (Ve/escucha cosas raras)
- [ ] GRID 3: Verso 3-4 (Búho revela la verdad)
- [ ] GRID 4: Verso 5 (Talo entiende y es valiente)
- [ ] GRID 5: Chorus (Celebración)
- [ ] GRID 6: Outro (Duermen juntos)
- [ ] GRID 7: Final (Cierre/créditos - opcional)

**Tiempo estimado:** 2-5 minutos por GRID  
**Formato esperado:** PNG, alta resolución

---

### PASO 3: ANIMAR GRIDS CON SEEDANCE 2 (6-7 CLIPS)

**Archivo:** PROMPTS-NANO-BANANA-SEEDANCE.md (secciones CLIP 1-6)

**Acciones para cada CLIP:**

1. Abre [Seedance 2](https://seedance.ai) o plataforma de animación
2. Copia el prompt específico (CLIP 1, CLIP 2, etc.)
3. Sube el GRID correspondiente (grid-01.png → clip 1, etc.)
4. Especifica duración:
   - Clip 1 (Intro): 3 segundos
   - Clip 2 (Verso 1-2): 22 segundos
   - Clip 3 (Verso 3-4): 20 segundos
   - Clip 4 (Verso 5): 10 segundos
   - Clip 5 (Chorus): 10 segundos
   - Clip 6 (Outro): 10 segundos
5. Genera el clip animado
6. Descarga como MP4: `clip-01.mp4`, `clip-02.mp4`, etc.
7. Guarda en: `talo-oscuridad/clips/clip-XX.mp4`

**CLIPs a generar:**
- [ ] CLIP 1: Intro (3s) - grid-01.png
- [ ] CLIP 2: Verso 1-2 (22s) - grid-02.png
- [ ] CLIP 3: Verso 3-4 (20s) - grid-03.png
- [ ] CLIP 4: Verso 5 (10s) - grid-04.png
- [ ] CLIP 5: Chorus (10s) - grid-05.png
- [ ] CLIP 6: Outro (10s) - grid-06.png

**Tiempo estimado:** 2-10 minutos por clip (depende de plataforma)  
**Formato esperado:** MP4, HD 1080p o 1920x1080

---

### PASO 4: COMPILAR EN CAPCUT

**Archivo:** Usar todos los clips + oscuridad.mp3

**Acciones:**

1. **Abre CapCut** (web o app)
2. **Crea nuevo proyecto**
3. **Importa todos los clips en orden:**
   - clip-01.mp4
   - clip-02.mp4
   - clip-03.mp4
   - clip-04.mp4
   - clip-05.mp4
   - clip-06.mp4

4. **Organiza en timeline** (arrastrar en orden)

5. **Agrega transiciones** entre clips:
   - Tipo: Crossfade o Fade suave
   - Duración: 0.3-0.5 segundos
   - Evita cortes abruptos

6. **Importa el audio:** `oscuridad.mp3`
   - Arrastra a audio track
   - Sincroniza con video (debe durar ~1:45-2:00)
   - Ajusta volumen a -14 LUFS (YouTube standard)

7. **Revisa sincronización:**
   - ¿El audio coincide con video?
   - ¿Las transiciones son suaves?
   - ¿Los clips están en orden correcto?

8. **Ajusta duración si necesario:**
   - Si audio es más corto: Reduce tiempo de algunos clips
   - Si audio es más largo: Extiende algunos clips

9. **Exporta video:**
   - Formato: MP4
   - Resolución: 1920x1080 (horizontal) o 1080x1920 (vertical)
   - Codec: H.264
   - Bitrate: High quality (YouTube)
   - Nombre: `talo-oscuridad-final.mp4`

10. **Guarda en:** `talo-oscuridad/video/talo-oscuridad-final.mp4`

---

## 📊 TIMELINE ESTIMADO

| Paso | Herramienta | Duración |
|------|-------------|----------|
| 1. Mureka (música) | Mureka | 10-30 min |
| 2. Nano Banana 2 (7 GRIDs) | Nano Banana 2 | 15-35 min |
| 3. Seedance 2 (6 CLIPS) | Seedance 2 | 30-60 min |
| 4. CapCut (compilar) | CapCut | 10-20 min |
| **TOTAL** | | **65-145 min (1-2.5 horas)** |

---

## 📁 ESTRUCTURA DE CARPETAS FINAL

```
talo-oscuridad/
├── audio/
│   └── oscuridad.mp3 ✅
├── frames/ (GRIDs de Nano Banana 2)
│   ├── grid-01.png (Intro)
│   ├── grid-02.png (Verso 1-2)
│   ├── grid-03.png (Verso 3-4)
│   ├── grid-04.png (Verso 5)
│   ├── grid-05.png (Chorus)
│   ├── grid-06.png (Outro)
│   └── grid-07.png (Cierre - opcional)
├── clips/ (Videos de Seedance 2)
│   ├── clip-01.mp4 (Intro, 3s)
│   ├── clip-02.mp4 (Verso 1-2, 22s)
│   ├── clip-03.mp4 (Verso 3-4, 20s)
│   ├── clip-04.mp4 (Verso 5, 10s)
│   ├── clip-05.mp4 (Chorus, 10s)
│   └── clip-06.mp4 (Outro, 10s)
├── video/
│   └── talo-oscuridad-final.mp4 ✅ (VIDEO FINAL)
└── [archivos de documentación]
    ├── LETRA-OSCURIDAD.md
    ├── ANALISIS-CANCION-OSCURIDAD.md
    ├── PROMPTS-NANO-BANANA-SEEDANCE.md
    ├── PRODUCCION-VIDEO-OSCURIDAD.md
    └── FLUJO-PRODUCCION-COMPLETO.md (este archivo)
```

---

## ✅ CHECKLIST FINAL

**Antes de empezar:**
- [ ] Letra aprobada (LETRA-OSCURIDAD.md) ✅
- [ ] Prompts Mureka listos ✅
- [ ] Prompts Nano Banana 2 listos ✅
- [ ] Prompts Seedance 2 listos ✅

**Durante producción:**
- [ ] Música generada en Mureka (oscuridad.mp3)
- [ ] 7 GRIDs generados en Nano Banana 2
- [ ] 6 CLIPs animados en Seedance 2
- [ ] Video compilado en CapCut
- [ ] Audio sincronizado correctamente
- [ ] Transiciones suaves
- [ ] Duración final: 1:45-2:00 minutos

**Antes de publicar:**
- [ ] Video visto de principio a fin
- [ ] Audio y video sincronizados perfectamente
- [ ] No hay saltos o cortes abruptos
- [ ] Colores son visibles (no muy oscuro)
- [ ] Personas y emociones son claras
- [ ] Resolución es HD (1920x1080 o 1080x1920)

**Publicación:**
- [ ] Exportado como MP4
- [ ] Nombrado: `talo-oscuridad-final.mp4`
- [ ] Guardado en carpeta correcta
- [ ] Listo para YouTube/plataforma de distribución

---

## 🎯 ESPECIFICACIONES YOUTUBE

**Si vas a publicar en YouTube:**

- **Título sugerido:** "Talo y la Oscuridad - Canción Infantil Emocional"
- **Descripción sugerida:**
  ```
  Talo descubre que no debe tener miedo de la oscuridad cuando aprende 
  la verdad con su amigo Búho. Una canción sobre valentía y curiosidad 
  para niños de 2-6 años.
  
  🎵 Canción educativa sobre emociones
  🦉 Personajes: Talo y Búho Sabio
  💡 Lección: Soy valiente, tengo curiosidad
  
  #TaloMusicaInfantil #CancionesParaNiños
  ```

- **Duración:** 1:45-2:00 minutos
- **Resolución:** 1920x1080 (16:9) o 1080x1920 (9:16) vertical
- **Thumbnail:** Primera imagen importante (Talo + Búho)
- **Etiquetas:** Talo, oscuridad, miedo, valentía, canción infantil
- **Edad:** Apto para todos los públicos (All Ages)

---

## 📝 NOTAS IMPORTANTES

1. **Sincronización audio-video:** Crítica. Prueba en CapCut antes de exportar.
2. **Clip 2 (Verso 1-2) es el más largo (22s).** Asegúrate que tenga suficiente animación.
3. **Color progression:** Sigue el orden especificado en prompts (oscuro → colorido → oscuro caliente).
4. **Emociones claras:** Los rostros de Talo y Búho deben mostrar cambios emocionales visibles.
5. **No hay diálogos on-screen** (letras visibles). La música canta todo.

---

## 🚀 PRÓXIMOS PASOS

1. **Guardar este documento** en carpeta del proyecto
2. **Ir a Mureka** con PROMPT-MUREKA-OSCURIDAD.md
3. **Generar música** (10-30 min)
4. **Ir a Nano Banana 2** con PROMPTS-NANO-BANANA-SEEDANCE.md (GRIDS)
5. **Generar 7 GRIDs** (15-35 min)
6. **Ir a Seedance 2** con PROMPTS-NANO-BANANA-SEEDANCE.md (CLIPS)
7. **Animar 6 CLIPS** (30-60 min)
8. **Abrir CapCut** y compilar todo (10-20 min)
9. **Exportar video final** ✅
10. **Publicar en YouTube** 🎉

---

**¿Listo para comenzar la producción? 🎬**

*Documento actualizado: 2026-05-30*
*Estado: LISTO PARA EJECUCIÓN*
