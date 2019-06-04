import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { ListaDeEmpleadosComponent } from './lista-de-empleados/lista-de-empleados.component';
import { GeneradorDeBoletasComponent } from './generador-de-boletas/generador-de-boletas.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'index',component:MainComponent},
  {path:'nuevo-empleado',component:CrearEmpleadoComponent},
  {path:'listar-empleados',component:ListaDeEmpleadosComponent},
  {path: 'generar-boletas',component:GeneradorDeBoletasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
