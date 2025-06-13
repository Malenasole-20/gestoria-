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

// Código para el chatbot
  function toggleChat() {
    const chat = document.getElementById('chatbotContainer');
    chat.style.display = (chat.style.display === 'none' || chat.style.display === '') ? 'flex' : 'none';
  }

  function enviar() {
    const entrada = document.getElementById('mensaje').value.toLowerCase().trim();
    const respuestaDiv = document.getElementById('respuesta');

    const respuestas = {
      "hola": "¡Hola! ¿En qué puedo ayudarte?",
      "tramites": "Podés hacer consultas sobre transferencia, informe de dominio, licencia de conducir y más.",
      "requisitos": "Los requisitos varían según el trámite. Generalmente se requiere DNI, comprobante de domicilio y formulario completo.",
      "tarda": "El tiempo promedio es de 5 a 10 días hábiles.",
      "cuesta": "El costo depende del tipo de trámite. Consultalo en nuestra oficina o por WhatsApp.",
      "ubicados": "Estamos en Calle Falsa 123, Ciudad, Provincia.",
      "horario": "Atendemos de lunes a viernes de 9:00 a 17:00 hs.",
      "gracias": "¡De nada! 😊"
    };

    const respuesta = respuestas[entrada] || "Lo siento, no tengo una respuesta para eso. Por favor, escribinos por WhatsApp o llamanos.";

    respuestaDiv.innerHTML += `<div style="margin-top: 8px;"><strong>👤 Vos:</strong> ${entrada}</div>`;
    respuestaDiv.innerHTML += `<div style="margin-top: 4px;"><strong>🤖 Bot:</strong> ${respuesta}</div>`;
    document.getElementById('mensaje').value = '';
    respuestaDiv.scrollTop = respuestaDiv.scrollHeight;
  }



