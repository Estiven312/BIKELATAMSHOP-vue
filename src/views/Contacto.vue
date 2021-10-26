<template>
    
<div  id="nav">
   <h1 id="tittle" > BIKELATAMSHOP </h1>
   <!--   <router-link id="i"  to="/">Inicio</router-link>      |-->
   <router-link id="i"  to="/about">Productos</router-link>    | |
   
   <router-link id="i"  to="/Contacto">Contacto</router-link>    | |
   <router-link id="i"  to="/Pedidos">Pedidos</router-link> | |
   <router-link id="i"  to="/compra">Compra</router-link> | |
   
   
   <router-link to="http://192.168.1.8:8080/" >Cerrar Sesión</router-link>
  

  </div>

 


    <head>
 <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
 </head>
  <body class="bg-white grid grid-cols-12 md\:bg-black lg\:bg-gray-100 gap-03  mx-auto" style="font-size: 15px;" >

  

   <aside style="background-image: url(https://www.3ss.com.pe/images/contactenos.jpg ) ;"
    class="col-span-6  ">
      <h1 class="text-blacks text-4xl gap-5 col-span-1">
         Contáctenos
      </h1>
         <br><br>
      <h2 class="text-justify text-black text-1xl  mx-auto">
         En BikeShopLatam queremos brindarte una mejor atención. 
         A través de este canal atenderemos oportunamente tus inquietudes, recibiremos tus opiniones y/o comentarios sobre nuestros servicios, o también
          puedes consultar por los productos que estamos en capacidad de ofrecerte.
          </h2>
   </aside>

   <main class="bg-white  border-8 border-white col-span-6 leading-8 " >
      
      

   <div class="formulario lg">
      <form action="#">

        <label for="tramite">TRAMITE</label>


         <select required name="tramite" id="" class="border-2" v-model="tramite">
            <option value="-1"></option>
            <option value="1">Sugerencias</option>
            <option value="2">Quejas o reclamos</option>
            <option value="3">Información</option>
         </select>
        <br><br>

     <label  for="Nombre" >NOMBRE Y APELLIDOS: </label>
     <input v-model="informacion.nombre" class="border-2"  required type="text" name="nombre_apellidos" placeholder="Escribe nombre y apellidos">
  
<br><br>

    <label for="Tipo_Documento">TIPO DE DOCUMENTO:</label>
    <select required name="documento" id="" class="border-2" v-model="tipoDocumento">
      <option value="0"></option>
      <option value="1">Cédula de Ciudadania</option>
      <option value="2">Cédula de Extranjería</option>
      <option value="3">Número de Identificación Tribuaria</option>
      <option value="4">Tarjeta de Identidad</option>
    </select>
   
      <br><br>
    <label   for="numero de documento">NÚMERO DE DOCUMENTO:</label>
    <input  required type="number" name="numero_documento" class="border-2" v-model="informacion.documento">
      <br><br>
     <label   for="text">CORREO ELECTRÓNICO:  </label>
     <input required type="Email" name="Email" placeholder="Escribe tu Email" class="border-2" v-model="informacion.correoElectronico">
    <br><br>
     <label for="numero-telefono">NÚMERO DE TELEFONO(opcional):</label>
     <input class="border-2" type="number" name="telefono" placeholder="Escribe tu numero telefonico"  v-model="informacion.numeroTelefono" >
     <br><br>
     <label for="Mensaje"   > TU MENSAJE:    </label>
     <textarea  class="border-2 " name="Mensaje" id="" cols="30" rows="2" placeholder="Escribe tu mensaje" v-model="informacion.mensaje" ></textarea>
    <br><br>
     <input  class="invisible   " type="submit" name="ENVIAR" value="Enviar" >  
     <button @click="procesarInformacion()" type="button" class="border-4 border-blue-500 text-center bg-blue-400" >ENVIAR</button>
     
     </form>
     </div>
     </main>

     <footer    class=" bg-green col-span-2 bg-white text-right" >
      
     </footer>
     >
</body>
</template>
<script>
import { pushScopeId } from '@vue/runtime-core';
export default {
data(){
   return{
      informacion:{
       
           
         t_tramite:"",
         nombre:"",
         t_Documento:"",
         documento:0,
         correoElectronico:"",
         numeroTelefono:0,
         mensaje:"",
      },
      listaTramite:["Sugerencias","Quejas o reclamos","Información"],
      lista_T_Documento:["Cédula de Ciudadania","Cédula de Extranjería","Número de Identificación Tribuaria","Tarjeta de Identidad"],
      listaInformacion:[],

      tramite:0,
      tipoDocumento:0


   };
},
methods: {
  procesarInformacion() {
     this.informacion.t_tramite=this.listaTramite[this.tramite],
      this.informacion.t_Documento=this.lista_T_Documento[this.tipoDocumento],
      
      this.listaInformacion.push(this.informacion);
      console.log(this.informacion)



      if (this.tramite>=1 && this.tramite<=3){
         window.alert("Tu información esta siendo guardaba gracias por comunicarte")
      }else{
         null
      }
  },
  
},
  
  
}
</script>
<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-size: cover;
  background-image: url(https://image.winudf.com/v2/image1/Y29tLmJpa2UubW91bnRhaW5iaWtlLmRvd25oaWxsbW91bnRhaW5iaWtld2FsbHBhcGVyX3NjcmVlbl8wXzE1NTQwNjE5NzhfMDQ4/screen-0.jpg?fakeurl=1&type=.jpg);
  width: 100%; height: 300px;
  padding: 5px;
}

#nav a {
  font-weight: bold;
  color: #dd460a;
}
#tittle{
color: #ee8208;
padding: 40px;
font-size: 50px;
}
#i{
font-size: 20px;
padding: 80px;
}

#nav a.router-link-exact-active {
  color: #32bb39;
}
</style>