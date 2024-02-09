import { useState } from 'react';
import './App.css';
import useGetMeme from './C_Hook/useGetMeme.js'
import InputFields from './Components/InputFields.js';
import MemeCard from './Components/MemeCard/MemeCard.js'

function App() {
  const [page,setPage] = useState(1)
  const [name,setName] = useState("dankmemes")
  const getMeme = useGetMeme(name)
  console.log(getMeme);



  const handleChannelName = (e)=>{
    e.preventDefault()
    if (e.target.channelName.value !=="") {
      setName(e.target.channelName.value)
      e.target.channelName.value=""
    }
    else{
      return alert("please enter some channel name")
    }
    
  }
 /* const handleDownload = async(imageUrl,imageName)=>{
    const imgBlob = await fetch(imageUrl).then((res)=>res.arrayBuffer()).then((val)=>new Blob([val],{type:'image/gif'}))

    const link = document.createElement('a')
    link.href= URL.createObjectURL(imgBlob)
    link.download = imageName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }*/
  const handlePostPreview = (value)=>{
    window.open(value)
  }
 
  return (
    <div className="App">
      <InputFields onChannelName={handleChannelName} />
      {getMeme?`These are ${name} Memes`:`"${name}" Name's Memes Not Found`}
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {getMeme && getMeme.slice(page * 6 - 6, page * 6).map((value, index) => (
          <div key={index}>

            <MemeCard title={value.title} image={value.preview[2]} author={value.author} postPreview={()=>handlePostPreview(value.postLink)}/>
          </div>
        ))}
      </div>

      <button disabled={page<=1} onClick={()=>setPage(page-1)}>Back</button>
      <button disabled={getMeme && page>=Math.ceil((getMeme.length)/6)} onClick={()=>setPage(page+1)}>Next</button>
    </div>
  );
}

export default App;
