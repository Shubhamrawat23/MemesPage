import { useEffect, useState } from 'react';
import './App.css';
import useGetMeme from './C_Hook/useGetMeme.js'
import InputFields from './Components/InputFields.js';
import MemeCard from './Components/MemeCard/MemeCard.js'
import BackBtn from "./Icons/back-animation.mp4"

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
      if (!recentSearch.includes(valueOfName)) {setRecentSearch([...recentSearch,valueOfName])
      
      localStorage.setItem("recentSearch",JSON.stringify([valueOfName,...recentSearch]))}
    }
  else{
    return alert("please enter some channel name")
  }    
  e.target.channelName.value=""
  
}


console.log(getMeme);

useEffect(()=>{
  setPage(1)
  let prevSearches = JSON.parse(localStorage.getItem("recentSearch"));
  if(prevSearches !== null) setRecentSearch(prevSearches)
  },[name,setRecentSearch])
 
  return (
    <div className="App">
      <InputFields onChannelName={handleChannelName} />
      {getMeme ? `These are ${name} Memes` : `"${name}" Name's Memes Not Found`}
      <div id='mainMemeContainer'>
        {getMeme && getMeme.slice(page * 6 - 6, page * 6).map((value, index) => (
          <div key={index} className='memeBox'>
            <MemeCard title={value.title} image={value.preview} postPreview={value.postLink} downloadLink={value.url} />
          </div>
        ))}
      </div>

      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Back</button>
      <button disabled={getMeme && page >= Math.ceil((getMeme.length) / 6)} onClick={() => setPage(page + 1)}>Next</button>


      <div>
        <p>Recent Searches</p>
        {recentSearch && recentSearch.map((value, i) => (
          <div key={i} onClick={() => (setName(value), window.scrollTo({ top: 0, behavior: "smooth" }))}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
