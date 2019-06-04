class ListarEmpleados {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }

    listaDeEmpleados(){
        return this.repositorio.obtenerTodos();
    }
}

module.exports = { ListarEmpleados };