class Clienteservice{
    Cliente={};
    listado=[];
    
    constructor(){
    this.listado=[
    
        {nombre:"Estiven",usuario:"estiven",password:"123"},
        {nombre:"Juan",usuario:"juan",password:"321"}
    ]
    
    
    }
    validar(usuario,password){
    
        for (const unCliente of this.listado) {
            if ( unCliente.usuario==usuario&&unCliente.password==password){
                this.Cliente=unCliente;
                break
            }else{
                this.Cliente={}
            }
        }
    }
    obtenerCliente(){
        return this.Cliente;
    }
    
    }export default new Clienteservice();