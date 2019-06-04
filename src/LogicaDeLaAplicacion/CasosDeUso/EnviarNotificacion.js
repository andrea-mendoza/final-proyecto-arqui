class EnviarNotificacion {
    constructor(empleado) {
        this.empleado = empleado;
    }

    enviarNotificacion(notificacion,tipoDeNotificacion){
        this.empleado.enviarNotificacion(notificacion,tipoDeNotificacion);
    }
}

module.exports = { EnviarNotificacion };