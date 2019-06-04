// import Empleado from "../src/LogicaDelNegocio/Entidades/Empleado";
import { CalculadoraDeSalarioFijo } from "../src/LogicaDelNegocio/Entidades/CalculadoraDeSalarios";
import {RepositorioDeEmpleadoEnJSON } from "../src/AdaptadoresDeIntefaz/Almacenamiento/RepositorioJSON";
import {RepositorioDeEmpleado} from "../src/LogicaDeLaAplicacion/Repositorio/RepositorioDeEmpleado";
import {EmpleadoPresentador} from "../src/AdaptadoresDeIntefaz/Presentadores/EmpleadoPresentador";
import {CrearEmpleado} from "../src/LogicaDeLaAplicacion/CasosDeUso/CrearEmpleado";
import {ListarEmpleados} from "../src/LogicaDeLaAplicacion/CasosDeUso/ListarEmpleados";
import {EmpleadoControlador} from "../src/AdaptadoresDeIntefaz/Controladores/EmpleadoControlador";

describe('Guardar los datos de los empleados en un arreglo', function () {
    var datos;
    var empleados;

    test('Cargar datos los empleados', function() {
        let repositorioDeEmpleado = new RepositorioDeEmpleado(new RepositorioDeEmpleadoEnJSON());
        empleados =  repositorioDeEmpleado.obtenerTodos();
        expect(empleados[0].nombreCompleto).toBe("Alfonso Perez");
        expect(empleados[0].fechaIngreso).toBe("5 25,2019");


        // let empleadoPrueba = {ci: "awdsasd",
        //     nombre: "Andrea Mendoza",
        //     porcentajeDeComision: "2",
        //     precioDeLaHora: "",
        //     salario: "1213212",
        //     salarioBase: "123",
        //     tipoDeEmpleado: "comision"};
        // //
        // //
        // let presentador = new EmpleadoPresentador();
        // let datoPresentado = presentador.presentarEmpleado(empleadoPrueba);
        // let controladorEmpleado = new EmpleadoControlador();
        //
        // controladorEmpleado.crearEmpleado(datoPresentado,repositorioDeEmpleado);
        // console.log(controladorEmpleado.listarTodosLosEmpleados(repositorioDeEmpleado));
    }); 

});
