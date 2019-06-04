
class RepositorioJSON{
    static descargarDatos(datos, nombreDeArchivo){
        let json = JSON.stringify(datos);
        let fs = require('fs');
        const callback = (err, res) => ("Error: ", err, "Result: ", res);
        fs.writeFile(nombreDeArchivo+'.json', json, 'utf8', callback);
    }

    static cargarDatos(nombreDeArchivo){
        let fs = require('fs');
        let rawdata = fs.readFileSync(`${__dirname}/empleados.json`);
        let datosFinal = JSON.parse(rawdata);  

        return datosFinal;
    }
}

class RepositorioDeEmpleadoEnJSON{

    constructor(){
        this.listaDeEmpleados = this.cargarDatos();
    }

    guardar(nuevoEmpleado){
        this.listaDeEmpleados.push(nuevoEmpleado);
    }

    obtener(empleadoId){
        let empleado = null;
        for(let i = 0;i<this.listaDeEmpleados;i++){
            if(empleadoId == this.listaDeEmpleados[i].id){
                empleado = this.listaDeEmpleados[i];
            }
        }
        return empleado;
    }

    descargarDatos(){
        RepositorioJSON.descargarDatos(this.listaDeEmpleados,"empleados");
    }

    cargarDatos(){
        let datos = RepositorioJSON.cargarDatos("empleados");
        return datos;
    }

    obtenerTodos(){
        return this.listaDeEmpleados;
    }
}

class AlmacenarDatosDeBoletas{

    constructor(){
        this.listaDeBoletas = this.cargarDatos();
    }

    guardar(nuevaBoleta){
        this.listaDeBoletas.push(nuevaBoleta);
    }

    descargarDatos(){
        RepositorioJSON.descargarDatos(this.listaDeBoletas,"boletas");
    }

    cargarDatos(){
        let datos = RepositorioJSON.cargarDatos("boletas");
        return datos;
    }

    obtenerTodos(){
        return this.listaDeBoletas;
    }
}

module.exports = { RepositorioDeEmpleadoEnJSON, RepositorioJSON, AlmacenarDatosDeBoletas };