> Actualización del 7 de octubre de 2026: los 17 audios ya fueron recibidos e integrados en la versión 1.1. Las instrucciones siguientes se conservan para futuras grabaciones.

# Narraciones para ElevenLabs — Museo de Proteínas

## Lo único que tienes que hacer

1. Abre Text to Speech en ElevenLabs y elige una voz que te guste en español, preferentemente con acento mexicano o latinoamericano.
2. Genera primero el texto de **intro.txt**. Copia solo el texto, sin título ni instrucciones, y descarga el resultado como **intro.mp3** o **intro.wav**.
3. Envíame ese audio para revisar pronunciación, claridad y duración antes de generar los demás. No hace falta que sepas programación ni que edites archivos del museo.
4. Después genera un archivo por cada texto con la misma voz y ajustes. Conserva el nombre del texto: `chains.txt` → `chains.mp3`, por ejemplo.
5. Puedes enviarme los audios juntos en un ZIP o en varias tandas. Yo haré la sustitución, los subtítulos, los tiempos del recorrido, la compilación y las pruebas offline.

## Voz y estilo

Busca una narración natural, clara y cercana, como una persona que explica una exhibición científica. Ritmo tranquilo pero ágil, con pequeñas pausas entre ideas. Sin música, efectos, eco ni dramatización. Usa una sola voz para los 17 archivos.

Eleven Multilingual v2 es una opción inicial para mantener una narración consistente. Si ya tienes otra combinación de voz y modelo que te gusta, puedes usarla. Empieza con velocidad normal; escucha primero la muestra antes de cambiar controles. No pegues estas instrucciones en el campo que se convierte en voz.

La letra B se pronuncia «be» en español. Conserva los números, nombres y parejas de cisteínas tal como están escritos. En los guiones, los números ya están expresados con palabras para facilitar la lectura.

## Archivos y duración

Los primeros seis audios corresponden a las estaciones y al mensaje de logro. Los otros once son frases distintas y más breves para el recorrido automático; también deben reemplazarse para que no reaparezca la voz anterior.

Las duraciones son orientativas: no recortes palabras ni aceleres artificialmente la voz. Las frases `tour-0` a `tour-10` deberían rondar 4–7 segundos. Si alguna tarda más, envíala así: ajustaré el recorrido a sus duraciones reales. El recorrido actual dura 77 segundos; el objetivo de presentación permite entre 60 y 90 segundos.

MP3 es suficiente para integrarlo; WAV también sirve. No conviertas a WAV un MP3 solo cambiando su extensión. Se descarga el formato elegido desde ElevenLabs. No mandes grabaciones hechas con el micrófono ni audios reenviados como notas de voz: conserva los archivos descargados.

**Estado:** este paquete contiene guiones, no voces generadas. Los audios fueron sustituidos en la versión 1.1.

## Referencias de la herramienta

- [Guía oficial de Text to Speech y modelos](https://elevenlabs.io/docs/eleven-creative/playground/text-to-speech).
- [Cómo descargar en MP3 o WAV](https://help.elevenlabs.io/hc/en-us/articles/14129286847505-How-to-download-the-generated-files).

## Guiones listos para copiar


### 01. Bienvenida e identidad

Archivo de audio: **intro.mp3** (o `.wav`). 15–30 segundos orientativos.

```text
Bienvenido al Museo Interactivo de Proteínas. La insulina humana es una hormona de cincuenta y un aminoácidos. Su estructura permite reconocer un receptor y regular el metabolismo de la glucosa. Toma el control y explora.
```


### 02. Las cadenas A y B

Archivo de audio: **chains.mp3** (o `.wav`). 15–30 segundos orientativos.

```text
Dos cadenas forman una unidad de insulina madura. La cadena A contiene veintiún aminoácidos. La cadena B contiene treinta. Selecciona un aminoácido para encontrar su posición en el modelo tridimensional.
```


### 03. Los tres puentes disulfuro

Archivo de audio: **bridges.mp3** (o `.wav`). 15–30 segundos orientativos.

```text
Seis cisteínas participan en tres puentes disulfuro. A seis con A once. A siete con B siete. Y A veinte con B diecinueve. Estos enlaces estabilizan la forma. Nuestro reto es de identificación estructural; no simula la biosíntesis.
```


### 04. Monómero y hexámero

Archivo de audio: **organization.mp3** (o `.wav`). 15–30 segundos orientativos.

```text
Un monómero es una unidad de insulina formada por A más B. Seis unidades pueden asociarse en un hexámero con zinc. El hexámero favorece el almacenamiento. El monómero es la forma que reconoce al receptor.
```


### 05. De la molécula al tratamiento

Archivo de audio: **application.mp3** (o `.wav`). 15–30 segundos orientativos.

```text
La pluma de insulina humana regular administra una formulación al tejido subcutáneo. Después, la dilución favorece la disociación de estructuras asociadas. La insulina disponible alcanza tejidos, reconoce su receptor e inicia señales celulares. La ingeniería conecta estabilidad molecular y precisión del dispositivo.
```


### 06. Reto completado

Archivo de audio: **complete.mp3** (o `.wav`). 5–8 segundos orientativos.

```text
¡Insulina ensamblada! Los tres puentes disulfuro estabilizan su estructura madura.
```


### 07. Recorrido: título

Archivo de audio: **tour-0.mp3** (o `.wav`). 4–7 segundos orientativos.

```text
Explora la insulina humana: una señal pequeña con un gran efecto.
```


### 08. Recorrido: modelo experimental

Archivo de audio: **tour-1.mp3** (o `.wav`). 4–7 segundos orientativos.

```text
Este modelo procede de coordenadas experimentales de Protein Data Bank.
```


### 09. Recorrido: cadenas

Archivo de audio: **tour-2.mp3** (o `.wav`). 4–7 segundos orientativos.

```text
Veintiún aminoácidos en A y treinta en B forman la insulina madura.
```


### 10. Recorrido: secuencia

Archivo de audio: **tour-3.mp3** (o `.wav`). 4–7 segundos orientativos.

```text
Selecciona una posición: el mismo residuo aparece en el modelo tridimensional.
```


### 11. Recorrido: disulfuros

Archivo de audio: **tour-4.mp3** (o `.wav`). 4–7 segundos orientativos.

```text
Tres puentes disulfuro estabilizan la estructura. Dos unen A con B.
```


### 12. Recorrido: monómero

Archivo de audio: **tour-5.mp3** (o `.wav`). 4–7 segundos orientativos.

```text
Un monómero es una unidad A más B. Reconoce al receptor.
```


### 13. Recorrido: hexámero

Archivo de audio: **tour-6.mp3** (o `.wav`). 4–7 segundos orientativos.

```text
Seis unidades se asocian en un hexámero que favorece el almacenamiento.
```


### 14. Recorrido: zinc

Archivo de audio: **tour-7.mp3** (o `.wav`). 4–7 segundos orientativos.

```text
Dos iones de zinc coordinan histidinas de moléculas vecinas.
```


### 15. Recorrido: receptor

Archivo de audio: **tour-8.mp3** (o `.wav`). 4–7 segundos orientativos.

```text
La insulina reconoce al receptor. No tiene un sitio activo catalítico.
```


### 16. Recorrido: aplicación biomédica

Archivo de audio: **tour-9.mp3** (o `.wav`). 4–7 segundos orientativos.

```text
Una pluma administra insulina. Su asociación influye en la disponibilidad posterior.
```


### 17. Recorrido: invitación a explorar

Archivo de audio: **tour-10.mp3** (o `.wav`). 4–7 segundos orientativos.

```text
Toma el control y explora. Encuentra residuos y completa los retos.
```
