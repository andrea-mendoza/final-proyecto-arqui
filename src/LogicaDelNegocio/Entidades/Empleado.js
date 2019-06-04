const Notificaciones = require("./Notificaciones").Notificaciones;
const DecoradorNotificaciones = require("./Notificaciones").DecoradorNotificaciones;

class Empleado{
    constructor(nombreCompleto, id, calculadoraDeSalario, calculadoraFechaDePago, fechaIngreso, numeroDeCuenta, metodoDePago, esDelSindicato){
        this.nombreCompleto=nombreCompleto;
        this.id=id;
        this.calculadoraDeSalario = calculadoraDeSalario;
        this.fechaIngreso = fechaIngreso;
        this.numeroDeCuenta = numeroDeCuenta;
        this.metodoDePago=metodoDePago;
        this.correo = "prueb12312a@gmail.com";
        this.celular = 77777777;
        this.calculadoraFechaDePago=calculadoraFechaDePago;
        this.esDelSindicato=esDelSindicato;
        this.prestamo=0;
    }
    pedirPrestamo(dineroPrestado){
        this.prestamo=this.prestamo+dineroPrestado;
    }
    correspondePago(){
        return this.calculadoraFechaDePago.calcularFechaDePago();
    }
    cobrar(){
        return this.metodoDePago.pagar(this.esDelSindicato);
    }
    elegirMetodoDePago(metodoDePago){
        this.metodoDePago=metodoDePago;
    }
    calcularSalario(){
        return this.calculadoraDeSalario.calcularSalario();
    }

    obtenerFechaDeIngreso(){
        return this.fechaIngreso;
    }

    obtenerNombre(){
        return this.nombreCompleto;
    }

    obtenerSueldo(){
        return this.calcularSalario();
    }
    obtenerNumeroDeCuenta(){
        return this.numeroDeCuenta;
    }

    obtenerCorreo(){
        return this.correo;
    }
    estaEnElSindicato(respuesta){
        this.esDelSindicato=respuesta;
    }

    enviarNotificacion(notificacion, tipoDeNotificacion){
        let creadorDeNotificaicones = new DecoradorNotificaciones(notificacion);    
        creadorDeNotificaicones.agregarNotificacion(tipoDeNotificacion);
        return notificacion.enviarNotificaciones(this.correo,this.celular);
    }
}

module.exports = { Empleado };