# UCund Mentor project help

## Qué es UCund Mentor
UCund Mentor es un asistente conversacional (agente) para estudiantes de Introducción a Machine Learning. Responde preguntas con una base de conocimiento (RAG), tiene un prompt de sistema que limita su dominio y puede crear, listar, editar y eliminar notas de estudio (CRUD) mediante function calling. UCund Mentor is a conversational agent for Intro to ML students.

## Arquitectura
Frontend en HTML/JS (chat bilingüe español/inglés y panel de notas). Backend en Node.js + Express. El backend recupera los fragmentos más relevantes de la carpeta knowledge/ con un ranking tipo TF-IDF, los inserta en el prompt de sistema y llama a la API de Gemini. Si el modelo solicita una herramienta (create_note, list_notes, update_note, delete_note) el backend la ejecuta y devuelve el resultado al modelo antes de la respuesta final.

## Cómo usarlo
Escriba preguntas sobre Machine Learning, MEDIT o la Declaración de la Persona Transhumana. Para notas diga, por ejemplo: "Guarda una nota: repasar regresión lineal", "Lista mis notas", "Edita la nota 1", "Borra la nota 1". Use el botón EN/ES para cambiar el idioma.

## Límites
El bot solo responde dentro de su dominio. Las notas se guardan en memoria del servidor por sesión y pueden perderse al reiniciar el servicio.

## How to use it (English)
Ask questions about Machine Learning, MEDIT or the Transhuman Person Declaration. To manage notes, say for example: "Save a note: review linear regression", "List my notes", "Edit note 1", "Delete note 1". Use the EN/ES button to switch the interface language.
