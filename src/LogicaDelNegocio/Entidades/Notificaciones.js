const nodemailer = require('nodemailer');

class Notificaciones{
    constructor(){
        this.notificacion;
    }

    enviarNotificaciones(){
        return this.notificacion.enviarNotificacion();
    }

    agregarNotificacion(notificacion){
        this.notificacion = notificacion;
    }
}

class DecoradorNotificaciones{
    constructor(notificacion){
        this.notificacion = notificacion;
    }

    agregarNotificacion(nuevaNotificacion){
        this.notificacion.agregarNotificacion(nuevaNotificacion);
    }
}

class NotificacionPorEmail{
    constructor(mensaje){
        this.mensaje = mensaje;
    }

    enviarNotificacion(email,telefono){
        nodemailer.createTestAccount((err, account) => {
            var transporter = nodemailer.createTransport({
                host: 'smtp.googlemail.com', 
                port: 465, 
                secure: true, 
                auth: {
                    user: 'correoDePrueba@gmail.com', 
                    pass: 'contraseñaPrueba' 
                }
            });

            var mailOptions = {
                from: '"Pedro Martinez" <correoDePrueba@gmail.com>',
                to: this.email, 
                subject: 'Pago reciente',
                text: this.mensaje
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return error;
                }
                return ('Mensaje enviado ' +info.messageId);
            });
        });
        return "Mensaje por correo enviado";
    }
}

class NotificacionPorFacebook{
    constructor(mensaje){
        this.mensaje = mensaje;
    }

    enviarNotificacion(email,telefono){
      return "El mensaje por facebook ha sido enviado";
    }
}

class NotificacionPorWhatsapp{
    constructor(mensaje){
        this.mensaje = mensaje;
    }

    enviarNotificacion(email,telefono){
        return "El mensaje por whatsapp ha sido enviado";
    }
}

class NotificacionPorSMS{
    constructor(mensaje){
        this.mensaje = mensaje;
    }

    enviarNotificacion(email,telefono){
        return "El mensaje por SMS ha sido enviado";
    }
}

module.exports = { Notificaciones,NotificacionPorSMS,NotificacionPorEmail,NotificacionPorFacebook,NotificacionPorWhatsapp,DecoradorNotificaciones };