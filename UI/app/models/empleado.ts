import { Notificacion } from './notificacion';
import { MetodoDePago } from './metodoDePago';

export class Empleado {
    id: number;
    nombre: string;
    salario: number;
    ci: string;
    precioDeLaHora: number;
    salarioBase: number;
    porcentajeDeComision: number;
    fechaDeCreacion: Date;
    esDelSindicato: boolean;
    tipoDeEmpleado: string;
    correo:any;
    celular:any;
    metodoDePago: MetodoDePago;
  };