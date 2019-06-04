class PresentadorBoundary{
    constructor(presentador){
        this.presentador=presentador;
    }

    obtenerEmpleado(empleado){
        return this.presentador.presentarEmpleado(empleado);
    }
}

module.exports = { PresentadorBoundary };