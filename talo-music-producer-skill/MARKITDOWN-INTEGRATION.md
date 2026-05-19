# Análisis de Documentos y Contenido Visual

> ⚠️ **NOTA DE ENTORNO:** MarkItDown no funciona en este contenedor cloud (conflicto de dependencias del sistema + YouTube bloqueado a nivel de red). La integración abajo documenta lo que **realmente funciona** hoy.

**Propósito:** Analizar PDFs, imágenes, screenshots y transcripts para extraer datos útiles para el skill.

---

## QUÉ ES MarkItDown

MarkItDown es una herramienta de Microsoft que convierte:
- **PDFs** → Markdown (preserva estructura, tablas, headings)
- **Imágenes** → Markdown + OCR + metadatos EXIF
- **Videos/Audio** → Markdown + transcripción
- **PowerPoint/Excel/Word** → Markdown
- **HTML** → Markdown limpio
- **ZIP files** → itera y convierte contenidos

Ventaja principal: Preserva estructura de documento + permite análisis LLM en Markdown limpio.

---

## CÓMO FUNCIONA EL ANÁLISIS HOY (Sin MarkItDown)

### 1. Screenshot de YouTube Analytics
```
Usuario: adjunta imagen PNG de YouTube Studio Analytics al chat

Flujo:
1. Yo veo la imagen directamente (soy multimodal — leo imágenes nativo)
2. Extraigo: % retención por minuto, CTR, vistas, engagement
3. Correlaciono con tabla de frames/timestamps del storyboard
4. Diagnóstico: qué frames tuvieron mejor/peor performance
5. Ajustes para próxima canción

✅ Funciona hoy — solo adjunta la imagen al chat
```

### 2. PDF de Referencia
```
Usuario: sube el PDF al repositorio y da la ruta

Flujo:
1. Yo lo leo con la herramienta Read directamente
2. Extraigo estructura, tablas, listas clave
3. Integro insights al framework

✅ Funciona hoy — sube el PDF al repo y dime la ruta
```

### 3. Transcript de Video YouTube
```
Usuario: copia y pega el transcript desde YouTube Studio

Cómo obtenerlo:
YouTube Studio → tu video → Subtítulos → ⋮ → Descargar → .txt

Flujo:
1. Usuario pega el texto en el chat
2. Yo analizo letra, estructura, timing de cada sección
3. Identifico patrones de pegajosidad
4. Comparo con framework Luli Pampín

✅ Funciona hoy — copia el texto del transcript
```

### 4. Imágenes de Personajes
```
Usuario: adjunta imagen de referencia de Talo/Rubí/etc al chat

Flujo:
1. Yo veo la imagen directamente
2. Extraigo descriptores visuales exactos (colores, proporciones, rasgos)
3. Actualizo characters/personajes.md

✅ Funciona hoy — adjunta la imagen al chat
```

---

## SOBRE MarkItDown (Referencia Futura)

Si en algún momento se usa en un entorno local o con acceso correcto:

```bash
pip install markitdown
python3 -c "
from markitdown import MarkItDown
md = MarkItDown()
result = md.convert('archivo.pdf')   # o URL de YouTube
print(result.text_content)
"
```

Soporta: PDF, PNG/JPG, MP4, MP3, PPTX, XLSX, DOCX, HTML, ZIP, YouTube URLs, ePub

---

## INSTALACIÓN Y USO

### Instalación (local, si es necesario)
```bash
pip install markitdown
```

### Uso en Código Python
```python
import markitdown

# Convertir PDF
with open("documento.pdf", "rb") as f:
    result = markitdown.markitdown.convert_stream(f)
    print(result.text_content)  # Markdown limpio

# Convertir Imagen (con OCR)
result = markitdown.markitdown.convert_local("screenshot.png")
print(result.text_content)

# Convertir desde YouTube
result = markitdown.markitdown.convert("https://www.youtube.com/watch?v=...")
print(result.text_content)
```

### Uso en Bash (CLI)
```bash
markitdown document.pdf > document.md
markitdown image.png > image.md
markitdown video.mp4 > video.md
```

---

## INTEGRACIÓN CON TALO SKILL

### Paso 1: Cuando usuario pase contenido visual/documento

**Usuario dice:**
> "Analiza este screenshot de YouTube de la retención de 'Talo y el Color del Enojo'"
> [Sube imagen PNG]

**Yo hago:**
```
1. Reconozco que es contenido visual/documento
2. Paso archivo a MarkItDown:
   → Extrae texto, métricas, tablas
   → Convierte a Markdown estructurado
3. Analizo Markdown usando ANALISIS-ESTADISTICAS-VIDEOS.md
4. Correlaciono con storyboard analytics tracking
5. Genero recomendaciones específicas
```

### Paso 2: Integración en flujo de análisis

**ACTUALIZACIÓN DE FASE 1 (ANÁLISIS DE IDEA)**

```
FASE 1: ANÁLISIS DE IDEA (mejorado con MarkItDown)

Input: Descripción + posibles documentos/imágenes

1. SI usuario pasó archivo (screenshot, PDF, imagen):
   a. Ejecutar MarkItDown en archivo
   b. Extraer contenido a Markdown
   c. Analizar contenido estructurado

2. SI es screenshot de YouTube:
   a. OCR extrae % retención, métricas
   b. Mapeo a tabla de frames del storyboard anterior
   c. Diagnóstico: ¿dónde caen usuarios?
   d. Correlaciono con ANALISIS-ESTADISTICAS-VIDEOS.md

3. SI es documento PDF de referencia:
   a. Extrae estructura completa
   b. Identifica patrones, tablas, listas clave
   c. Integra a nuestro framework

4. SI es imagen de personaje:
   a. OCR + análisis visual
   b. Extrae descriptores visuales exactos
   c. Actualiza characters/personajes.md

Output: Contenido procesado + análisis estructurado
```

### Paso 3: Workflow de análisis de retención

```
USUARIO PASA: Screenshot YouTube Studio (retención)
                ↓
         MarkItDown OCR
                ↓
    Extrae: % por minuto, CTR, engagement
                ↓
    Correlaciono con frames del storyboard:
    Frame 1-8 (0:00-0:08) ← % retención 0-15seg
    Frame 9-16 (0:08-0:22) ← % retención seg 15-30
    ... etc
                ↓
    Diagnóstico:
    "¿Caída en 0-15seg? → Frame 1-8 no fue visual explosivo"
    "¿Caída en 30-60seg? → Frame 17-24 necesita más energía"
                ↓
    RECOMENDACIONES:
    - Para próxima canción: Hook 3x más explosivo
    - Verse 2 con más movimiento visual
    - Aumentar onomatopeyas en Frame 1-3
```

---

## CHECKLIST: MarkItDown Integration

- [ ] Cuando usuario pase contenido visual, reconozco automáticamente
- [ ] Ejecuto MarkItDown para extraer contenido a Markdown
- [ ] Analizo contenido estructurado (no imagen cruda)
- [ ] Para screenshots YouTube: correlaciono con tabla de analytics tracking
- [ ] Para PDFs: extraigo estructura y patrones
- [ ] Para imágenes: OCR extrae descriptores visuales
- [ ] Para videos: descargo transcripción y analizo
- [ ] Documento insights en TALOINSTA-LEARNINGS.md si es nuevo patrón

---

## EJEMPLOS DE ANÁLISIS CON MarkItDown

### Ejemplo 1: Screenshot de YouTube

**Usuario pasa:** imagen PNG de YouTube Studio mostrando retención

**MarkItDown OCR extrae:**
```markdown
# Talo y el Color del Enojo — YouTube Analytics

## Retención
- 0-15 seg: 78%
- 30 seg: 65%
- 1:00: 42%
- 1:30: 38%
- 2:00: 35%
- Final: 28%

## Engagement
- Likes: 340
- Comments: 47
- Suscriptores nuevos: 120
- CTR: 2.1%
```

**Yo analizo:**
```
Mapeo a Frames:
- Frames 1-8 (0:00-0:08): 78% ✅ Hook excelente
- Frames 9-24 (0:08-0:38): 65% ✅ Verso 1 + Coro funciona
- Frames 25-40 (0:38-1:08): 42% ⚠️ CAÍDA en Verso 2
  → Verso 2 era muy largo (4 líneas)
  → Siguiente: reducir a 3, más energía

- Frames 41-56 (1:08-1:35): 38% ⚠️ Pico emocional drop
  → Silencio tal vez necesita más apoyo visual
  → Frame 28 (congelada) podría tener más expresión
```

### Ejemplo 2: PDF de referencia

**Usuario pasa:** PDF de estructura de canciones infantiles

**MarkItDown extrae:**
```markdown
# Estructura de Canciones Infantiles

## Partes Clave
1. Introducción (8-16 seg)
   - Prepara entorno
   - Permite anticipación
   
2. Verso (máx 3 líneas)
   - Acción clara
   - Ritmo constante
   
3. Coro (3-4 líneas)
   - Pegajoso
   - Mensaje central repetido 3+ veces
```

**Yo integro:**
```
✓ Coincide con nuestro ESTRUCTURA-CANCION-INFANTIL-GUIA.md
✓ Valida: 3 líneas verso, 3-4 líneas coro
✓ Nuevo insight: "Permite anticipación" → agregar a Intro rules
```

---

## CÓMO ACTIVAR ESTO

### Opción 1: Bash wrapper (local)
```bash
#!/bin/bash
# convert-to-md.sh
markitdown "$1" > "${1%.*}.md"
```

### Opción 2: Python wrapper (para integración futura)
```python
import markitdown

def analyze_user_file(file_path):
    result = markitdown.markitdown.convert_local(file_path)
    return result.text_content
```

---

## REFERENCIAS

- **Repo:** https://github.com/microsoft/markitdown
- **Docs:** https://github.com/microsoft/markitdown/blob/main/README.md
- **Soporta:** PDF, PNG, JPG, MP4, MP3, PPTX, XLSX, DOCX, HTML, ZIP, YouTube, ePub

---

**ESTADO:** Integración manual lista. Cuando usuario pase documentos/imágenes, yo puedo:
1. Pedir MarkItDown (si es ambiente con Python instalado)
2. O usar el Read tool + Read tool para imágenes
3. Correlacionar datos automáticamente con analytics tracking del storyboard
