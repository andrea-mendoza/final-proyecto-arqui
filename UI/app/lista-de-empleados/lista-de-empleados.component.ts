import { Component, OnInit, Input } from '@angular/core';
import { Empleados } from '../models/mock-empleados';
import { Empleado } from '../models/empleado';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-de-empleados',
  templateUrl: './lista-de-empleados.component.html',
  styleUrls: ['./lista-de-empleados.component.css']
})
export class ListaDeEmpleadosComponent implements OnInit {
  panelOpenState = false;
  empleados;
  tipoDeNotificacionElegida;
  empleadoSeleccionado: Empleado;
  constructor(private httpClient: HttpClient) { }
  getTipo(empleadoSeleccionado){
    if(empleadoSeleccionado.calculadoraDeSalario.salario!=null){
      return "salarioFijo"
    }
    if(empleadoSeleccionado.calculadoraDeSalario.salarioPorHora!=null){
      return "salarioPorHora"
    }
    if(empleadoSeleccionado.calculadoraDeSalario.salarioBase!=null){
      return "salarioPorComision"
    }
    if(empleadoSeleccionado.calculadoraDeSalario.porcentajeDeComision!=null){
      return "salarioPorComision"
    }
  }
  ngOnInit() {
    this.httpClient.get('http://localhost:7000/lista-empleados').subscribe((res : any[])=>{
        console.log(res);
        this.empleados = res;
    });
  }

}
