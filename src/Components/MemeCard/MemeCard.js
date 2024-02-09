import React from "react";

export default function MemeCard({title,image,author,postPreview}){
    return(
        <div style={{border:"2px solid red", width:"auto", height:"auto"}}>
            <img src={image} alt={title}/>
            <h3>Author- {author}</h3>
            <button onClick={postPreview}>Meme Preview</button>
        </div>
    )
}