import { Component, OnInit, Input } from '@angular/core';
import { Boletas } from '../models/mock-boletas';
import { Empleado } from '../models/empleado';
import { Boleta } from '../models/boleta';

@Component({
  selector: 'app-generador-de-boletas',
  templateUrl: './generador-de-boletas.component.html',
  styleUrls: ['./generador-de-boletas.component.css']
})
export class GeneradorDeBoletasComponent implements OnInit {
  boletas = Boletas;
  boleta:Boleta;
  empleados=Empleado;
  enviado=false;
  constructor() { }
  
enviarNotificacion(){
 this.enviado=true;

 this.boletas.forEach(function(boleta){
  let notificacion:string ="";

   if(boleta.emailChecked){
     notificacion=notificacion+"email ";
   }
   if(boleta.facebookChecked){
    notificacion=notificacion+"facebook ";
    }
    if(boleta.whatsappChecked){
      notificacion=notificacion+"whatsapp ";
    }
    if(boleta.smsChecked){
      notificacion=notificacion+"sms ";
    }
    boleta.notificacion=notificacion;
 });
}
  ngOnInit() {
  }

}
