# Machine Learning basics / Fundamentos de Machine Learning

## Qué es Machine Learning
Machine Learning (aprendizaje automático) es un campo de la inteligencia artificial en el que los algoritmos aprenden patrones a partir de datos para hacer predicciones o decisiones sin ser programados con reglas explícitas. Machine Learning is a field of AI where algorithms learn patterns from data to make predictions or decisions without explicit rules.

## Tipos de aprendizaje
Aprendizaje supervisado: se entrena con datos etiquetados (clasificación y regresión). Aprendizaje no supervisado: se buscan estructuras en datos sin etiquetas (clustering, reducción de dimensionalidad). Aprendizaje por refuerzo: un agente aprende por prueba y error con recompensas. Supervised, unsupervised and reinforcement learning.

## Flujo de trabajo de un proyecto de ML
1) Definir el problema. 2) Recolectar y limpiar datos. 3) Dividir en entrenamiento, validación y prueba. 4) Entrenar el modelo. 5) Evaluar con métricas (exactitud, precisión, recall, F1, RMSE). 6) Ajustar hiperparámetros. 7) Desplegar y monitorear.

## Overfitting y underfitting
Overfitting (sobreajuste): el modelo memoriza el entrenamiento y generaliza mal. Underfitting (subajuste): el modelo es demasiado simple y no captura el patrón. Se mitiga con más datos, regularización, validación cruzada y modelos más simples o más complejos según el caso.

## Algoritmos comunes
Regresión lineal y logística, árboles de decisión, random forest, k-vecinos más cercanos (KNN), k-means, SVM y redes neuronales. Linear/logistic regression, decision trees, random forest, KNN, k-means, SVM, neural networks.

## LLM, prompting y RAG
Un LLM (Large Language Model) es una red neuronal tipo transformer entrenada con grandes cantidades de texto para predecir el siguiente token. El prompt engineering usa instrucciones de sistema, ejemplos (few-shot) y restricciones de dominio. RAG (Retrieval-Augmented Generation) recupera fragmentos de una base de conocimiento y los agrega al prompt para que el modelo responda con información verificable y reduzca las alucinaciones.
