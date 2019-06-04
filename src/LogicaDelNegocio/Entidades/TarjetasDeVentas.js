
class TarjetaDeVentas {
    constructor(fecha, cantidadDeVentas) {
        this.fecha=fecha;
        this.cantidadDeVentas=cantidadDeVentas;

    }
    obtenerMontoDeVentas(){
        return this.cantidadDeVentas;
    }

}

class TarjetasDeVentas{
    constructor(){
        this.tarjetasDeVentas = [];
    }

    agregarTarjeta(tarjeta){
        this.tarjetasDeVentas.push(tarjeta);
    }

    calcularMontoDeVentasTotales(){
        let total=0;
        for (let contador=0; contador<this.tarjetasDeVentas.length; contador++){
            total=total+this.tarjetasDeVentas[contador].obtenerMontoDeVentas();
        }
        return total;
    }
}

module.exports = { TarjetasDeVentas, TarjetaDeVentas };