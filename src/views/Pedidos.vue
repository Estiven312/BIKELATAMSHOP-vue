<template >
  <div  id="nav">
   <h1 id="tittle" > BIKELATAMSHOP </h1>
   <!--   <router-link id="i"  to="/">Inicio</router-link>      |-->
   <router-link id="i"  to="/about">Productos</router-link>    | |
   
   <router-link id="i"  to="/Contacto">Contacto</router-link>    | |
   <router-link id="i"  to="/Pedidos">Pedidos</router-link>! | |
   <router-link to="http://192.168.1.6:8080/" >Cerrar Sesión</router-link>
   
  </div>


 <main id="formulario">
    <h1>Compra
    </h1>



    <form action="" id="form_compra"  >


    <label for="nombre"  id="a"> Nombre:</label>
      <input type="text" v-model="Nombre"   id="usuario">
      <br><br>

     
 
      
       <label for="nombre"  id="ap"> Apellidos:</label>
      <input type="text" v-model="p_n"   id="apellido">
      <br><br>
        
      
        
          
          <input type="number " name="cantidad_biciletas" id="can" placeholder="Cantidad" v-model="cantidad">
    <br>
   

    <label for="producto" id="q">productos</label>
    <select name="productos" id="w" v-model="seleccion">
    <option value="-1">Selecione un producto</option>
    <option value="0">Bicicleta de montaña NAKXUS Explorer</option>
    <option value="1">Bicicleta de Carreras Specialized</option>
    <option value="2">Bicicleta BMX WeThePeople Arcade</option>
    <option value="2">Sillin Fabric Line</option>
    <option value="3">Neumatico Vittoria Cubierta MTB Mezcal</option>
    <option value="4">Casco Specialized S-Works Evade ANGi</option>
    <option value="5">Casco POC Ventral SPIN</option>
    <option value="6">Gafas Fotocromáticas Rockbros</option>
    <option value="7">Guantes Firelion MTB</option>
    <option  v-for="unaCompra, llave in listaProductos" v-bind:key="llave"  v-bind:value="llave"></option>
    </select>



   

      

       <button id="butt" type="button" @click:prevent="procesar">Realizar compra</button>
    
        
    
        <br>
      <br>


      <div id="table">
            <h2>Listado de Compras</h2>
              <table border="1"  >
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
            
                </tr>
            </thead>
            <tbody id="datos_compr">
            <tr  >
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
               
                
            
            
            
            </tr>
         
         

            </tbody>
        </table>
        </div>
    


    
     
      
    </form>
    
    </main>  




</template>


<script>

export default {

  mounted(){

             Producto1={"Nombre":"","Precio":0};
             Producto2={"Nombre":"Bicicleta de montaña NAKXUS Explorer","Precio":205000};
             Producto3={"Nombre":"Bicicleta de Carreras Specialized","Precio":250000};
             Producto4={"Nombre":"Bicicleta BMX WeThePeople Arcade","Precio":80050};
             Producto5={"Nombre":"Neumatico Vittoria Cubierta MTB Mezcal","Precio":300000};
             Producto6={"Nombre":"Sillin Fabric Line","Precio":200000};
             Producto7={"Nombre":"Casco Specialized S-Works Evade ANGi","Precio":400000};
             Producto8={"Nombre":"Casco POC Ventral SPIN","Precio":500000};
             Producto9={"Nombre":"Gafas Fotocromáticas Rockbros","Precio":500050};    
            Producto10={"Nombre":"Guantes Firelion MTB","Precio":20000};

          listaProductos=[Producto1,Producto2,Producto3,Producto4,Producto5,Producto6,Producto7,Producto8,Producto9,Producto10];



      },


  data(){
      return{
        listaProductos:[],
       
          compra:{
    Nombre:"",
    Apellidos:"",
    Productos:{},
    Cantidad:0,
    total:0,
      }, 
      seleccion:1,
     
      nombre:"",
      p_n:"",
      cantidad:1,
      
      listaCompras:[],
     producto_nombre:""
     
     };
    },


     methods: {
        limpiarFormulario(){
          this.compra={
            Nombre:"",
            Apellidos:"",
            Productos:{},
            Cantidad:0,
            total:0

          };
          seleccion=-1;
        },


      procesar(){
        this.compra.Cantidad=0;
        this.compra.total=0;

       this.compra.Nombre=this.nombre;


        this.compra.Apellidos=this.p_n;
        this.compra.Productos=this.listaProductos[seleccion];
        this.compra.Cantidad=this.cantidad;
        this.compra.total=this.compra.Productos.Precio*this.compra.Cantidad;

      this.listaCompras.push(this.compra);
       
    },
}

  
}
</script>
<style scoped> 
#datos_compra{
  position: absolute;
top: 820px; left: 80px;
}
#table{

   position: absolute;
top: 800px; left: 80px;
}

#a{
  position: absolute;
top: 400px; left: 80px;
}

#usuario{
 position: absolute;
top: 400px; left: 200px;
}
#ap{
 position: absolute;
top: 450px; left: 80px;
}
#apellido{ position: absolute;
top: 450px; left: 200px;

}






#q{
  position: absolute;
top: 500px; left: 80px;
}
#w{
  position: absolute;
top: 500px; left: 200px;
}
#can{
  position: absolute;
top: 500px; left: 500px;

}






#butt{
  background: cadetblue;
   position: absolute;
top: 750px; left: 720px

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






