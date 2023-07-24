
import "./heart.css"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

export default function Heart(){
    const [Liked,setLiked] = useState(false);
    
    const handleClick=()=>{
        Liked ? setLiked(false) : setLiked(true);
    }


    return(
        <div onClick={handleClick} className="cont-heart">
            {
                Liked ? <FaHeart className="heart"/> : <FaRegHeart className="heart"/>        
            }
        </div>
    )
}