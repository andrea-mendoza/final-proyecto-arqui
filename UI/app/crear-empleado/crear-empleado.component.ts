import { Component, OnInit, Input } from '@angular/core';
import { Empleados } from '../models/mock-empleados';
import { Empleado } from '../models/empleado';
import { HttpClient } from '@angular/common/http';
import { Notificacion } from '../models/notificacion';
import { MetodoDePago } from '../models/metodoDePago';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css'],
})
export class CrearEmpleadoComponent implements OnInit {
  
  empleados = Empleados;
  empleado: Empleado= new Empleado();
  metodoDePago: MetodoDePago = new MetodoDePago();
  nrSelect = 'salarioFijo';
  id= 4; 


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
  @Input() sindicatoChecked = false;
  fecha: Date;
  
  esSalarioFijo() {
   this.nrSelect = 'salarioFijo';
  }
  esSalarioPorHora() {
     this.nrSelect = 'salarioPorHora';
  }
  esSalarioPorComision() {
    this.nrSelect = 'salarioPorComision';
  }
  constructor(private http: HttpClient,private router: Router) {
    let fecha =new Date();
    this.empleado.fechaDeCreacion = fecha;
  
  }
  
  ngOnInit() {
    
  }
  onSubmit(){

    if(this.nrSelect==='salarioFijo'){
      this.empleado.tipoDeEmpleado = "fijo";
    }
    if(this.nrSelect==='salarioPorHora'){
      this.empleado.tipoDeEmpleado = "hora";
    }
    if(this.nrSelect==='salarioPorComision'){
      this.empleado.tipoDeEmpleado = "comision";
    }
    this.empleado.id=this.id;
    this.empleados.push(this.empleado);
    this.id++;
   
    
    if(this.tipoDePago==="efectivo")
    this.metodoDePago.tipoDePago='efectivo';

    if(this.tipoDePago==="cheque"){
      this.metodoDePago.tipoDePago='cheque';
     
    }
    if(this.tipoDePago==="transferenciaBancaria")
    {
      this.metodoDePago.tipoDePago='transferenciaBancaria';      
    }
    this.empleado.metodoDePago=this.metodoDePago;
    
    this.http.post(`http://localhost:7000/nuevo-empleado`,this.empleado)
    .subscribe(
      (data:any) => {
        console.log(data);
         
      }
    )
    this.router.navigateByUrl('/');
  }
}
