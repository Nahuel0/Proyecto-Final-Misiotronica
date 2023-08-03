import React from "react";
import Imagen from "../imagenes/Imagen"
import "./producto.css"
import Heart from "../corazon-tienda/Heart";
let stock =0;
export default function Producto(props) {
    stock = props.cantidad;
    return(
        <div className="producto">
                <Heart/>
                <br/>
                <Imagen 
                    key={props.url}
                    class={props.class}
                    img={-1}
                    url={props.url}
                />
                
                <h4>{props.nombre}</h4>

        </div>
    );
}