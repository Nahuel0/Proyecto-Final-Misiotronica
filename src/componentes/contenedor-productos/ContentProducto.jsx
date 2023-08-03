import Producto from "../productos/Producto";
import dataImagen from "../../productoJson/productos.json"
import "./contentProductos.css"
import { useEffect, useState } from "react";
import Carrito from "../carrito/Carrito";

//Definimos el slice



export default function ContentProducto(){  
 
    const [expandir,setExpandir] = useState(false);

    
    const expandirTodo = ()=>{
        setExpandir(!expandir);
    }


    //================= SEARCH =======================
        //Hokss
        const [productos,setProductos ] = useState([]);
        const [search,setSearch] = useState("");

        //Funcion para traer los datos
        const showData =  ()=>{
            
            setProductos(dataImagen);
        
    };

    //Funcion de busqueda
        const searcher = (e)=>{
        setSearch(e.target.value);
        }

        //metodo de filtrado
        let resultado =[];
        if(!search){
        resultado = productos;
        }else{
            resultado = productos.filter( (dato) => 
            dato.tipo[0].nombre.toLowerCase().includes(search.toLocaleLowerCase())
        
            )
        }

        //Effect
        useEffect(()=>{
            showData()
        },[])

    //================================================

    //================== Opciones del carrito =================================
    const [contenidoCarrito,setContenidoCarrito] = useState([]);
    const p = [];
    const addCarrito= (producto)=>{
        p.push(producto);
    }

    useEffect(()=>{

    },[])

    return(
        <section className="section-cont-producto">
            {/* Carrito */}
            <Carrito/>


            <h2>Algunos de nuestros Productos</h2>
            {/* Boton de expandir todos los productos */}
            <button name="ventas" className="boton-mostrar-todo" onClick={expandirTodo}>{!expandir?"Ver Todo":"Ocultar"}</button>
            {/* Input para buscar automatico */}
            <input value={search} onChange={searcher} type="text" placeholder="Buscar Productos" className="search"/>

            <div className={!expandir ?"cont-parcial-productos" : "ocultar-producto"}>
                {resultado.map(
                    (producto)=>
                        <div className="cont-producto" key={producto.id}>
                                <Producto 
                                    key = {producto.id}
                                    nombre={producto.tipo[0].nombre}
                                    url={producto.tipo[0].url}
                                    cantidad = {producto.tipo[0].cantidad}
                                    class="img-ventas"
                                />
                            
                            <div className="content-precio-compra">
                                <p className="precio-producto">$ {producto.tipo[0].precio}</p>   
                                <button className="boton-comprar" onClick={addCarrito(producto.tipo[0])}>Comprar</button>
                            </div> 
                        </div>
                        
                    
                )}
            </div>

            <div className={expandir ? "cont-total-producto" :"ocultar-producto"}>
                    {
                        resultado.map(
                            (producto) =>
                                        <div key={producto.id} className="cont-producto-seleccionados">
                                            <h4 className="titulo-producto-seleccionado">{producto.nombre}</h4>   
                                            <div className="cont-producto-row"> 
                                            {
                                                producto.tipo.map(
                                                    (unidad)=> 
                                                        <div className="cont-producto" key={unidad.id}>
                                                                <Producto
                                                                    key={unidad.id}
                                                                    nombre={unidad.nombre}
                                                                    url={unidad.url}
                                                                    precio={unidad.precio}
                                                                    cantidad = {producto.tipo[0].cantidad}
                                                                    class="img-ventas-all"
                                                                />
                                                            
                                                                <div className="content-precio-compra">
                                                                    <p className="precio-producto">$ {unidad.precio}</p>   
                                                                    <button className="boton-comprar" onClick={()=>{alert('Producto agregado al carro')}}>Comprar</button>
                                                                
                                                            </div>
                                                        </div>
                                                )
                                            }
                                            </div>
                                        </div>
                        )
                    }
            </div>
        </section>
    )
}
