  function enviar() {
  const entrada = document.getElementById('mensaje').value.toLowerCase().trim();
  const respuestaDiv = document.getElementById('respuesta');

  const respuestas = {
    "hola": "¡Hola! ¿En qué puedo ayudarte?",
    "tramites": "Podés hacer consultas sobre transferencia, informe de dominio, licencia de conducir y más",
    "¿cuáles son los requisitos para hacer un trámite?": "Los requisitos varían según el trámite. Generalmente se requiere DNI, comprobante de domicilio y formulario completo.",
    "¿cuánto tarda un trámite?": "El tiempo promedio es de 5 a 10 días hábiles.",
    "¿cuánto cuesta un trámite?": "El costo depende del tipo de trámite. Podés consultarlo en nuestra oficina o por WhatsApp.",
    "¿dónde están ubicados?": "Estamos en Calle Falsa 123, Ciudad, Provincia.",
    "¿cuál es el horario de atención?": "Atendemos de lunes a viernes de 9:00 a 17:00 hs.",
    "hola": "¡Hola! ¿En qué puedo ayudarte?",
    "gracias": "¡De nada! 😊"
  };

  const respuesta = respuestas[entrada] || "Lo siento, no tengo una respuesta para esa pregunta. Por favor, consultá con un asesor.";

  respuestaDiv.innerText = respuesta;
}
