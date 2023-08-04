import { useState } from 'react';
import Producto from '../productos/Producto';
import './carrito.css'



export default function Carrito(props){
    const [verCarrito,setVerCarrito] = useState(false);
    
    const viewCarrito = ()=>{
        setVerCarrito(!verCarrito)
    }
    return (
        <div className='content-carrito'>
            
            <div className=  {!verCarrito ? "ocultar-carrito" : "mostrar-carrito"}>
                <button className='boton-cerrar' onClick={()=>{viewCarrito()}}>X</button>
                <div className='cont-carrito-productos'>
                    {   
                        !props.productos.length ? 
                            <div className='cont-empty'>
                                <h4>Carrito Vacio!</h4>
                                
                                <a className='a-url-tienda' href="http://localhost:3000/tienda">Compra Aqui!</a>
                                </div> 
                        : 
                            props.productos.map(
                                (producto)=>producto
                                )
                    }
                </div>
            </div>
            <button className={!verCarrito ? "boton-carrito" : "ocultar-carrito"} onClick={()=>{viewCarrito()}}>
                <img src={process.env.PUBLIC_URL+"/imagenes/icon/carrito-compras.png"} alt="Carrito de compras" id='img-carrito'/>
            </button>
            
        </div>
    )
}