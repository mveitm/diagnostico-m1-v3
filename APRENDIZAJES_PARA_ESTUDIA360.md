# Aprendizajes consolidados de la mini tarea PAES M1

## Lo que sí conviene heredar
- Estructura simple de flujo: portada, instrucciones, prueba, cierre
- Registro por fila/pregunta respondida
- Exportación redundante: envío + respaldo local
- Compatibilidad móvil como requisito desde el inicio
- Separación entre contenido del ítem y render visual
- Uso de campos específicos para LaTeX y figura

## Lo que no conviene heredar tal cual
- Formularios monolíticos difíciles de mantener
- Figuras dependientes de rutas frágiles en móvil
- Ítems redactados directo en HTML sin banco maestro
- Mezcla de diagnósticos distintos en una misma hoja operativa

## Principios validados
- Primero validar el cascarón, luego cargar 40 ítems
- Primero diseñar matriz diagnóstica, luego redactar preguntas
- Las figuras matemáticas requieren alto contraste real
- Móvil no es un ajuste final: es condición base
- La redundancia de respaldo evita pérdida de datos

## Implicancia para Estudia360
El sistema futuro debería separar con claridad:
1. Banco de ítems
2. Metadatos diagnósticos
3. Motor de selección
4. Render del ítem
5. Registro de respuestas
6. Analítica por eje, habilidad y dificultad

## Decisión estratégica recomendada
Cuando retomemos Estudia360, este trabajo sugiere construir el sistema sobre:
- un banco estructurado de ítems
- un contrato claro entre contenido y visualización
- una capa de resultados por fila de respuesta
- y una lógica que permita reutilizar ítems en diagnósticos, ensayos y rutas adaptativas
