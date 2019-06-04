const CalculadoraDeFecha = require("./CalculadoraDeFecha").CalculadoraDeFecha;

class CalculadoraDeSalarioFijo {
    constructor(salario, fechaDeInicio, fechaActual, esDelSindicato, prestamo){
        this.salario = salario;
        this.esDelSindicato = esDelSindicato;
        this.fechaDeInicio = new Date(fechaDeInicio + ' 12:00:00');
        this.fechaActual = new Date(fechaActual + ' 12:00:00');
        this.inscripcionDelSindicato=30;
        this.prestamo=prestamo;
    }

    calcularSalario(){
        if(this.fechaActual.getMonth()>this.fechaDeInicio.getMonth()){
           return this.aplicarDescuentos();
        }
        else{
            return this.calcularSalarioConDescuentoPorImpuntualidad();
        }
    }

    aplicarDescuentos() {
        return this.aplicarDescuentoDeInscripcionAlSindicato() - this.descontarPrestamo();
    }

    descontarPrestamo(){
        if(this.prestamo>0){
            return -(this.prestamo);
        }
        else{
            return 0;
        }
    }
    aplicarDescuentoDeInscripcionAlSindicato() {
        if (this.esDelSindicato)
            return this.salario - this.inscripcionDelSindicato;
        else
            return this.salario;
    }

    calcularSalarioConDescuentoPorImpuntualidad(){
        let salarioConDescuento;
        let diasDelMesDeEntrada = CalculadoraDeFecha.obtenerCantidadDiasDelMes(this.fechaDeInicio);
        let salarioPorDia = this.salario/ diasDelMesDeEntrada;

        salarioConDescuento = (diasDelMesDeEntrada - this.fechaDeInicio.getDate())*salarioPorDia;

        return (salarioConDescuento-this.inscripcionDelSindicato);
    }
}

class CalculadoraDeSalarioPorHora {
    constructor(salarioPorHora, tarjetasDeAsistencia,esDelSindicato,prestamo){
        this.salarioPorHora = salarioPorHora;
        this.tarjetasDeAsistencia = tarjetasDeAsistencia;
        this.inscripcionDelSindicato=30;
        this.esDelSindicato = esDelSindicato;
        this.prestamo=prestamo;


    }

    aplicarDescuentoDeInscripcionAlSindicato(horasExtra,horasTrabajadas) {
        if (this.esDelSindicato)
            return this.salarioPorHora*horasTrabajadas + this.calcularAumentoEnSalario(horasExtra,1.5) - this.inscripcionDelSindicato;
        else
            return this.salarioPorHora*horasTrabajadas + this.calcularAumentoEnSalario(horasExtra,1.5);
    }
    calcularSalario(){
        let horasTrabajadas = this.tarjetasDeAsistencia.calcularHorasTrabajadas();
        let horasExtra = this.tarjetasDeAsistencia.calcularHorasExtra();

        return this.aplicarDescuentos(horasExtra,horasTrabajadas);
    }
    calcularAumentoEnSalario(horasExtras, aumento){
        let salarioConAumento = this.salarioPorHora + aumento;
        return salarioConAumento*horasExtras;
    }
    aplicarDescuentos(horasExtra,horasTrabajadas) {
        return this.aplicarDescuentoDeInscripcionAlSindicato(horasExtra,horasTrabajadas) - this.descontarPrestamo();
    }

    descontarPrestamo(){
        if(this.prestamo>0){
            return -this.prestamo;
        }
        else{
            return 0;
        }
    }
}

class CalculadoraDeSalarioPorComision{
    constructor(salarioBase,porcentajeDeComision,kardex, tarjetaDeVentas,esDelSindicato,prestamo){
        this.salarioBase = salarioBase;
        this.porcentajeDeComision = porcentajeDeComision;
        this.kardex=kardex;
        this.tarjetasDeVentas = tarjetaDeVentas;
        this.inscripcionDelSindicato=30;
        this.esDelSindicato = esDelSindicato;
        this.prestamo=prestamo;
    }

    calcularSalario(){
        let ventasTotales=this.calcularVentasTotales();
        return this.aplicarDescuentos(ventasTotales);
    }
    aplicarDescuentoDeInscripcionAlSindicato(ventasTotales) {
        if (this.esDelSindicato)
            return (this.salarioBase-this.kardex)+(this.porcentajeDeComision*ventasTotales) - this.inscripcionDelSindicato;
        else
            return (this.salarioBase-this.kardex)+(this.porcentajeDeComision*ventasTotales);
    }

    calcularVentasTotales(){
        let total= this.tarjetasDeVentas.calcularMontoDeVentasTotales();
        return total;
    }
    aplicarDescuentos(ventasTotales) {
        return this.aplicarDescuentoDeInscripcionAlSindicato(ventasTotales) - this.descontarPrestamo();
    }

    descontarPrestamo(){
        if(this.prestamo>0){
            return -this.prestamo;
        }
        else{
            return 0;
        }
    }
}

module.exports = { CalculadoraDeSalarioPorComision, CalculadoraDeSalarioPorHora, CalculadoraDeSalarioFijo };