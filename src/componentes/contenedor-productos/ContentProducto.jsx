import Producto from "../productos/Producto";
import dataImagen from "../../productoJson/productos.json"
import "./contentProductos.css"
import { useEffect, useState } from "react";
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
    return(
        <section className="section-cont-producto">
            
            {/* Ancla */}
            <a name="ventas"    style={{visibility:"hidden"}}></a>

            <h2>Algunos de nuestros Productos</h2>
            {/* Boton de expandir todos los productos */}
            <button name="ventas" className="boton-mostrar-todo" onClick={expandirTodo}>{!expandir?"Ver Todo":"Ocultar"}</button>
            {/* Input para buscar automatico */}
            <input value={search} onChange={searcher} type="text" placeholder="Buscar Productos" className="search"/>

            <div className={!expandir ?"cont-parcial-productos" : "ocultar-producto"}>
                {resultado.map(
                    (producto)=>
                        <Producto 
                            key = {producto.id}
                            nombre={producto.tipo[0].nombre}
                            url={producto.tipo[0].url}
                            precio={producto.tipo[0].precio}
                            class="img-ventas"
                        />
                    
                )}
            </div>

            <div className={expandir ? "cont-total-producto" :"ocultar-producto"}>
                    {
                        resultado.map(
                            (producto) =>
                                    
                                    producto.tipo.map(
                                        
                                        (unidad,index)=>
                                            <Producto
                                            key={unidad.id}
                                            nombre={unidad.nombre}
                                            url={unidad.url}
                                            precio={unidad.precio}
                                            class="img-ventas-all"
                                            />
                                        
                                    )
                            
                        )
                    }
            </div>
        </section>
    )
}
