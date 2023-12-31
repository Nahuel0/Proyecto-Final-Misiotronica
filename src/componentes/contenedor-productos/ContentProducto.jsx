import Producto from "../productos/Producto";
import dataImagen from "../../productoJson/productos.json"
import "./contentProductos.css"
import swal from 'sweetalert';
import { useEffect, useState } from "react";
import Carrito from "../carrito/Carrito";




export default function ContentProducto(){  
    //================= Creamos los prodcutos y los asignamos a una lista =======================
    let productosCreados = [];
    dataImagen.map(
        (productos)=>productos.tipo.map(
            (unidad)=>productosCreados.push(
                <Producto 
                    key = {unidad.id}
                    nombre={unidad.nombre}
                    url={unidad.url}
                    cantidad = {unidad.cantidad}
                    class="img-ventas"
                />
            )
        ),    
    )
    let iterador = 0;
    
    //================================================================
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
    const addCarrito= (id)=>{
        swal("Producto agregado al carrito!",'','success');
        p.push(productosCreados[id-1]);
        setContenidoCarrito(contenidoCarrito.concat(p));
        
    }

    

    //================================================


    //===================== URL TEST ================
    const [url,setUrl]=useState(window.location.href)
    
    
    useEffect(
        ()=>{
            setUrl(window.location.href);
        }
    ,[])
    //==================================================
    

    //Pregunta si la url es tienda, entonces manda el catalogo completo, sino manda un desplegable
    if(url.includes('tienda')){
        return(
            <section className="section-cont-producto">
                <Carrito
                    productos = {contenidoCarrito}
                />
                <div className="cont-total-producto">
                        {
                            resultado.map(
                                (producto,i) =>
                                            <div key={producto.id} className="cont-producto-seleccionados">
                                                <h4 className="titulo-producto-seleccionado">{producto.nombre}</h4>   
                                                <div className="cont-producto-row"> 
                                                {
                                                    producto.tipo.map(
                                                        (unidad)=>( 
                                                            <div className="cont-producto" key={unidad.id}>
                                                                    
                                                                    {productosCreados[iterador++]}
                                                                    
                                                                    <div className="content-precio-compra">
                                                                        <p className="precio-producto">$ {unidad.precio}</p>   
                                                                        <button className="boton-comprar" onClick={()=>{addCarrito(unidad.id)}}>Comprar</button>
                                                                    
                                                                </div>
                                                            </div>
                                                            
                                                            )
                                                    )
                                                }
                                                </div>
                                            </div>
                            )
                        }
                </div>
            </section>
        )
    }else{
        return(
            <section className="section-cont-producto">
                {/* Carrito */}
                <Carrito
                    productos = {contenidoCarrito}
                />


                <h2>Algunos de nuestros Productos</h2>
                {/* Boton de expandir todos los productos */}
                <button name="ventas" className="boton-mostrar-todo" onClick={expandirTodo}>{!expandir?"Ver Todo":"Ocultar"}</button>
                {/* Input para buscar automatico */}
                <input value={search} onChange={searcher} type="text" placeholder="Buscar Productos" className="search"/>

                <div className={!expandir ?"cont-parcial-productos" : "ocultar-producto"}>
                    <div className="row-parcial-productos">
                    {resultado.map(
                        (producto,i)=>
                            <div className="cont-producto" key={producto.id}>
                                    {productosCreados[i]}
                                <div className="content-precio-compra">
                                    <p className="precio-producto">$ {producto.tipo[0].precio}</p>   
                                    <button className="boton-comprar"  onClick={()=>addCarrito(i+1)}>Comprar</button>
                                </div> 
                            </div>
                            
                        
                    )}
                    </div>
                </div>

                <div className={expandir ? "cont-total-producto" :"ocultar-producto"}>
                        {
                            resultado.map(
                                (producto,i) =>
                                            <div key={producto.id} className="cont-producto-seleccionados">
                                                <h4 className="titulo-producto-seleccionado">{producto.nombre}</h4>   
                                                <div className="cont-producto-row"> 
                                                {
                                                    producto.tipo.map(
                                                        (unidad)=>( 
                                                            <div className="cont-producto" key={unidad.id}>
                                                                    
                                                                    {productosCreados[iterador++]}
                                                                    
                                                                    <div className="content-precio-compra">
                                                                        <p className="precio-producto">$ {unidad.precio}</p>   
                                                                        <button className="boton-comprar" onClick={()=>{addCarrito(unidad.id)}}>Comprar</button>
                                                                    
                                                                </div>
                                                            </div>
                                                            
                                                            )
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
}
