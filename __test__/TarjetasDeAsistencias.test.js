
import {TarjetaDeAsistencia, TarjetasDeAsistencia} from "../src/LogicaDelNegocio/Entidades/TarjetasDeAsistencia";

describe('Calcular el total de horas y marcar hora de entrada y salida en las tarjetas de asistencia', function () {
    let tarjetaDeAsistencia = new TarjetaDeAsistencia("03 04,2019");

    test('Guardar una hora de entrada 9 deberia devolver 9', function () {
        tarjetaDeAsistencia.guardarHoraDeEntrada(9);
        expect(tarjetaDeAsistencia.horaDeEntrada).toBe(9);
    });
    test('Guardar una hora de salida 19 deberia devolver 19', function () {
        tarjetaDeAsistencia.guardarHoraDeSalida(19);
        expect(tarjetaDeAsistencia.horaDeSalida).toBe(19);
    });
    test('Guardar una hora de entrada 9 y una hora de salida 19 deberia devolver 10 hora trabajadas', function () {
        let horasTrabajadas;
        let tarjetasDeAsistencia =  new TarjetasDeAsistencia();
        tarjetaDeAsistencia.guardarHoraDeEntrada(9);
        tarjetaDeAsistencia.guardarHoraDeSalida(19);

        tarjetasDeAsistencia.agregarTarjeta(tarjetaDeAsistencia);

        horasTrabajadas = tarjetasDeAsistencia.calcularHorasTotalesTrabajadas();
        expect(horasTrabajadas).toBe(10);
    });
});