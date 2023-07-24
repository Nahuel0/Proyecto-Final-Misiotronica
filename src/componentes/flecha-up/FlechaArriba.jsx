import { useEffect, useState } from "react"
import "./flechaArriba.css"

export default function FlechaArriba(){
    const [mostrar,setMostrar] = useState(false);

    useEffect(()=>{
        const mostrarFlecha= ()=>{
        let scrollPosition = window.scrollY;
        (scrollPosition > 100 ? setMostrar(true): setMostrar(false))
        }
        
        function subir(){
            const scrollPosition = window.scrollY;
            //hacemos un efecto de subida tardia llamando varias veces la misma funcion
            if(scrollPosition>0){
                window.requestAnimationFrame(subir);
                window.scrollTo(0,scrollPosition - 30);
                
            }
        }

            const aSubir = document.getElementById('ir-arriba');
            aSubir.addEventListener('click',subir)
            

        window.addEventListener('scroll',mostrarFlecha)
    
    })

    
    return(
        <a  id="ir-arriba" className={mostrar?"mostrar-flecha":"ocultar-flecha"} >
            <img src={process.env.PUBLIC_URL+"/imagenes/icon/flecha-arriba.png"} alt="Ir al inicio" />
        </a>
    
    )
}