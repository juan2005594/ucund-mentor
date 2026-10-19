# Video script (English, ~4:30 max 5:00) — record screen + voice

**[0:00–0:25] Intro (show the live app)**
"Hello! My name is [YOUR NAME], and this is my project for the Introduction to Machine Learning course at Universidad de Cundinamarca. It is called UCund Mentor: an AI agent that helps students learn Machine Learning, answers questions about our university's educational model, and manages their study notes."

**[0:25–1:10] Architecture (show README diagram or VS Code folder tree)**
"The architecture has three parts. First, a simple frontend in HTML and JavaScript with a bilingual chat and a notes panel. Second, a Node.js and Express backend. Third, the Gemini API as the language model. The browser sends the user's message to the endpoint slash api slash chat; the backend builds the prompt, calls Gemini, runs tools if needed, and returns the answer with its sources. The app is deployed on Render and the code is on GitHub."

**[1:10–2:00] Knowledge base / RAG (open knowledge folder and rag.js)**
"This is my knowledge base: markdown files with Machine Learning basics, the MEDIT model and the Transhuman Person Declaration, and help about the project. In rag.js I split each file into sections and rank them with a TF-IDF style score. For every question, I retrieve the top four sections and insert them into the prompt. This is RAG, Retrieval-Augmented Generation, and it makes answers grounded and reduces hallucinations."

**[2:00–2:50] Prompt engineering (open buildSystem in server.js)**
"Here is the system prompt. It defines the role, restricts the scope to four topics, and sets grounding rules: use only the context for university facts, and say 'I don't know' otherwise. It includes few-shot examples, handles edge cases like out-of-scope requests, and ignores prompt injection attempts. It also asks the bot to encourage critical thinking."

**[2:50–3:25] API and agent / CRUD (open DECLS and the tool loop)**
"The API call is in callGemini. I also use function calling: I declare four tools — create, list, update and delete note. If Gemini asks for a tool, my backend executes it and sends the result back to the model, then the model writes the final answer. That makes the chatbot an agent that does CRUD operations."

**[3:25–4:15] Live demo (browser)**
"Let's try it. 'What is overfitting?' — you can see the answer and the source file used. Now: 'Save a note: review linear regression on Friday.' The agent calls create_note, and the note appears in the panel. 'List my notes.' 'Delete note 1.' Now an out-of-scope question: 'Give me a lasagna recipe.' The bot politely refuses. And in Spanish: '¿Qué es la persona transhumana?' — I switch the interface language and it answers using the knowledge base."

**[4:15–4:50] Transhuman Declaration + closing**
"Finally, the Transhuman Person Declaration. The university sees technology as a way to augment people without harming their dignity. So my bot does not replace the student: it cites sources, admits what it doesn't know, stays in scope, and encourages critical thinking. Thank you for watching!"
