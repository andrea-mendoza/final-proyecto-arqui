import { CalculadoraDeFechaDePagoSalarioFijo, CalculadoraDeFechaDePagoSalarioPorHora, CalculadoraDeFechaDePagoSalarioPorComision} from "../src/LogicaDelNegocio/Entidades/CalculadoraDeFechasDePago";

describe('Calcular la fecha de pago para los empleados de sueldo fijo, por hora y por comision', function () {
    test('La fecha de pago para un empleado de sueldo fijo que trabajó todo abril es el "Fri Apr 26 2019"', function() {
        let fechaDePago = new CalculadoraDeFechaDePagoSalarioFijo("4 2,2019");
        expect(fechaDePago.calcularFechaDePago()).toBe("Fri Apr 26 2019");
    });
    test('La fecha de pago para un empleado de sueldo por horas que trabajó desde el "Mon Apr 22 2019" es el "Fri Apr 26 2019"', function() {
        let fechaDePago = new CalculadoraDeFechaDePagoSalarioPorHora("4 22,2019");
        expect(fechaDePago.calcularFechaDePago()).toBe("Fri Apr 26 2019");
    });

    test('La fecha de pago para un empleado de sueldo por comision que trabajó desde el "Mon Apr 22 2019" es el "Fri Apr 26 2019"', function() {
        let fechaDePago = new CalculadoraDeFechaDePagoSalarioPorComision("4 22,2019");
        expect(fechaDePago.calcularFechaDePago()).toBe("Fri May 03 2019");
    });
});