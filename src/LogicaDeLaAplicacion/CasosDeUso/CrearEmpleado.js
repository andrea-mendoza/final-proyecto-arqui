const Empleado = require( "../../LogicaDelNegocio/Entidades/Empleado").Empleado;
const CalculadoraDeFechaDePagoFactory = require("../../LogicaDelNegocio/MetodosFactory/CalculadoraDeFechaDePagoFactory").CalculadoraDeFechaDePagoFactory;
const CalculadoraDeFechaDePagoSalarioPorComision = require("../../LogicaDelNegocio/Entidades/CalculadoraDeFechasDePago").CalculadoraDeFechaDePagoSalarioPorComision;
const CalculadoraDeFechaDePagoSalarioPorHora = require("../../LogicaDelNegocio/Entidades/CalculadoraDeFechasDePago").CalculadoraDeFechaDePagoSalarioPorHora;


class CrearEmpleado{
    constructor(repositorio, datosEmpleado){
        this.repositorio = repositorio;
        this.datosEmpleado = datosEmpleado;
    }

    crearNuevoEmpleado(){
        let empleado = this.crearEmpleado();
        this.repositorio.guardar(empleado);
    }

    crearEmpleado(){
        let calculadoraDeFechaDePago = CalculadoraDeFechaDePagoFactory.calculadoraDeFechaPago(this.datosEmpleado.calculadoraFechaDePago);
        let calculadoraDeSalario = CalculadoraDeSalarioFactory.calculadoraDeSalario(this.datosEmpleado.calculadoraDeSalario);
        let empleado = new Empleado(
            this.datosEmpleado.nombreCompleto,
            this.datosEmpleado.id,
            calculadoraDeSalario,
            calculadoraDeFechaDePago,
            this.datosEmpleado.fechaDeEntrada
        );
        return empleado;
    }
}

module.exports = { CrearEmpleado };