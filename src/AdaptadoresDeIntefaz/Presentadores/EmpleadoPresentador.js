class EmpleadoPresentador{

    presentarEmpleado(datosEmpleado){
        let empleado = this.modelarEmpleado(datosEmpleado);
        return empleado;
    }

    modelarEmpleado(empleado){
        let empleadoModelado =
            {
                "nombreCompleto": empleado.nombre,
                "id": empleado.ci,
                "calculadoraDeSalario": empleado.tipoDeEmpleado,
                "salario": empleado.salario,
                "salarioPorHora":empleado.precioDeLaHora,
                "salarioBase":empleado.salarioBase,
                "porcentakeDeComsion":empleado.porcentajeDeComision,
                "calculadoraFechaDePago": empleado.tipoDeEmpleado,
                "fechaDeEntrada": this.modeladoDeFecha(empleado.fechaDeEntrada)
            };
        return empleadoModelado;
    }

    modeladoDeFecha(fecha){
        let formatoFecha = new Date(fecha);
        let cadenaFecha  =  "";
        let dia  = formatoFecha.getDate();
        let mes = formatoFecha.getMonth()+1;
        let anio = formatoFecha.getFullYear();
        cadenaFecha = cadenaFecha+mes+" "+dia+","+anio;
        return  cadenaFecha;
    }
}

module.exports = { EmpleadoPresentador };