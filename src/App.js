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
        setRecentSearch([valueOfName,...recentSearch])
        
        localStorage.setItem("recentSearch", JSON.stringify([valueOfName,...recentSearch]))
      }
    }
    else {
      return alert("please enter some channel name")
    }
    e.target.channelName.value = ""
  }


useEffect(()=>{
  let prevSearches = JSON.parse(localStorage.getItem("recentSearch"));
  if(prevSearches !== null) setRecentSearch(prevSearches)
  },[])
 
  return (
    <div className="App">

      <div className='flex py-2 px-4 items-center justify-between'>
        <div className='text-slate-300'>Memes</div>
      {/*--------------------- Input Channels Name --------------------- */}
        <InputFields onChannelName={handleChannelName} />
      </div>


      {/*----------------- Recent Searches -------------------- */}
      <div className='flex px-4 items-center'>
        <p style={{ color: "white"}}>Recent:</p>
        <div id='mainRecentSearch'>
          {recentSearch && recentSearch.map((value, i) => (
            <span key={i}
              className={`mx-2 py-2 px-4 rounded-full text-sm cursor-pointer transition-all ${value === name ? "bg-white text-black" : "bg-black text-white hover:bg-zinc-900"}`}
              onClick={() => {setName(value) 
                setIsLoading(true) 
                setPage(1)
                window.scrollTo({top:0,behavior:"smooth"})}}>
              {value}
            </span>
          ))}
        </div> 
      </div>

      <div id={name===""?'boxOfAboutMeme':'activeAboutMeme'} className={name != "" ?'my-4':''}>
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
        <div id='mainMemeContainer' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch'>
          {getMeme && getMeme.map((value, index) => (
              <MemeCard key={index} title={value.title}
                author={value.author}
                image={value.preview}
                postPreview={value.postLink}
                downloadLink={value.url} />
          ))}
        </div>
      }




      {/*-------------- Next/Previous Button------------ */}
      {/* <button disabled={page <= 1 || !getMeme}
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
      </button> */}

    </div>
  );
}

export default App;
