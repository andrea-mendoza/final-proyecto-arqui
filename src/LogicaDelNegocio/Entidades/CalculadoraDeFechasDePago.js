const CalculadoraDeFecha = require("./CalculadoraDeFecha").CalculadoraDeFecha;

class CalculadoraDeFechaDePagoSalarioFijo{
    constructor(fecha){
        this.fechaGenerada = new Date(fecha + ' 12:00:00');
    }

    calcularFechaDePago(){
        let fechaDePago = this.fechaGenerada;
        let cantidadDeDiasMes = CalculadoraDeFecha.obtenerCantidadDiasDelMes(this.fechaGenerada);
        while(CalculadoraDeFecha.esViernes(fechaDePago) === false){
            fechaDePago.setDate(cantidadDeDiasMes--);    
        }
        return fechaDePago.toDateString();
    }
}

class CalculadoraDeFechaDePagoSalarioPorHora{
    constructor(fecha){
        this.fechaGenerada = new Date(fecha + ' 12:00:00');
    }

    calcularFechaDePago(){
        let fechaDePago = this.fechaGenerada;
        let diaDePago=fechaDePago.getDate();
        while(CalculadoraDeFecha.esViernes(fechaDePago) === false){
            fechaDePago.setDate(diaDePago++);
        }
        return fechaDePago.toDateString();
    }
    
}

class CalculadoraDeFechaDePagoSalarioPorComision{
    constructor(fecha){
        this.fechaGenerada = new Date(fecha + ' 12:00:00');
    }

    calcularFechaDePago(){
        let fechaDePago = this.fechaGenerada;
        let semana = 0;
        let diaDePago=fechaDePago.getDate();
        while(semana !=2){
            if (CalculadoraDeFecha.esViernes(fechaDePago) === true){
                semana++;
            }
             if(CalculadoraDeFecha.esFinDeMes(fechaDePago)){
               fechaDePago= CalculadoraDeFecha.empezarNuevoMes(fechaDePago);
               diaDePago=1;
             }
            fechaDePago.setDate(diaDePago++);
        }
        fechaDePago.setDate(diaDePago-2);
        return fechaDePago.toDateString();
    }

}

module.exports = { CalculadoraDeFechaDePagoSalarioPorComision, CalculadoraDeFechaDePagoSalarioPorHora, CalculadoraDeFechaDePagoSalarioFijo };