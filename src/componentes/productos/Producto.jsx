import React from "react";
import Imagen from "../imagenes/Imagen"
import "./producto.css"
import Heart from "../corazon-tienda/Heart";
let stock =0;
let id = 0;
export default function Producto(props) {
    id = id + 1
    return(
        <div className="producto">
                <Heart/>
                <br/>
                <Imagen 
                    key={id}
                    class={props.class}
                    img={-1}
                    url={props.url}
                />
                {stock = props.cantidad}
                <h4>{props.nombre}</h4>

        </div>
    );
}