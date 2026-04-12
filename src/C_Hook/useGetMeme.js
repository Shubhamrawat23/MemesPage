import { useEffect ,useState} from "react";

export default function useGetMeme(memeChannel,setIsLoading,setPage,meme_num='50') {
    const [data,setData] = useState([])
    useEffect(()=>{
        if (memeChannel !== "") {
            fetch(`https://meme-api.com/gimme/${memeChannel}/${meme_num}`)
                .then((resp) => resp.json())
                .then((res) => {setPage(1)
                    setData(res.memes)
                    setIsLoading(false)})
                .catch((err)=>console.log(err))
        }
    },[memeChannel,setIsLoading,setPage])
    return data;
}