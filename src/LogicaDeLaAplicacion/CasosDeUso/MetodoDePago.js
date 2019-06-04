    export class PagoPorCheque{
    constructor(empleado){
        this.empleado=empleado;
    }
    pagar(){
        return this.emitirCheque();
    }

    emitirCheque(){
        let cheque;
        if(this.empleado.esDelSindicato===true){
            cheque = "Se precisa pagar a: " + this.empleado.obtenerNombre() + "    ";
            cheque = cheque + "la suma de: " + (this.empleado.obtenerSueldo()) + "     ";
        }
        else{
            cheque = "Se precisa pagar a: " + this.empleado.obtenerNombre() + "    ";
            cheque = cheque + "la suma de: " + (this.empleado.obtenerSueldo()) + "     ";
        }
        return cheque;
    }
}
export class PagoPorTransefernciaBancaria{
    constructor(empleado){
        this.empleado=empleado;
    }
    pagar(){
        return this.depositarEnElBanco();
    }
    depositarEnElBanco(){
        if(this.empleado.esDelSindicato===true)
        return "Se realizo un descuento de "+ this.inscripcionAlSindicato+" bs por su inscripcion mensual al sindicato. Se realizo el deposito de: "+ (this.empleado.obtenerSueldo()) +" a la cuenta numero "+this.empleado.obtenerNumeroDeCuenta();
        else
            return "Se realizo el deposito de: "+ (this.empleado.obtenerSueldo()) +" a la cuenta numero "+this.empleado.obtenerNumeroDeCuenta();
    }

}

export class PagoEnEfectivo {
    constructor(empleado) {
        this.empleado = empleado;
    }
    pagar(){
        return this.pagarEnEfectivo();
    }
    pagarEnEfectivo() {
        if(this.empleado.esDelSindicato===true)
            return "Se realizo un descuento a su sueldo por la inscripcion mensual al sindicato. Por favor retirar la suma de " + (this.empleado.obtenerSueldo()) + " bs en caja";
        else
            return "Por favor retirar la suma de " + (this.empleado.obtenerSueldo()) + " bs en caja";

    }
}
