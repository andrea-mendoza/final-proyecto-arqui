class CalculadoraDeFecha{
    static obtenerDiaDeSemana(fecha){
        let diaDeLaSemana = fecha.getDay();
        return diaDeLaSemana;
    }
    
    static obtenerCantidadDiasDelMes(fecha){
        let mes  = fecha.getMonth();
        if(mes === 0 || mes === 2 || mes === 4 || mes === 6 || mes === 7 || mes === 9 || mes ===11){
            return 31;
        }
        if(mes === 1){
            return 28;
        }
        else 
            return 30;
    }
    static esViernes(fecha){
        if(this.obtenerDiaDeSemana(fecha) === 5)
        {
            return true;
        }
        else{
            return false;
        }
    }
    static empezarNuevoMes(fecha) {
        if (this.obtenerCantidadDiasDelMes(fecha)===fecha.getDate()){
            fecha.setMonth(fecha.getMonth()+1);
            fecha.setDate(1);
        }
        return fecha;
    }
    
    static esFinDeMes(fecha) {
        if (this.obtenerCantidadDiasDelMes(fecha)===fecha.getDate()){
            return true;
        }
        return false;
    }
}

module.exports = { CalculadoraDeFecha };