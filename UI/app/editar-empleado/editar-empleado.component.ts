import { OnInit, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EditarEmpleadoComponent],
  exports: [EditarEmpleadoComponent]
})
export class EditarEmpleadoComponent implements OnInit {
  @Input() emailChecked = false;
  @Input() facebookChecked = false;
  @Input() whatsappChecked = false;
  @Input() smsChecked = false;
  tipoDeNotificacionElegida;
  metodoDePago={
    numeroDeCuenta:"",
    nombreDelBanco:""
  } 
  notificacion={
    correoElectronico:"",
    numeroDeTelefono:""

  }
  tipoDePago = 'efectivo';
  esEfectivo() {
   this.tipoDePago = 'efectivo';
  }
  esCheque() {
     this.tipoDePago = 'cheque';
  }
  esTransfBancaria() {
    this.tipoDePago = 'transferenciaBancaria';
  }
 

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    if(this.emailChecked){
      this.tipoDeNotificacionElegida ='email';
      console.log("tipo: " + this.tipoDeNotificacionElegida);
      console.log("email: " + this.notificacion.correoElectronico);

    }
    if(this.facebookChecked){
      this.tipoDeNotificacionElegida ='facebook';
      console.log("tipo: " + this.tipoDeNotificacionElegida);
    }
    if(this.smsChecked){
      this.tipoDeNotificacionElegida ='sms';
      console.log("tipo: " + this.tipoDeNotificacionElegida);
      console.log("Telefono: " + this.notificacion.numeroDeTelefono);

    }
    if(this.whatsappChecked){
      this.tipoDeNotificacionElegida ='whatsapp';
      console.log("tipo: " + this.tipoDeNotificacionElegida);
      console.log("telefono: " + this.notificacion.numeroDeTelefono);

    }
    if(this.tipoDePago==="efectivo")
    console.log("efectivo");

    if(this.tipoDePago==="cheque")
    console.log("cheque");
    if(this.tipoDePago==="transferenciaBancaria")
    {
      console.log("nombre del banco: " + this.metodoDePago.nombreDelBanco);
      console.log("numero de cuenta: " + this.metodoDePago.numeroDeCuenta);
      
    }

  }
}
