 const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para enviar el correo
app.post('/send', async (req, res) => {
    const { nombre, email, mensaje } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'oficina20sanjuan@gmail.com',
            pass: 'TU-NUEVA-CONTRASEÑA-DE-APLICACION'
        }
    });

    try {
        await transporter.sendMail({
            from: 'oficina20sanjuan@gmail.com',
            replyTo: email,
            to: 'oficina20sanjuan@gmail.com',
            subject: 'Nuevo mensaje desde la web',
            text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
        });

        res.status(200).json({ success: true, message: 'Correo enviado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error al enviar el correo' });
    }
});

// Ruta de fallback para servir index.html si el usuario accede directamente a "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
