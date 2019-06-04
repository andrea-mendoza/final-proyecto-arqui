const Empleado = require("../src/LogicaDelNegocio/Entidades/Empleado").Empleado;
import { CalculadoraDeSalarioFijo } from "../src/LogicaDelNegocio/Entidades/CalculadoraDeSalarios";
const Notificaciones = require("../src/LogicaDelNegocio/Entidades/Notificaciones").Notificaciones;
const DecoradorNotificaciones = require("../src/LogicaDelNegocio/Entidades/Notificaciones").DecoradorNotificaciones;
const NotificacionPorEmail = require("../src/LogicaDelNegocio/Entidades/Notificaciones").NotificacionPorEmail;
const NotificacionPorFacebook = require("../src/LogicaDelNegocio/Entidades/Notificaciones").NotificacionPorFacebook;
const NotificacionPorSMS = require("../src/LogicaDelNegocio/Entidades/Notificaciones").NotificacionPorSMS
const NotificacionPorWhatsapp = require("../src/LogicaDelNegocio/Entidades/Notificaciones").NotificacionPorWhatsapp;

describe('Los empleados reciben una notificacion, ya sea por correo, sms, facebook o whatsapp ', function () {
    let creadorDeNotificaicones;
    let calculadoraEmpleadoSalarioFijo;
    let notificacion;
    let empleado;

    beforeAll(function() {
        calculadoraEmpleadoSalarioFijo = new CalculadoraDeSalarioFijo(100,"4 2,2019","05 25,2019");
        empleado = new Empleado("Juan Perez", 1, calculadoraEmpleadoSalarioFijo, undefined, "5 25,2019", "12321");
        notificacion =new Notificaciones();
    });
    test('El empleados recibe una notificion por correo', function() {
        creadorDeNotificaicones = new DecoradorNotificaciones(notificacion);
        let notificacionPorEmail = new NotificacionPorEmail("este es el mensaje","correo@gmail.com");

        creadorDeNotificaicones.agregarNotificacion(notificacionPorEmail);

        expect(notificacion.enviarNotificaciones()).toBe("Mensaje por correo enviado");
    });
    test('El empleados recibe una notificion por facebook', function() {
        creadorDeNotificaicones = new DecoradorNotificaciones(notificacion);
        let notificacionesPorFacebook = new NotificacionPorFacebook("este es el mensaje");

        creadorDeNotificaicones.agregarNotificacion(notificacionesPorFacebook);
        expect(notificacion.enviarNotificaciones("correo@gmail.com",33333333)).toBe("El mensaje por facebook ha sido enviado");
    });
    test('El empleados recibe una notificion por SMS', function() {
        creadorDeNotificaicones = new DecoradorNotificaciones(notificacion);
        let notificacionesPorSMS = new NotificacionPorSMS("este es el mensaje");

        creadorDeNotificaicones.agregarNotificacion(notificacionesPorSMS);
        expect(notificacion.enviarNotificaciones("correo@gmail.com",77777777)).toBe("El mensaje por SMS ha sido enviado");
    });

    test('El empleados recibe una notificion por Whasapp y facebook', function() {
        creadorDeNotificaicones = new DecoradorNotificaciones(notificacion);
        let notificacionesPorSMS = new NotificacionPorSMS("este es el mensaje");
        let notificacionesPorWhats = new NotificacionPorWhatsapp("Mensaje");

        creadorDeNotificaicones.agregarNotificacion(notificacionesPorWhats);
        expect(notificacion.enviarNotificaciones("correo@gmail.com",77777777)).toBe("El mensaje por whatsapp ha sido enviado");

        creadorDeNotificaicones.agregarNotificacion(notificacionesPorSMS);
        expect(notificacion.enviarNotificaciones("correo@gmail.com",77777777)).toBe("El mensaje por SMS ha sido enviado");
    });
});