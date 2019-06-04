
class GeneradorDeBoleta{
    constructor(){
    }
    
    generarBoleta(empleado, fechaActual){
        let boleta;
        if(fechaActual === empleado.correspondePago()){
            boleta = "Nombre del empleado: " + empleado.obtenerNombre() + "    ";
            boleta = boleta + "Fecha de pago: " + empleado.correspondePago() + "     ";
            boleta = boleta + "Sueldo: " + empleado.obtenerSueldo();
            if(empleado.esDelSindicato === true){
                boleta = boleta + "     Se realizo un descuento por pertenecer al sinticato";
            }
        }
        else{
            boleta="No se le corresponde pagar en la fecha de hoy, vuelva a internarlo el "+empleado.correspondePago();
        }

        return boleta;
    }

    generarBoletasDePago(empleados, fechaActual){
        let boletas = [];
        for(let i = 0; i < empleados.length;i++){
            boletas.push(this.generarBoleta(empleados[i].datosEmpleado, fechaActual));
        } 
        return boletas;
    }

}

module.exports = { GeneradorDeBoleta };
