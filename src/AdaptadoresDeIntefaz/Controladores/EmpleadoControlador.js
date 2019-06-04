const CrearEmpleado = require("../../LogicaDeLaAplicacion/CasosDeUso/CrearEmpleado").CrearEmpleado;
const ListarEmpleados = require("../../LogicaDeLaAplicacion/CasosDeUso/ListarEmpleados").ListarEmpleados;
const EnviarNotificacion = require("../../LogicaDeLaAplicacion/CasosDeUso/EnviarNotificacion").EnviarNotificacion;


class EmpleadoControlador {
    crearEmpleado(empleado, repositorioEmpleado) {
        const crearEmpleado = new CrearEmpleado(repositorioEmpleado, empleado);
        crearEmpleado.crearNuevoEmpleado();

        return "OK";
    }

    listarTodosLosEmpleados(repositorioEmpleado){
        const listaEmpleados = new ListarEmpleados(repositorioEmpleado);
        return listaEmpleados.listaDeEmpleados();
    }

    enviarNotificacion(empleado,notificacion,tipoDeNotificacion){
        let enviarNotficacion = new EnviarNotificacion(empleado);
        enviarNotficacion.enviarNotificacion(notificacion,tipoDeNotificacion);

        return "OK";
    }
}

module.exports = { EmpleadoControlador };