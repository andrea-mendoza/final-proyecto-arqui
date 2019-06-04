const GeneradorDeBoleta = require("../src/LogicaDeLaAplicacion/CasosDeUso/GeneradorDeBoleta").GeneradorDeBoleta;
const Empleado = require("../src/LogicaDelNegocio/Entidades/Empleado").Empleado;
import { CalculadoraDeSalarioFijo, CalculadoraDeSalarioPorHora, CalculadoraDeSalarioPorComision } from "../src/LogicaDelNegocio/Entidades/CalculadoraDeSalarios";
import {TarjetaDeAsistencia, TarjetasDeAsistencia} from "../src/LogicaDelNegocio/Entidades/TarjetasDeAsistencia";
import {TarjetaDeVentas, TarjetasDeVentas} from "../src/LogicaDelNegocio/Entidades/TarjetasDeVentas";
import { Notificaciones, NotificacionPorEmail, NotificacionPorFacebook, NotificacionPorSMS, NotificacionPorWhatsapp } from "../src/LogicaDelNegocio/Entidades/Notificaciones";
import { CalculadoraDeFechaDePagoSalarioFijo, CalculadoraDeFechaDePagoSalarioPorHora, CalculadoraDeFechaDePagoSalarioPorComision} from "../src/LogicaDelNegocio/Entidades/CalculadoraDeFechasDePago";
import {RepositorioDeEmpleadoEnJSON} from "../src/AdaptadoresDeIntefaz/Almacenamiento/RepositorioJSON";

describe('Generar las boletas para los empleados de sueldo fijo, por hora y por comision y envia una notificacion', function () {
    let empleadoJuan;
    let empleadoAlfonso;
    let empleadoMateo;
    let boleta;
    let boletas=[];
    let empleados = [];
    let fechaDePagoEmpleadoSalarioFijo;
    let fechaDePagoEmpleadoPorHora;
    let fechaDePagoEmpleadoPorComision;
    let fechaDePago;
    let datosDeEmpleado1;
    let datosDeEmpleado2;
    let datosDeEmpleado3;
    let tarjetaDiaLunes;
    let tarjetasDeAsistencia = new TarjetasDeAsistencia();
    let calculadoraEmpleadoSalarioFijo;
    let calculadoraEmpleadoPorHora;
    let calculadoraEmpleadoPorComision;
    let tarjetaVentaDiaLunes;
    let notificaciones;
    let tarjetasDeVentas = new TarjetasDeVentas();

    beforeAll(function() {
        tarjetaDiaLunes = new TarjetaDeAsistencia("06 25,2018");
        tarjetaDiaLunes.guardarHoraDeEntrada(8);
        tarjetaDiaLunes.guardarHoraDeSalida(16);

        tarjetaVentaDiaLunes = new TarjetaDeVentas("5 22,2019",30);

        tarjetasDeVentas.agregarTarjeta(tarjetaVentaDiaLunes);

        tarjetasDeAsistencia.agregarTarjeta(tarjetaDiaLunes);
        calculadoraEmpleadoSalarioFijo = new CalculadoraDeSalarioFijo(100,"4 2,2019","05 30,2019");
        calculadoraEmpleadoPorHora=new CalculadoraDeSalarioPorHora(100,tarjetasDeAsistencia);
        calculadoraEmpleadoPorComision=new CalculadoraDeSalarioPorComision(100,40,50,tarjetasDeVentas);

        fechaDePagoEmpleadoSalarioFijo = new CalculadoraDeFechaDePagoSalarioFijo("4 2,2019");
        fechaDePagoEmpleadoPorHora = new CalculadoraDeFechaDePagoSalarioPorHora("4 2,2019");
        fechaDePagoEmpleadoPorComision = new CalculadoraDeFechaDePagoSalarioPorComision("4 2,2019");

        fechaDePago = new CalculadoraDeFechaDePagoSalarioFijo("4 2,2019");

        empleadoJuan = new Empleado("Juan Perez", 1, calculadoraEmpleadoSalarioFijo, fechaDePagoEmpleadoSalarioFijo, "5 25,2019", "12321", null);
        empleadoAlfonso = new Empleado("Alfonso Perez", 1, calculadoraEmpleadoPorHora, fechaDePagoEmpleadoPorHora, "5 25,2019", "12321", null);
        empleadoMateo =new Empleado("Mateo Jordan", 1, calculadoraEmpleadoPorComision, fechaDePagoEmpleadoPorComision, "5 25,2019", "12321", null);

        notificaciones =new Notificaciones();
        datosDeEmpleado1 = {
            datosEmpleado: empleadoJuan,
            calculadora: fechaDePago
        };

        datosDeEmpleado2 = {
            datosEmpleado: empleadoAlfonso,
            calculadora: fechaDePagoEmpleadoPorHora
        };
        datosDeEmpleado3 = {
            datosEmpleado: empleadoMateo,
            calculadora: fechaDePagoEmpleadoPorComision
        };

    });

    test('Generar una boleta para un empleado de salario fijo', function() {
        boleta = new GeneradorDeBoleta();
        let notificacionPorEmail = new NotificacionPorEmail("Se le realizo el pago");
        expect(boleta.generarBoleta(empleadoJuan,"Fri Apr 26 2019")).toBe("Nombre del empleado: Juan Perez    Fecha de pago: Fri Apr 26 2019     Sueldo: 100");
        expect(empleadoJuan.enviarNotificacion(notificaciones,notificacionPorEmail)).toBe("Mensaje por correo enviado");

    });

    test('Generar una boleta para un empleado de salario por hora', function() {
        boleta = new GeneradorDeBoleta();
        expect(boleta.generarBoleta(empleadoAlfonso,"Fri Apr 05 2019")).toBe("Nombre del empleado: Alfonso Perez    Fecha de pago: Fri Apr 05 2019     Sueldo: 800");
    });

    test('Generar una boleta para un empleado de salario por comision', function() {
        boleta = new GeneradorDeBoleta();
        expect(boleta.generarBoleta(empleadoMateo,"Fri Apr 12 2019")).toBe("Nombre del empleado: Mateo Jordan    Fecha de pago: Fri Apr 12 2019     Sueldo: 1250");
    });

    test('Generar varias boleta para un empleado de salario fijo, uno de salario por comision y uno de salario por hora', function() {
        boletas = new GeneradorDeBoleta();

        empleados.push(datosDeEmpleado1);
        empleados.push(datosDeEmpleado2);
        empleados.push(datosDeEmpleado3);
        expect(boletas.generarBoletasDePago(empleados,"Fri Apr 05 2019")).toEqual(["No se le corresponde pagar en la fecha de hoy, vuelva a internarlo el Fri Apr 26 2019", "Nombre del empleado: Alfonso Perez    Fecha de pago: Fri Apr 05 2019     Sueldo: 800", "No se le corresponde pagar en la fecha de hoy, vuelva a internarlo el Fri Apr 12 2019"]);
    });
});

describe('Generar las boletas para los empleados de sueldo fijo, por hora y por comision y envia una notificacion para el mes de Mayo' , function () {
    let empleadoJuan;
    let empleadoAlfonso;
    let empleadoMateo;
    let boleta;
    let boletas=[];
    let empleados = [];
    let fechaDePagoEmpleadoSalarioFijo;
    let fechaDePagoEmpleadoPorHora;
    let fechaDePagoEmpleadoPorComision;
    let fechaDePago;
    let datosDeEmpleado1;
    let datosDeEmpleado2;
    let datosDeEmpleado3;
    let tarjetaDiaLunes;
    let tarjetasDeAsistencia = new TarjetasDeAsistencia();
    let calculadoraEmpleadoSalarioFijo;
    let calculadoraEmpleadoPorHora;
    let calculadoraEmpleadoPorComision;
    let tarjetaVentaDiaLunes;
    let notificaciones;
    let tarjetasDeVentas = new TarjetasDeVentas();

    beforeAll(function() {
        tarjetaDiaLunes = new TarjetaDeAsistencia("6 25,2018");
        tarjetaDiaLunes.guardarHoraDeEntrada(8);
        tarjetaDiaLunes.guardarHoraDeSalida(16);

        tarjetaVentaDiaLunes = new TarjetaDeVentas("6 22,2019",30);

        tarjetasDeVentas.agregarTarjeta(tarjetaVentaDiaLunes);

        tarjetasDeAsistencia.agregarTarjeta(tarjetaDiaLunes);
        calculadoraEmpleadoSalarioFijo = new CalculadoraDeSalarioFijo(100,"4 2,2019","05 30,2019");
        calculadoraEmpleadoPorHora=new CalculadoraDeSalarioPorHora(100,tarjetasDeAsistencia);
        calculadoraEmpleadoPorComision=new CalculadoraDeSalarioPorComision(100,40,50,tarjetasDeVentas);

        fechaDePagoEmpleadoSalarioFijo = new CalculadoraDeFechaDePagoSalarioFijo("5 31,2019");
        fechaDePagoEmpleadoPorHora = new CalculadoraDeFechaDePagoSalarioPorHora("5 31,2019");
        fechaDePagoEmpleadoPorComision = new CalculadoraDeFechaDePagoSalarioPorComision("5 31,2019");

        fechaDePago = new CalculadoraDeFechaDePagoSalarioFijo("5 2,2019");

        empleadoJuan = new Empleado("Juan Perez", 1, calculadoraEmpleadoSalarioFijo, fechaDePagoEmpleadoSalarioFijo, "5 31,2019", "12321", null);
        empleadoAlfonso = new Empleado("Alfonso Perez", 1, calculadoraEmpleadoPorHora, fechaDePagoEmpleadoPorHora, "5 31,2019", "12321", null);
        empleadoMateo =new Empleado("Mateo Jordan", 1, calculadoraEmpleadoPorComision, fechaDePagoEmpleadoPorComision, "5 28,2019", "12321", null);

        notificaciones =new Notificaciones();
        datosDeEmpleado1 = {
            datosEmpleado: empleadoJuan,
            calculadora: fechaDePago
        };

        datosDeEmpleado2 = {
            datosEmpleado: empleadoAlfonso,
            calculadora: fechaDePagoEmpleadoPorHora
        };
        datosDeEmpleado3 = {
            datosEmpleado: empleadoMateo,
            calculadora: fechaDePagoEmpleadoPorComision
        };

    });

    test('Generar una boleta para un empleado de salario fijo', function() {
        boleta = new GeneradorDeBoleta();
        let notificacionPorEmail = new NotificacionPorEmail("Se le realizo el pago");
        expect(boleta.generarBoleta(empleadoJuan,"Fri May 31 2019")).toBe("Nombre del empleado: Juan Perez    Fecha de pago: Fri May 31 2019     Sueldo: 100");
        expect(empleadoJuan.enviarNotificacion(notificaciones,notificacionPorEmail)).toBe("Mensaje por correo enviado");

    });

    test('Generar una boleta para un empleado de salario por hora', function() {
        boleta = new GeneradorDeBoleta();
        expect(boleta.generarBoleta(empleadoAlfonso,"Fri May 31 2019")).toBe("Nombre del empleado: Alfonso Perez    Fecha de pago: Fri May 31 2019     Sueldo: 800");
    });

    test('Generar una boleta para un empleado de salario por comision', function() {
        boleta = new GeneradorDeBoleta();
        expect(boleta.generarBoleta(empleadoMateo,"Fri Jul 05 2019")).toBe("Nombre del empleado: Mateo Jordan    Fecha de pago: Fri Jul 05 2019     Sueldo: 1250");
    });

    test('Generar varias boleta para un empleado de salario fijo, uno de salario por comision y uno de salario por hora', function() {
        boletas = new GeneradorDeBoleta();

        empleados.push(datosDeEmpleado1);
        empleados.push(datosDeEmpleado2);
        empleados.push(datosDeEmpleado3);
        expect(boletas.generarBoletasDePago(empleados,"Fri May 31 2019")).toEqual(["Nombre del empleado: Juan Perez    Fecha de pago: Fri May 31 2019     Sueldo: 100", "Nombre del empleado: Alfonso Perez    Fecha de pago: Fri May 31 2019     Sueldo: 800", "No se le corresponde pagar en la fecha de hoy, vuelva a internarlo el Fri Jul 05 2019"]);
    });
});