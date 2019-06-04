const GeneradorDeBoleta = require("../../LogicaDeLaAplicacion/CasosDeUso/GeneradorDeBoleta");

const RepositorioDeEmpleado = require("../../LogicaDeLaAplicacion/Repositorio/RepositorioDeEmpleado").RepositorioDeEmpleado;
const RepositorioDeEmpleadoEnJSON = require("../Almacenamiento/RepositorioJSON").RepositorioDeEmpleadoEnJSON;
const PresentadorBoundary = require("../Presentadores/PresentadorBoundary").PresentadorBoundary;
const EmpleadoPresentador = require("../Presentadores/EmpleadoPresentador").EmpleadoPresentador;
const EmpleadoControlador = require("../Controladores/EmpleadoControlador").EmpleadoControlador;

const express=require("express");
const app=express();
var cors = require('cors');
app.use(cors());
var  bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended:true
}));

var jsonQuery=require('json-query');

var corsOptions = {
    origin: 'http://localhost:4200'
}

const repositorioDeEmpleado = new RepositorioDeEmpleado(new RepositorioDeEmpleadoEnJSON());
const controladorEmpleado = new EmpleadoControlador();

app.post('/nuevo-empleado', cors(corsOptions),function(req,res){

    const presentador = new PresentadorBoundary(new EmpleadoPresentador());
    const datosEmpleado = presentador.obtenerEmpleado(req.body);

    controladorEmpleado.crearEmpleado(datosEmpleado,repositorioDeEmpleado);
});

app.get('/lista-empleados',function(req,res){

    const listaDeEmpleados = controladorEmpleado.listarTodosLosEmpleados(repositorioDeEmpleado);

    res.send(listaDeEmpleados);
});

app.get('/boletas',function(req,res){

    const generadorDeBoletas = new GeneradorDeBoleta();

    const listaDeEmpleados = controladorEmpleado.listarTodosLosEmpleados(repositorioDeEmpleado);
    const boletas = generadorDeBoletas.generarBoletasDePago(listaDeEmpleados,"Fri Apr 05 2019");

    res.send(boletas);
});

app.get('/enviar-notificacion/',function(req,res){

    const notificacion = new Notification();
    const notificaciones = req.body;

    controladorEmpleado.enviarNotificacion(notificacion,tipoDeNotificacion);

    res.send("ok");
});


app.listen(7000);



