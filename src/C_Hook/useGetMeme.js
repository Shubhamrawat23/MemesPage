import { useEffect ,useState} from "react";

export default function useGetMeme(memeChannel, noOfMemes=50) {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`https://meme-api.com/gimme/${memeChannel}/${noOfMemes}`)
        .then((resp)=>resp.json())
        .then((res)=>setData(res.memes))
        .catch((e)=>console.log(e))
    },[memeChannel,noOfMemes])
    return data;
}