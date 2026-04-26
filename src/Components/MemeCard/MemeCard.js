import React from "react";
import "./MemeCard.css"
// import downloadIcon from "../../Icons/downloadIcon.png"
// import previewIcon from "../../Icons/previewIcon.png"

export default function MemeCard({title,image,author,postPreview,downloadLink}){
    // const handleDownload = async(downloadLink,title)=>{
    //     const imgBlob = await fetch(downloadLink)
    //     .then((res)=>res.arrayBuffer())
    //     .then((val)=>new Blob([val],{type:'image/gif'}))

        
    //     const link = document.createElement('a')
    //     link.href= URL.createObjectURL(imgBlob)
    //     link.download = title
    //     document.body.appendChild(link)
    //     link.click()
    //    document.body.removeChild(link)
    // }

    // const handlePostPreview = (value)=>{
    //         window.open(value)
    // }
    return(
        <section className="memeCardSec rounded-2xl border m-0 pb-2 h-full">
            <div className="w-full flex justify-around mx-auto aspect-square bg-black py-4">
                <img src={image[2]} alt={title} className="memeImg rounded" />
            </div>
            <p id="memeTitle" className="font-bold">{title}</p>
            <p className="text-left py-2 px-3 text-gray-400 text-xs">{author}</p>
            {/* <div id="memePreviewAndDownloadBox">
                <img src={previewIcon} alt="preview" onClick={() => handlePostPreview(postPreview)} id="memePreviewBtn"/>
                <img src={downloadIcon} alt="download" onClick={() => handleDownload(downloadLink, title)} id="memeDownloadBtn"/>
            </div> */}
        </section>
    )
}