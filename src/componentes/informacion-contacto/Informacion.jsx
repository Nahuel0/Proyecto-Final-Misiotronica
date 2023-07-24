import { useEffect, useState } from "react"
import "./informacion.css"

export default function Informacion(){
   
    const [position,setPosition] = useState(true);
    
    //Utilizo el fetch ya que no podia usar el evento porque me tiraba error de inexistencia
    useEffect(()=>{
        fetch("http://localhost:3000/").then
        (()=>{

            const cambiar = ()=>{
                setPosition(!position)
            }

            let docu = document.getElementsByClassName("nav-img")[0];
            docu.addEventListener('click',cambiar);
        })
        .catch(err => console.log("Error al trabajar mas rapido que el renderizado"))
    })

    return(
        <footer>
            <div className="content-all">
                <div className="row">
                    <div className="cont-contacto">
                        <a name="contacto"></a>
                        <h3>Contacto</h3>
                        
                        <p>General Roca</p>
                        <p>Rio Negro</p>
                        <p>Argentina</p>
                        <p><strong>Email:</strong> inventamosunmail@gmail.com</p>
                        <p><strong>Telefono:</strong> 0003322211</p>
                    </div>

                    <div className="content-link">
                        <h3>Links</h3>
                            <a href="#inicio" className={position ? "link" : "position-inerith"}>Inicio</a>
                        <br />
                            <a href="#acercaDe" className={position ? "link" : "position-inerith"}>Acerca De</a>
                        <br />
                            <a href="#ventas" className= {position ? "link" : "position-inerith"}>Ventas</a>
                        <br />
                            <a href="#contacto" className={position ? "link" : "position-inerith"}>Contacto</a>
                    </div>
                </div>
            </div>
            <div className="copy">
                <p className="text-copy">Diseño<a id="git" href="https://github.com/Nahuel0"> <strong>Nahuel Oliva</strong></a> Desarrollo Facultad de Informática Toda la Informacion en GitHub</p>
            </div>
        </footer>

    )

}