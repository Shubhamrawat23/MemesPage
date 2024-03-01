import React from "react";

export default function MemeCard({title,image,author,postPreview,downloadLink}){
    const handleDownload = async(downloadLink,title)=>{
        const imgBlob = await fetch(downloadLink)
        .then((res)=>res.arrayBuffer())
        .then((val)=>new Blob([val],{type:'image/gif'}))

        
        const link = document.createElement('a')
        link.href= URL.createObjectURL(imgBlob)
        link.download = title
        document.body.appendChild(link)
        link.click()
       document.body.removeChild(link)
    }
    return(
        <div style={{border:"2px solid red", width:"auto", height:"auto"}}>
            <img src={image} alt={title}/>
            <h3>Author- {author}</h3>
            <button onClick={postPreview}>Meme Preview</button>
            <button onClick={()=>handleDownload(downloadLink,title)}>Download</button>
        </div>
    )
}