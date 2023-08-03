
import New from "../etiqueta-new/New";
import Imagen from "../imagenes/Imagen"
import "./mostrador.css"

import React, { useState } from "react"

export default function Mostrador(){

    let esValido =false;

    
    

    // VER SI ESTO PUEDE SER CAMBIADO 
    let listImagen = [    
            <Imagen 
                class="img-logo-mostrador"
                img={2}/>,
            <Imagen 
                class="img-mostrador"
                img={0}/>,
            <Imagen 
                class="img-mostrador"
                img={1}/>  
        ];

        const [imagenActual,setImagenActual] = useState(0);
        const cantidad = listImagen.length;

        let sigImagen = ()=>{
            setImagenActual(imagenActual===cantidad-1 ? 0 : imagenActual+1)
        };
    
        let antImagen = ()=>{
            setImagenActual(imagenActual-1<0 ? 
                cantidad-1 : imagenActual-1)
        };
        
      
        
    return(
        <main className="content-main content-mainimg ">
            
            <button onClick={antImagen} className="botton-left"><img className="mover" src={process.env.PUBLIC_URL +"/imagenes/icon/flecha-izquierda.png"} alt="Mover a Izquierda" /></button>
                {listImagen.map(
                    
                    (img,index)=>{
                        
                        esValido = false
                        return(

                                //Pregunto si la imagen es la que tiene que mostrar, la muestro, y las demas las escondo
                                imagenActual===index ? (
                                esValido = true,
                                <div key="div" className="cont-titulo-img">
                                    <h2>Proximante Nuevo En! </h2>    
                                    <div className={"content-img"+ ` ${esValido ? 'mostrar' : 'ocultar'}`}  >
                                        <New/>
                                        <a href="" className="navegation-a">
                                            {img}
                                        </a>
                                    </div>
                                </div>
                                )
                                : (esValido=false)
                            
                            )
                    }
                )}
            <button  onClick={sigImagen} className="botton-rigth"><img className="mover" src={process.env.PUBLIC_URL +"/imagenes/icon/flecha-derecha.png"} alt="Mover a derecha" /></button>
            
        </main>
    )
}