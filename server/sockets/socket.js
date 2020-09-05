const { io } = require('../server')



io.on('connection', (client)=>{
   //se configura la conexion activo-activo en el server
   //el parametro que recibe el arrow es el client
   console.log('user connected');

   client.emit('enviarMensaje',{
       usuario: 'administrador',
       mensaje: 'bienvenido a esta aplicacion'
   })




   //Saber cuando el usuario se desconecta
   client.on('disconnect', ()=>{
       console.log('User disconnected')
   });

   //Escuchar mensaje (emit) del cliente, el parametro que recibe el arrow el lo que se emite
   client.on('enviarMensaje',(data, callback)=>{
       console.log(data);
    //broadcast es para emitir a todos los usuarios
       client.broadcast.emit('enviarMensaje', data);

       /* if(mensaje.usuario){

           callback({
               resp: 'Todo salió bien'
           });
       }else{
           callback({
               resp: 'Todo salió MAL'
           });
       }
 */

   })


})