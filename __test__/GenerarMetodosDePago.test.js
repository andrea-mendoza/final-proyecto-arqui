import MetodoDePago, {PagoEnEfectivo, PagoPorCheque, PagoPorTransefernciaBancaria} from "../src/LogicaDeLaAplicacion/CasosDeUso/MetodoDePago";
const Empleado = require("../src/LogicaDelNegocio/Entidades/Empleado").Empleado;
import { CalculadoraDeSalarioFijo } from "../src/LogicaDelNegocio/Entidades/CalculadoraDeSalarios";
import { CalculadoraDeFechaDePagoSalarioFijo, CalculadoraDeFechaDePagoSalarioPorHora, CalculadoraDeFechaDePagoSalarioPorComision} from "../src/LogicaDelNegocio/Entidades/CalculadoraDeFechasDePago";

describe('Generar los metodos de pago en efectivo, transferencia bancaria y cheque ', function () {
    let empleadoJuan;
    let fechaDePagoEmpleadoSalarioFijo;
    let fechaDePago;
    let datosDeEmpleado1;
    let calculadoraEmpleadoSalarioFijo;

    beforeAll(function() {
        calculadoraEmpleadoSalarioFijo = new CalculadoraDeSalarioFijo(100,"4 2,2019","05 30,2019");
        fechaDePagoEmpleadoSalarioFijo = new CalculadoraDeFechaDePagoSalarioFijo("4 2,2019");
        fechaDePago = new CalculadoraDeFechaDePagoSalarioFijo("4 2,2019");
        empleadoJuan = new Empleado("Juan Perez", 1, calculadoraEmpleadoSalarioFijo, undefined, "5 25,2019", "12321", false);
        datosDeEmpleado1 = {
            datosEmpleado: empleadoJuan,
            calculadora: fechaDePago
        };
    });

    test('Elegir metodo de pago en efectivo para un empleado de salario fijo', function() {
        let metodoDePago = new PagoEnEfectivo(datosDeEmpleado1.datosEmpleado);
        expect(metodoDePago.pagarEnEfectivo()).toBe("Por favor retirar la suma de 100 bs en caja");
    });

    test('Elegir metodo de pago en cheque para un empleado de salario fijo', function() {
        let metodoDePago = new PagoPorCheque(datosDeEmpleado1.datosEmpleado);
        expect(metodoDePago.emitirCheque()).toBe("Se precisa pagar a: Juan Perez    la suma de: 100     ");
    });
    test('Elegir metodo de pago por transferencia bancaria para un empleado de salario fijo', function() {
        let metodoDePago = new PagoPorTransefernciaBancaria(datosDeEmpleado1.datosEmpleado);
        expect(metodoDePago.depositarEnElBanco()).toBe("Se realizo el deposito de: 100 a la cuenta numero 12321");
    });

});
