 class RepositorioDeEmpleado{
    constructor(repositorio) {
        this.repositorio = repositorio;
    }

    guardar(empleado){
        this.repositorio.guardar(empleado);
    }

    obtener(empleadoId){
        return this.repositorio.obtener(empleadoId);
    }

    obtenerTodos(){
        return this.repositorio.obtenerTodos();
    }

}

 module.exports = { RepositorioDeEmpleado };