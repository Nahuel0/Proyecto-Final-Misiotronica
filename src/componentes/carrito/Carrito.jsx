import { useEffect, useState } from 'react';
import './carrito.css'



export default function Carrito(props){
    const [verCarrito,setVerCarrito] = useState(false);
    const [todosProductos,setTodosProductos] = useState([]);
    let pdtos = props.productos;
    const [indexProductosEliminados,setIndexProductosEliminados] = useState([]);
    

    const viewCarrito = ()=>{
        setVerCarrito(!verCarrito);
    
    }
    
    const actualizarCarrito = ()=>{
        if(indexProductosEliminados.length>-1){
            
            pdtos = pdtos.filter((d,i) => !indexProductosEliminados.find((c)=> (c==i)), [] );
            setTodosProductos(pdtos);
        }else{
            setTodosProductos(pdtos);
        }
    }
    
    
    let precio = 0;
    const totalPrecio = ()=>{
        
       // ================================================= VER COMO SE HACE =================================================
        todosProductos.map(
            (p)=> precio += p.getPrecio
        ); 
        console.log(precio);
        return precio;
    }



    
    //======================Body==========================================
   
    //Se le agrega una clase al body para no poder hacer scroll
    let seagregoScroll = false;
    
    let body = document.getElementsByTagName('body')[0];
    
    if(verCarrito && !seagregoScroll){ 
        body.className=" scroll" 
        seagregoScroll = true
    }
    else{
        body.className = "";
    }


    const eliminarProductoCarrito = (id)=>{
        setTodosProductos(
            todosProductos.filter( 
                (t,i)=>i!= id 
            )
        );

                // Cuando se elimina un producto del carrito guardamos la posicion que proviene de props
                //Asi cuado agregamos otro, no se superponen las posiciones
            let aux = props.productos;
            indexProductosEliminados.push(pdtos.indexOf(todosProductos[id]));
            setIndexProductosEliminados(indexProductosEliminados);
        
    }


    return (
        <div className='content-carrito'>
            
               
                <button className={!verCarrito ? "boton-carrito" : "ocultar-carrito"} onClick={()=>{viewCarrito();actualizarCarrito();}}>
                    <img src={process.env.PUBLIC_URL+"/imagenes/icon/carrito-compras.png"} alt="Carrito de compras" id='img-carrito'/>
                </button>
            
            <div className=  {!verCarrito ? "ocultar-carrito" : "mostrar-carrito scroll"}>
                <div className='cont-close-precio'>
                    <p>Precio : {totalPrecio()}</p>
                    <button className='boton-cerrar' onClick={()=>{viewCarrito()}}>
                        <img className='cerrar-carrito-img' src={process.env.PUBLIC_URL+"/imagenes/icon/boton-eliminar.png"} alt='cerrar el carrito de compras'/>
                    </button>
                </div>
                <div className='cont-carrito-productos'>
                    {   
                        !todosProductos.length ? 
                            <div className='cont-empty'>
                                <h4>Carrito Vacio!</h4>
                                
                                <a className='a-url-tienda' href="http://localhost:3000/tienda">Compra Aqui!</a>
                                </div> 
                        : 
                           todosProductos.map(
                                    (producto,i)=>(
                                        <div className='cont-producto-boton' key={i}>                                          
                                            <div className='unidad-producto-view'>
                                                {producto}
                                            </div>
                                            <button className='boton-eliminar-del-carrito' onClick={()=>eliminarProductoCarrito(i)}>
                                               <p>Eliminar < br/> Producto</p>
                                            </button>
                                        </div>  
                                    )
                            )
                                
                            
                    }

                </div>
                <button className={!todosProductos.length ? "ocultar-boton-finalizar" : "boton-finalizar-compra"}>Finalizar Compra</button>
                
            </div>
            
        </div>
    )
}