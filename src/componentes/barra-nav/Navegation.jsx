
import "./navegation.css"
import Logo from '../logo/Logo'
import React, { useState, useEffect } from "react";


export default function Nav(){
    
     const [menu,setMenu] = useState(false);
    
     const [transparente, setTransparente] =useState(false);
    
     const [urlCorrect, setUrlCorrect] = useState(true);
     const abrirMenu = ()=>{
        setMenu(!menu);
     }

     //Funcion de estado para volver barra transparente
     useEffect(()=>{
        const transparenteScroll= ()=>{
            const scrollPosition = window.scrollY;
            
            (scrollPosition>260 ? setTransparente(true) : setTransparente(false))
        }
        

        window.addEventListener('scroll', transparenteScroll);
      },[]);

      let checkMenu = ()=>{
        if(menu){
            setMenu(false);
        }
      }


      //Funcion de estado al encontrar url incorrecta - Oculta las opciones de navegacion
      useEffect(()=>{
        let url = document.getElementById('cont-not-found');
        (url ==null ? setUrlCorrect(false): setUrlCorrect(true));
        })
     

    return(
        <header className={`${transparente ? "cont-transparente" : "contenedor"}  ${menu ? "flex-colum" : "flex-grow"} `} >
            <a href="../" className={`cont-logo-nombre flex-grow ${!menu ? "ocultar" : "mostrar"}`}>
                <Logo 
                cont = {"cont-icon"}
                imagenLogo={"imagen-icon"}
                />
            </a>
            <i className={ menu ? "nav-button-fixed back-x" : `${urlCorrect ? "esconder" : "nav-button"}`}
                        onClick={abrirMenu} >
                    <img  className="nav-img" src={menu ? `${process.env.PUBLIC_URL+"/imagenes/icon/boton-eliminar.png"}` : `${process.env.PUBLIC_URL+'/imagenes/icon/menu.png'}`} alt="Desplegar Menu" />
            </i>
            {!urlCorrect ? 
            <nav className={menu  ? "nav-content-fixed" : "nav-content" } >
                <ul className={`flex-grow nav-ul ${menu ? "isActive" : "" }`}>
                    <li><a onClick={checkMenu} href="http://localhost:3000/" className='li-nav'>Inicio</a></li>
                    <li><a onClick={checkMenu} href="http://localhost:3000/descripcion" className='li-nav'>Acerca De</a></li>
                    <li><a onClick={checkMenu} href="http://localhost:3000/tienda" className='li-nav'>Ventas</a></li>
                    <li><a onClick={checkMenu} href="http://localhost:3000/contacto" className='li-nav'>Contacto</a></li>
                </ul>
            </nav>
             :  <div></div>
            } 
        </header>
    )
}


