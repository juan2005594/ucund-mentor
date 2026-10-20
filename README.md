# UCund Mentor 🎓 — AI Agent / Chatbot (Gemini + RAG + CRUD)

**CADI: Introducción a Machine Learning – Universidad de Cundinamarca**
Live demo / Despliegue: (https://ucund-mentor.onrender.com)
Video (EN): `PEGA_AQUI_TU_LINK_DEL_VIDEO`
Author / Autor:Juan Pablo Sanchez Rodriguez

## Qué es / What it is
**ES:** Asistente conversacional para estudiantes de Introducción a Machine Learning. Responde con una base de conocimiento (RAG), tiene un *system prompt* que restringe el dominio y es un **agente** que hace CRUD de notas de estudio mediante *function calling*.
**EN:** Conversational assistant for Intro to Machine Learning students. It answers from a knowledge base (RAG), has a domain-restricting system prompt, and acts as an **agent** that performs CRUD on study notes through function calling.

## Arquitectura / Architecture
```
Browser (public/index.html: bilingual chat + notes panel)
   │  POST /api/chat {message, history, sessionId, lang}
   ▼
Node.js + Express (server.js)
   ├─ rag.js ── ranks chunks from /knowledge/*.md (TF-IDF style) → top 4
   ├─ buildSystem() ── system prompt + rules + few-shot + retrieved CONTEXT
   ├─ Gemini API (generateContent, function calling)
   └─ Tool loop: create_note | list_notes | update_note | delete_note  (CRUD, per session)
```

| Requirement | Where |
|---|---|
| LLM integration | `server.js` → `callGemini()` (Gemini REST API) |
| Knowledge base / RAG | `knowledge/*.md` + `rag.js` |
| Prompt engineering | `buildSystem()`: role, scope, grounding rules, anti-injection, few-shot examples, edge cases |
| CRUD agent | `TOOLS` + `DECLS` in `server.js` |
| Frontend | `public/index.html` |

## Instalación local / Local setup
```bash
git clone <tu-repo>
cd ucund-mentor
npm install
cp .env.example .env      # add your GEMINI_API_KEY (https://aistudio.google.com/apikey)
npm run dev               # http://localhost:3000   (Node 20+)
```

## Despliegue / Deploy (Render)
New → Web Service → connect this repo → Build: `npm install` → Start: `npm start` → add env var `GEMINI_API_KEY` (and optionally `GEMINI_MODEL`).

## Ejemplos / Examples
- "¿Qué es overfitting?" → ML explanation from the knowledge base.
- "¿Qué es la persona transhumana en UCundinamarca?" → grounded answer with cited source file.
- "Guarda una nota: repasar regresión lineal" → calls `create_note`.
- "Give me a lasagna recipe" → polite refusal (domain restriction).

---

## Declaración de la Persona Transhumana (UCundinamarca)

### ES — ¿De qué manera el agente/chatbot respeta y fomenta los principios de la Declaración de la Persona Transhumana en el contexto del aprendizaje y la interacción tecnológica?

La Universidad de Cundinamarca, a través del modelo MEDIT, resignifica el transhumanismo: la persona humana sigue siendo el centro y la tecnología se usa para ampliar sus capacidades sin atentar contra su dignidad ni contra la naturaleza. UCund Mentor se diseñó bajo esa idea:

1. **La persona al centro (autonomía y libertad):** el bot es una herramienta de aumento, no un sustituto. Su prompt le exige promover el pensamiento crítico (cierra con preguntas de reflexión) y dejar la decisión en el estudiante.
2. **Dignidad y responsabilidad:** responde solo con información verificable de su base de conocimiento, cita la fuente, admite cuando no sabe y no inventa. Esto reduce la desinformación. Además, resiste intentos de manipulación del prompt y no almacena datos personales: las notas son por sesión y en memoria.
3. **Aprendizaje para la vida:** explica conceptos de Machine Learning con ejemplos simples, y permite al estudiante organizar su propio estudio (notas), fomentando el aprendizaje autónomo, la creación de valor y el emprendimiento.
4. **Inclusión y territorio:** la interfaz es bilingüe (español/inglés), lo que amplía el acceso al conocimiento global manteniendo el contexto local de la universidad.
5. **Límites éticos:** el dominio restringido evita usos indebidos; el sistema no toma decisiones por el estudiante ni evalúa a las personas.

**Reflexión crítica:** un chatbot puede generar dependencia o respuestas erróneas. Por eso el diseño prioriza la transparencia (fuentes visibles), la verificación contra documentos oficiales y la invitación a pensar por cuenta propia. La IA es un medio; el fin es formar personas libres, responsables y críticas.

### EN — How does the implemented AI agent/chatbot align with and support the Transhuman Person Declaration of Universidad de Cundinamarca regarding ethical AI integration, human augmentation, and educational transformation?

Universidad de Cundinamarca's MEDIT model reframes transhumanism: the human person remains at the center, and science and technology serve to improve people and their environment without harming human dignity or nature. UCund Mentor follows that idea:

1. **Human augmentation, not replacement:** the bot extends the student's abilities (explanations, note management) while the student stays the decision-maker. Its prompt requires fostering critical thinking by ending with reflective questions.
2. **Ethical AI integration:** answers are grounded in a curated knowledge base (RAG), sources are displayed, the bot admits when it lacks information, refuses out-of-scope requests and resists prompt injection. No personal data is stored beyond in-memory session notes.
3. **Educational transformation:** it supports autonomous, lifelong learning, helping students organize their study, understand ML concepts and create value through technology.
4. **Inclusion and local context:** a bilingual interface widens access to global knowledge while keeping the university's local identity and values (life, dignity, solidarity, freedom, responsibility).
5. **Ethical limits:** restricted scope and transparency prevent misuse; the agent never grades or makes decisions about people.

**Critical reflection:** chatbots can create dependence or produce errors. Our design answers this with transparency, verification against official documents, and prompts that push students to think for themselves. AI is a means; the goal is to form free, responsible and critical people.

> Nota: el resumen de la Declaración en `knowledge/transhumana_medit.md` está parafraseado de documentos públicos de UCundinamarca; consulte el texto oficial en ucundinamarca.edu.co.
