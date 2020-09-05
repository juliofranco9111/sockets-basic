
var socket = io();

//establecer conexion activo-activo
//saber cuando el servidor está online
socket.on('connect', function () {
   console.log('Connected on server');
})

//saber cuando se desconecta
socket.on('disconnect', function () {
   console.log('Server connection fail');
})

//on escucha informacion

//Emit envia informacion
socket.emit('enviarMensaje', {
   usuario: 'Julio',
   mensaje: 'Hola mundo'
}, function (resp) {
   console.log('Respuesta server: ', resp)
});

//Escuchar informacion---mensaje es el parametro que se puede llamar de cualquier forma
socket.on('enviarMensaje', function (mensaje) {
   console.log('Servidor: ', mensaje)
});


