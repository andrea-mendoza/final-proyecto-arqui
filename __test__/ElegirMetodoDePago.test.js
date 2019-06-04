import MetodoDePago, {PagoEnEfectivo, PagoPorCheque, PagoPorTransefernciaBancaria} from "../src/LogicaDeLaAplicacion/CasosDeUso/MetodoDePago";
const Empleado = require("../src/LogicaDelNegocio/Entidades/Empleado").Empleado;
import { CalculadoraDeSalarioFijo } from "../src/LogicaDelNegocio/Entidades/CalculadoraDeSalarios";
import { CalculadoraDeFechaDePagoSalarioFijo, CalculadoraDeFechaDePagoSalarioPorHora, CalculadoraDeFechaDePagoSalarioPorComision} from "../src/LogicaDelNegocio/Entidades/CalculadoraDeFechasDePago";

describe('Elegir un metodo de pago en efectivo, transferencia bancaria y cheque ', function () {
    let empleadoJuan;
    let fechaDePago;
    let calculadoraEmpleadoSalarioFijo;
    let metodoDePagoEnEfectivo;
    let metodoDePagoEnCheque;
    let metodoDePagoPorTransferencia;
    let fechaDePagoEmpleadoSalarioFijo;

    beforeAll(function() {
        calculadoraEmpleadoSalarioFijo = new CalculadoraDeSalarioFijo(100,"4 2,2019","05 25,2019");
        fechaDePagoEmpleadoSalarioFijo = new CalculadoraDeFechaDePagoSalarioFijo("4 2,2019");
        fechaDePago = new CalculadoraDeFechaDePagoSalarioFijo("4 2,2019");
        empleadoJuan = new Empleado("Juan Perez", 1, calculadoraEmpleadoSalarioFijo, undefined, "5 25,2019", "12321");
        metodoDePagoEnEfectivo = new PagoEnEfectivo(empleadoJuan);
        metodoDePagoEnCheque = new PagoPorCheque(empleadoJuan);
        metodoDePagoPorTransferencia= new PagoPorTransefernciaBancaria(empleadoJuan);
    });

    test('Elegir metodo de pago por efectivo para un empleado de salario fijo', function() {
        empleadoJuan.elegirMetodoDePago(metodoDePagoEnEfectivo);
        expect(empleadoJuan.cobrar()).toBe("Por favor retirar la suma de 100 bs en caja");
    });
    test('Elegir metodo de pago por cheque para un empleado de salario fijo', function() {
        empleadoJuan.elegirMetodoDePago(metodoDePagoEnCheque);
        expect(empleadoJuan.cobrar()).toBe("Se precisa pagar a: Juan Perez    la suma de: 100     ");
    });
    test('Elegir metodo de pago por transferencia bancaria para un empleado de salario fijo', function() {
        empleadoJuan.elegirMetodoDePago(metodoDePagoPorTransferencia);
        expect(empleadoJuan.cobrar()).toBe("Se realizo el deposito de: 100 a la cuenta numero 12321");
    });
});