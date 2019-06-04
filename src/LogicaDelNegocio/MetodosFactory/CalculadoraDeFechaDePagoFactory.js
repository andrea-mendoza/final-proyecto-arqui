const CalculadoraDeFechaDePagoSalarioFijo = require("../../LogicaDelNegocio/Entidades/CalculadoraDeFechasDePago").CalculadoraDeFechaDePagoSalarioFijo;
const CalculadoraDeFechaDePagoSalarioPorComision = require("../../LogicaDelNegocio/Entidades/CalculadoraDeFechasDePago").CalculadoraDeFechaDePagoSalarioPorComision;
const CalculadoraDeFechaDePagoSalarioPorHora = require("../../LogicaDelNegocio/Entidades/CalculadoraDeFechasDePago").CalculadoraDeFechaDePagoSalarioPorHora;

class CalculadoraDeFechaDePagoFactory {

    static calculadoraDeFechaPago(tipoDeEmpleado){
        switch (tipoDeEmpleado) {
            case 'fijo':
                return new CalculadoraDeFechaDePagoSalarioFijo();
                break;
            case 'hora':
                return new CalculadoraDeFechaDePagoSalarioPorHora();
                break;
            case 'comision':
                return new CalculadoraDeFechaDePagoSalarioPorComision();
                break;
        }
    }
}

module.exports = {CalculadoraDeFechaDePagoFactory};