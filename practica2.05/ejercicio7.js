//Función que crea un objeto cliente y muestra el servidor.
function persona(nombre,apellidos,telefono,email,codigoPostal){
   var cliente={
    nombre:nombre,
    apellidos:apellidos,
    telefono:telefono,
    email:email,
    codigoPostal:codigoPostal,
    servidor: function() {
       for (var i = 0; i < email.length; i++) {
         
         if (email[i] == '@') {
             console.log(email.substring(i+1));
          }
       }
    }
   };
   return cliente;
}
var persona1=persona("Paco","Martinez Soria",632123123,"soytugatita@gmail.com",03510);
persona1.servidor();
