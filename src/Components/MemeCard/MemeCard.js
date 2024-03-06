import React from "react";
import "./MemeCard.css"
import downloadIcon from "../../Icons/downloadIcon.png"
import previewIcon from "../../Icons/previewIcon.png"

export default function MemeCard({title,image,postPreview,downloadLink}){
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

    const handlePostPreview = (value)=>{
            window.open(value)
    }
    return(
        <section id="memeCardSec">
            <p id="memeTitle">{title}</p>
            <img src={image[2]} alt={title} id="memeImg" />
            <div id="memePreviewAndDownloadBox">
                <img src={previewIcon} alt="preview" onClick={() => handlePostPreview(postPreview)} id="memePreviewBtn"/>
                <img src={downloadIcon} alt="download" onClick={() => handleDownload(downloadLink, title)} id="memeDownloadBtn"/>
            </div>
        </section>
    )
}