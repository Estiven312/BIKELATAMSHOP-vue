
<template>
 
<div  id="nav">
  <h1 id="tittle" > BIKELATAMSHOP </h1>
   <!--   <router-link id="i"  to="/">Inicio</router-link>      |-->
  <!-- <router-link id="i"  to="/about">Productos</router-link>    | |-->
   
   <!-- <router-link id="i"  to="/Contacto">Contacto</router-link>    | |-->
  <!-- <router-link id="i"  to="/Pedidos">Pedidos</router-link>! |-->
  </div>
  <router-view/>
 
  <main id="formulario">
    <h1>Inicio de sesión</h1>
    <form action="" id="form">
    <label for="nombre"  id="x"> Usuario:</label>
      <input type="text" v-model="usuario"   id="c">
      <br><br>
      <label for="password" id="cx">Contraseña:</label>
      <input type="password" v-model="password" id="xc">
      <br>
      <button id="but" @click.prevent="iniciar" >Iniciar Sesión</button>
    </form>
    <h2>{{error}}</h2>
    </main>  
</template>
<script>

import Clienteservice from "@/services/login.js";

export default {
 
methods: {
  iniciar(){

    Clienteservice.validar(this.usuario,this.password);

    this.cliente=Clienteservice.obtenerCliente();
  if(this.cliente.nombre){
    this.$router.push('../views/about');
  


  }else{
    this.error="Datos invalidos";
  }
  
  }
},

data() {
  return {
    usuario:"",
    password:"",
    cliente:{},
    error:""
  }
},

}
</script>









<style>


#formulario{
  text-align: center;
  color: rgb(240, 11, 87);
  letter-spacing: 4px;
  word-spacing: 30px;

}
#form{
 color: rgb(240, 11, 87);
  letter-spacing: 4px;
  word-spacing: 30px;
}
#usuario{
  color: chartreuse;
letter-spacing: 1px;


}

#but {
     background-color: #4CAF50; /* Green */
  
    padding: 15px 32px;
    text-align: center;
    
    font-size: 16px;

 position: absolute;
top: 550px; left:620px

}

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
  width: 100%; height: 700px;
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

#x{
   position: absolute;
top: 400px; left: 500px

}
#c{
 position: absolute;
top: 400px; left: 620px
}
#cx{
   position: absolute;
top: 480px; left: 460px
}
#xc{
 position: absolute;
top: 480px; left: 620px
}

</style>
