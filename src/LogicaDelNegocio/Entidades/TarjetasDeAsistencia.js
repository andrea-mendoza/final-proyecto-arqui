class TarjetaDeAsistencia{
    constructor(fecha){
        this.fecha=fecha;
        this.horaDeEntrada= 0;
        this.horaDeSalida=0;
    }

    guardarHoraDeEntrada(horaDeEntrada){
        this.horaDeEntrada=horaDeEntrada;
    }

    guardarHoraDeSalida(horaDeSalida){
        this.horaDeSalida=horaDeSalida;
    }

    calcularHorasTrabajadas(){
        return (this.horaDeSalida - this.horaDeEntrada);
    }
}

 class TarjetasDeAsistencia{
    constructor(){
        this.tarjetasDeAsistencia = [];
    }

    agregarTarjeta(tarjeta){
        this.tarjetasDeAsistencia.push(tarjeta);
    }

    calcularHorasTotalesTrabajadas(){
        let horasTrabajadas;
        for(let i = 0; i<this.tarjetasDeAsistencia.length;i++){
            horasTrabajadas = this.tarjetasDeAsistencia[i].calcularHorasTrabajadas();
        }

        return horasTrabajadas;
    }

    calcularHorasTrabajadas(){
        let horasTrabajadas = this.calcularHorasTotalesTrabajadas();
        if(horasTrabajadas - 8 <= 0)
            return horasTrabajadas;
        else
            return 8;
    }

    calcularHorasExtra(){
        let horasTrabajadas = this.calcularHorasTotalesTrabajadas() - 8;
        if(horasTrabajadas <= 0){
            return 0;
        }
        else {
            return horasTrabajadas;
        }
    }
}

module.exports = { TarjetasDeAsistencia, TarjetaDeAsistencia };
