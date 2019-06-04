const Empleado = require("../src/LogicaDelNegocio/Entidades/Empleado").Empleado;
import { CalculadoraDeSalarioFijo, CalculadoraDeSalarioPorHora, CalculadoraDeSalarioPorComision } from "../src/LogicaDelNegocio/Entidades/CalculadoraDeSalarios";
import {TarjetaDeAsistencia, TarjetasDeAsistencia} from "../src/LogicaDelNegocio/Entidades/TarjetasDeAsistencia";
import {TarjetaDeVentas, TarjetasDeVentas} from "../src/LogicaDelNegocio/Entidades/TarjetasDeVentas";

describe('Calcular el salario para empleados de sueldo fijo, por hora y por comision', function() {
    let empleado;

    test('El salario del mes de mayo de un empleado de sueldo fijo que entro el 15 es 51.61',function(){
         let calculadoraEmpleadoSalarioFijo = new CalculadoraDeSalarioFijo(100,"05 15,2019","05 30,2019",false);
         empleado = new Empleado("Juan Perez", 1, calculadoraEmpleadoSalarioFijo, undefined, "05 15,2019", "12321");
         expect(empleado.calcularSalario()).toBe(21.61290322580645);
    });
    test('El salario del mes de mayo de un empleado de sueldo fijo miembro del sindicato que entro el 15 y tiene un prestamo de 10 es 51.61 ',function(){
        let calculadoraEmpleadoSalarioFijo = new CalculadoraDeSalarioFijo(100,"05 15,2019","05 30,2019",true,10);
        empleado = new Empleado("Juan Perez", 1, calculadoraEmpleadoSalarioFijo, undefined, "05 15,2019", "12321");
        expect(empleado.calcularSalario()).toBe(21.61290322580645);
    });

    test('El salario del mes de mayo de un empleado de sueldo fijo que entro el 25 es 19.35',function(){
        let calculadoraEmpleadoSalarioFijo = new CalculadoraDeSalarioFijo(200,"05 25,2019","05 30,2019",false);
        empleado = new Empleado("Juan Perez", 1, calculadoraEmpleadoSalarioFijo, undefined, "05 25,2019", "12321");
        expect(empleado.calcularSalario()).toBe(8.709677419354833);
    });


    test('El salario del mes de junio de un empleado de sueldo fijo que entro en mayo es 100',function(){
        let calculadoraEmpleadoSalarioFijo = new CalculadoraDeSalarioFijo(100,"05 25,2019","06 30,2019",false);
        empleado = new Empleado("Juan Perez", 1, calculadoraEmpleadoSalarioFijo, undefined, "05 25,2019", "12321");
        expect(empleado.calcularSalario()).toBe(100);
    });

    test('El salario de un empleado de sueldo por hora que trabajo 6 horas es 84',function(){
        let tarjetaDiaLunes = new TarjetaDeAsistencia("06 25,2018");
        let tarjetasDeAsistencia = new TarjetasDeAsistencia();

        tarjetaDiaLunes.guardarHoraDeEntrada(8);
        tarjetaDiaLunes.guardarHoraDeSalida(14);
        tarjetasDeAsistencia.agregarTarjeta(tarjetaDiaLunes);

        let calculadoraEmpleadoSalarioPorHora = new CalculadoraDeSalarioPorHora(14,tarjetasDeAsistencia,false);
        empleado = new Empleado("Juan Perez", 1, calculadoraEmpleadoSalarioPorHora, undefined, "05 25,2019", "12321");
        expect(empleado.calcularSalario()).toBe(84);
    });

    test('El salario de un empleado de sueldo por hora que trabajo 8 horas es 112',function(){
        let tarjetaDiaLunes = new TarjetaDeAsistencia("06 25,2018");
        let tarjetasDeAsistencia = new TarjetasDeAsistencia();

        tarjetaDiaLunes.guardarHoraDeEntrada(8);
        tarjetaDiaLunes.guardarHoraDeSalida(16);

        tarjetasDeAsistencia.agregarTarjeta(tarjetaDiaLunes);
        let calculadoraEmpleadoSalarioPorHora = new CalculadoraDeSalarioPorHora(14,tarjetasDeAsistencia,false);
        empleado = new Empleado("Juan Perez", 1, calculadoraEmpleadoSalarioPorHora, undefined, "05 25,2019", "12321");
        expect(empleado.calcularSalario()).toBe(112);
    });

    test('El salario de un empleado de sueldo por hora que trabajo 10 horas es 143',function(){
        let tarjetaDiaMartes = new TarjetaDeAsistencia("07 25,2018");
        let tarjetasDeAsistencia = new TarjetasDeAsistencia();

        tarjetaDiaMartes.guardarHoraDeEntrada(8);
        tarjetaDiaMartes.guardarHoraDeSalida(18);

        tarjetasDeAsistencia.agregarTarjeta(tarjetaDiaMartes);
        let calculadoraEmpleadoSalarioPorHora = new CalculadoraDeSalarioPorHora(14,tarjetasDeAsistencia,false);
        empleado = new Empleado("Juan Perez", 1, calculadoraEmpleadoSalarioPorHora, undefined, "05 25,2019", "12321");
        expect(empleado.calcularSalario()).toBe(143);
    });

   test('El salario de un empleado de sueldo por comision que realizo una venta es de 1250', function() {
       let tarjetaVentaDiaLunes = new TarjetaDeVentas("5 22,2019",30,false);
       let tarjetasDeVentas = new TarjetasDeVentas();
       tarjetasDeVentas.agregarTarjeta(tarjetaVentaDiaLunes);
       let calculadoraEmpleadoPorComision = new CalculadoraDeSalarioPorComision(100,40,50,tarjetasDeVentas);
       empleado = new Empleado("Juan Perez", 1, calculadoraEmpleadoPorComision, undefined, "5 25,2019", "12321");
       expect(empleado.calcularSalario()).toBe(1250);
   });

});