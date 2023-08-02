import './carrito.css'



export default function Carrito(){
    return (
        <div className='content-carrito'>
            
            <div>
                
            </div>
            <button className='boton-carrito'>
                <img src={process.env.PUBLIC_URL+"/imagenes/icon/carrito-compras.png"} alt="Carrito de compras" id='img-carrito'/>
            </button>
            
        </div>
    )
}