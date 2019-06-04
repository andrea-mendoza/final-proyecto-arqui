const Empleado = require( "../../LogicaDelNegocio/Entidades/Empleado").Empleado;
const CalculadoraDeSalarioFijo = require("../../LogicaDelNegocio/Entidades/CalculadoraDeSalarios").CalculadoraDeSalarioFijo;
const CalculadoraDeSalarioPorComision = require("../../LogicaDelNegocio/Entidades/CalculadoraDeSalarios").CalculadoraDeSalarioPorComision;
const CalculadoraDeSalarioPorHora = require("../../LogicaDelNegocio/Entidades/CalculadoraDeSalarios").CalculadoraDeSalarioPorHora;
const TarjetasDeVentas = require("../../LogicaDelNegocio/Entidades/TarjetasDeVentas").TarjetasDeVentas;
const TarjetasDeAsistencia = require("../../LogicaDelNegocio/Entidades/TarjetasDeAsistencia").TarjetasDeAsistencia;
const CalculadoraDeFechaDePagoSalarioFijo = require("../../LogicaDelNegocio/Entidades/CalculadoraDeFechasDePago").CalculadoraDeFechaDePagoSalarioFijo;
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
        let calculadoraDeFechaDePago = this.calculadoraDeFechaPago();
        let calculadoraDeSalario = this.calculadoraDeSalario();
        let empleado = new Empleado(
            this.datosEmpleado.nombreCompleto,
            this.datosEmpleado.id,
            calculadoraDeSalario,
            calculadoraDeFechaDePago,
            this.datosEmpleado.fechaDeEntrada
        );
        return empleado;
    }

    calculadoraDeSalario(){
        switch (this.datosEmpleado.calculadoraDeSalario) {
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

    calculadoraDeFechaPago(){
        switch (this.datosEmpleado.calculadoraFechaDePago) {
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

module.exports = { CrearEmpleado };