const CalculadoraDeSalarioFijo = require("../../LogicaDelNegocio/Entidades/CalculadoraDeSalarios").CalculadoraDeSalarioFijo;
const CalculadoraDeSalarioPorComision = require("../../LogicaDelNegocio/Entidades/CalculadoraDeSalarios").CalculadoraDeSalarioPorComision;
const CalculadoraDeSalarioPorHora = require("../../LogicaDelNegocio/Entidades/CalculadoraDeSalarios").CalculadoraDeSalarioPorHora;
const TarjetasDeVentas = require("../../LogicaDelNegocio/Entidades/TarjetasDeVentas").TarjetasDeVentas;
const TarjetasDeAsistencia = require("../../LogicaDelNegocio/Entidades/TarjetasDeAsistencia").TarjetasDeAsistencia;

class CalculadoraDeSalarioFactory {

    static calculadoraDeSalario(tipoDeEmpleado){
        switch (tipoDeEmpleado) {
            case 'fijo':
                return new CalculadoraDeSalarioFijo(this.datosEmpleado.salario,this.datosEmpleado.fechaDeEntrada);
                break;
            case 'hora':
                return new CalculadoraDeSalarioPorHora(this.datosEmpleado.salarioPorHora,new TarjetasDeAsistencia());
                break;
            case 'comision':
                return new CalculadoraDeSalarioPorComision(this.datosEmpleado.salarioBase,this.datosEmpleado.porcentajeDeComision,50,new TarjetasDeVentas())
                break;
        }
    }
}

module.exports = { CalculadoraDeSalarioFactory};