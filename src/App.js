import { useState } from 'react';
import './App.css';
import useGetMeme from './C_Hook/useGetMeme.js'
import InputFields from './Components/InputFields.js';
import MemeCard from './Components/MemeCard/MemeCard.js'
function App() {
  const [page,setPage] = useState(1)
  const [name,setName] = useState("")
  const [recentSearch,setRecentSearch] = useState([])
  const getMeme = useGetMeme(name)

  const handleChannelName = (e)=>{
    e.preventDefault()
    if (e.target.channelName.value !=="") {
      let valueOfName = e.target.channelName.value
      setName(valueOfName)
      if (!recentSearch.includes(valueOfName)) setRecentSearch([...recentSearch,valueOfName])
    }
    else{
      return alert("please enter some channel name")
    }    
    e.target.channelName.value=""
  }

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

            <MemeCard title={value.title} image={value.preview[2]} author={value.author} postPreview={()=>handlePostPreview(value.postLink)} downloadLink={value.url}/>
          </div>
        ))}
      </div>

      <button disabled={page<=1} onClick={()=>setPage(page-1)}>Back</button>
      <button disabled={getMeme && page>=Math.ceil((getMeme.length)/6)} onClick={()=>setPage(page+1)}>Next</button>


      <div>
        <p>Recent Searches</p>
        {recentSearch && recentSearch.map((value,i)=>(
          <div key={i} onClick={()=>setName(value)}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
