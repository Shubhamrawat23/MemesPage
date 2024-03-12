import { useEffect, useState} from 'react';
import './App.css';
import useGetMeme from './C_Hook/useGetMeme.js'
import InputFields from './Components/InputFields.js';
import MemeCard from './Components/MemeCard/MemeCard.js'
import BackBtn from "./Icons/back-animation.mp4"
import BackPoster from "./Icons/left-arrow.png"
import NextBtn from "./Icons/next-animation.mp4"
import NextPoster from "./Icons/right-arrow.png"


function App() {
  const [name,setName] = useState("")
  const [page,setPage] = useState(1)
  const [recentSearch,setRecentSearch] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const getMeme = useGetMeme(name,setIsLoading,setPage)


  const handleChannelName = (e) => {
    e.preventDefault()
    if (e.target.channelName.value !== "") {
      let valueOfName = e.target.channelName.value
      setName(valueOfName)
      setIsLoading(true)
      if (!recentSearch.includes(valueOfName)) {
        setRecentSearch([...recentSearch, valueOfName])
        
        localStorage.setItem("recentSearch", JSON.stringify([valueOfName, ...recentSearch]))
      }
    }
    else {
      return alert("please enter some channel name")
    }
    e.target.channelName.value = ""
  }

  console.log(getMeme);

useEffect(()=>{
  let prevSearches = JSON.parse(localStorage.getItem("recentSearch"));
  if(prevSearches !== null) setRecentSearch(prevSearches)
  },[])
 
  return (
    <div className="App">

      {/*--------------------- Input Channels Name --------------------- */}
      <InputFields onChannelName={handleChannelName} />

      <div id={name===""?'boxOfAboutMeme':'activeAboutMeme'}>
        {name === "" ?
          <div id='enterName'>Please Enter any channel Name</div> :
          <>
            {isLoading ? `Finding "${name}" Memes` : (getMeme && !isLoading ? `These are "${name}" Memes` : `"${name}" Name's Memes Not Found`)}
          </>
        }
      </div>



      {/*------------------------ Main Meme Card ----------------- */}

      {isLoading ?
        (<h1 style={{ color: "white" }}>Loading...</h1>) :
        <div id='mainMemeContainer'>
          {getMeme && getMeme.slice(page * 6 - 6, page * 6).map((value, index) => (
            <div key={index} className='memeBox'>
              <MemeCard title={value.title}
                image={value.preview}
                postPreview={value.postLink}
                downloadLink={value.url} />
            </div>
          ))}
        </div>
      }




      {/*-------------- Next/Previous Button------------ */}
      <button disabled={page <= 1 || !getMeme}
        onClick={() => setPage(prevVal=>prevVal - 1)}
        id='prevBtn'>
        <video src={BackBtn}
          poster={BackPoster}
          onClick={(e) => e.target.play()}
          id='prevVideo'
          disabled={page <= 1} />
      </button>

      <button disabled={!getMeme || page >= Math.ceil((getMeme.length) / 6)}
        onClick={() => setPage(prevVal=>prevVal + 1)}
        id='nextBtn'>
        <video src={NextBtn}
          poster={NextPoster}
          onClick={(e) => e.target.play()}
          id='nextVideo'
          disabled={getMeme && page >= Math.ceil((getMeme.length) / 6)} />
      </button>




      {/*----------------- Recent Searches -------------------- */}
      <div>
        <p style={{ color: "white", fontSize: "xx-large" }}>Recent Searches</p>
        <div id='mainRecentSearch'>
          {recentSearch && recentSearch.map((value, i) => (
            <div key={i}
              className='searches'
              style={{ backgroundColor: value === name ? "wheat" : "black", color: value === name ? "black" : "wheat" }}
              onClick={() => (setName(value), setIsLoading(true), setPage(1))}>
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
