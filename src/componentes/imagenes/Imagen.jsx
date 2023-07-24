import React from "react"
import './imagen.css'

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'
    },
    {  url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80'
    },
    {
      url:'icon/logoEmpresa.png'
    },
    {
      url:'icon/logo2.png'
    },

    
  ]


 

export default function retornarUrl(props){
    switch(props.img){
      case 0:
        return <img className={props.class} src={slides[0].url}/>
      case 1:
        return <img className={props.class} src={slides[1].url}/>  
      case 2:
        return <img className={props.class} src={process.env.PUBLIC_URL+"/imagenes/" +slides[2].url} />;
      case 3:
        return <img className={props.class} src={process.env.PUBLIC_URL+"/imagenes/" +slides[3].url} />;
      default:
        return <img className={props.class} src={process.env.PUBLIC_URL +"/imagenes/" + props.url}/>
    }
    

}