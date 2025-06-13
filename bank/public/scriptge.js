 document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        mensaje: document.getElementById("mensaje").value
    };

    try {
        const res = await fetch("http://localhost:3000/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        // Después de las rutas existentes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

        const result = await res.json();
        alert(result.message);
    } catch (error) {

        alert("Error al enviar el mensaje.");
        console.error(error);
    }
    
});


// Base de datos simple de preguntas/respuestas
const respuestasPredefinidas = {
  "hola": "¡Hola! ¿En qué puedo ayudarte?",
  "que tramites hacen": "Realizamos asesoramiento, trámites vehiculares y gestión de documentos.",
  "donde estan": "Estamos en San Juan, Argentina. Te pasamos la dirección completa por WhatsApp si querés.",
  "horario": "Atendemos de lunes a viernes de 9 a 17 hs.",
  "tramite vehicular": "Necesitás DNI, título del vehículo y cédula verde. Consultá si tenés dudas con los papeles.",
  "gracias": "¡De nada! Si necesitás algo más, estoy acá 😊"
};

function enviar() {
  const input = document.querySelector('#chatbot input[type="text"]');
  const mensaje = input.value.trim().toLowerCase();
  const contenedorRespuesta = document.getElementById('respuesta');

  if (!mensaje) return;

  // Buscar respuesta
  let respuesta = "Lo siento, no entiendo tu pregunta. Podés consultarnos directamente por WhatsApp.";

  for (let clave in respuestasPredefinidas) {
    if (mensaje.includes(clave)) {
      respuesta = respuestasPredefinidas[clave];
      break;
    }
  }

  contenedorRespuesta.innerHTML = `<strong>Vos:</strong> ${mensaje}<br><strong>Bot:</strong> ${respuesta}`;
  input.value = "";
}

