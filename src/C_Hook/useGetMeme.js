import { useEffect ,useState} from "react";

export default function useGetMeme(memeChannel,setIsLoading,setPage) {
    const [data,setData] = useState([])
    useEffect(()=>{
        if (memeChannel !== "") {
            fetch(`https://meme-api.com/gimme/${memeChannel}/50`)
                .then((resp) => resp.json())
                .then((res) => {setPage(1)
                    setData(res.memes)
                    setIsLoading(false)})
                .catch((err)=>console.log(err))
        }
    },[memeChannel,setIsLoading,setPage])
    return data;
}