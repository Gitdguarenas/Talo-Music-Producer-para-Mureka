# Editor Pro Max Setup — Talo y el Color del Enojo

Esta carpeta contiene todo lo necesario para compilar los 6 reels de Instagram usando Editor Pro Max (Remotion).

## 📁 Estructura

```
talo-enojo/
├── clips/              ← Coloca aquí los videos de Kling 2.5
├── audio/              ← Coloca aquí el MP3 de la canción
├── setup-editor.sh     ← Script para copiar archivos
└── EDITOR-SETUP.md     ← Este archivo
```

---

## 🚀 Paso 1: Agrega tus archivos

### A. Videos de Kling 2.5

**Para Reel 1 (que estamos probando):**
```
clips/reel1-frustrated.mp4  (10 segundos)
clips/reel1-breathing.mp4   (8 segundos)
```

**Ubicación:** `talo-music-producer-skill/canciones/talo-enojo/clips/`

**Nota:** Si no tienes los clips aún, ver `clips/README.md` para los nombres exactos de todos los 6 reels.

### B. Audio

**Archivo:** 
```
audio/talo-enojo.mp3
```

**Ubicación:** `talo-music-producer-skill/canciones/talo-enojo/audio/`

**Formato:** MP3 (128+ kbps)

---

## 🔄 Paso 2: Copia los archivos a Editor Pro Max

Desde la raíz del proyecto:

```bash
bash talo-music-producer-skill/canciones/talo-enojo/setup-editor.sh
```

Esto copia automáticamente:
- `clips/reel1-*.mp4` → `editor-remotion/public/assets/reel1/`
- `clips/reel2-*.mp4` → `editor-remotion/public/assets/reel2/`
- etc.
- `audio/talo-enojo.mp3` → `editor-remotion/public/assets/audio/`

**Output esperado:**
```
✅ Reel 1 clips copied
⚠️  No clips found for Reel 2 (waiting for generation)
⚠️  No clips found for Reel 3 (waiting for generation)
...
✅ Audio file copied
✅ Setup complete!
```

---

## 👁️ Paso 3: Previsualiza en Remotion Studio

```bash
cd editor-remotion
npm run dev
```

Abre http://localhost:3000 en tu navegador.

**Busca:**
- Folder "Talo"
- Composition "TaloReel1"

**Controles:**
- Play/pause con botón o spacebar
- Scrub: click en la timeline
- Props panel a la derecha: toggle sections on/off

---

## 🎬 Paso 4: Renderiza a MP4

Una vez satisfecho con la previsualización:

```bash
cd editor-remotion
npx remotion render TaloReel1 out/reel1.mp4
```

**Salida:** `out/reel1.mp4` (30 segundos, 1080x1920, listo para Instagram)

### Otros formatos de render:

```bash
# WebM (más pequeño)
npx remotion render TaloReel1 out/reel1.webm --codec=vp8

# ProRes (alta calidad, más pesado)
npx remotion render TaloReel1 out/reel1.mov --codec=prores --prores-profile=4444

# GIF
npx remotion render TaloReel1 out/reel1.gif --codec=gif

# Imagen fija (frame 45)
npx remotion still TaloReel1 out/thumbnail.png --frame=45
```

---

## 📋 Checklist — Probando Reel 1

- [ ] Kling 2.5 outputs en `clips/`:
  - [ ] `reel1-frustrated.mp4`
  - [ ] `reel1-breathing.mp4`
- [ ] Audio en `audio/`:
  - [ ] `talo-enojo.mp3`
- [ ] Ejecuté `setup-editor.sh` sin errores
- [ ] Abierto `npm run dev` en `editor-remotion`
- [ ] Veo "Talo" folder y "TaloReel1" composition
- [ ] Previsualización se ve correcta:
  - [ ] Texto del gancho aparece (0-3s)
  - [ ] Video de frustración (3-13s)
  - [ ] Video de respiración (13-21s)
  - [ ] CTA final (21-30s)
  - [ ] Audio sincronizado
- [ ] Rendericé exitosamente con `npx remotion render TaloReel1 out/reel1.mp4`
- [ ] MP4 resultado lista para Instagram ✅

---

## 🐛 Troubleshooting

### "No se ven los videos en Studio"
1. ¿Ejecutaste `setup-editor.sh`?
2. ¿Los archivos están en `editor-remotion/public/assets/reel1/`?
3. Recarga el navegador (Ctrl+R en Studio)

### "El audio no se escucha"
1. ¿El archivo `talo-enojo.mp3` está en `audio/`?
2. ¿Ejecutaste `setup-editor.sh`?
3. Verifica que el MP3 no esté corrupto (pruébalo en VLC)

### "Render falla con error de codec"
```bash
# Intenta con codec especificado
npx remotion render TaloReel1 out/reel1.mp4 --codec=h264
```

### "Studio no inicia"
```bash
cd editor-remotion
npm install  # Reinstala dependencias
npm run dev  # Intenta de nuevo
```

---

## ✅ Próximo paso (después de probar Reel 1)

Una vez que Reel 1 funcione perfectamente:

1. Genera clips para Reels 2-6 con Kling 2.5
2. Coloca en `clips/reel2-*.mp4`, `clips/reel3-*.mp4`, etc.
3. Ejecuta `setup-editor.sh` de nuevo
4. Dime y crearé las 5 composiciones restantes

---

**¿Listo?** Agrega tus archivos a las carpetas `clips/` y `audio/` y ejecuta `setup-editor.sh`. ¡Avísame cuando esté todo en su lugar!
