import React from "react";

export default function InputFields({onChannelName}){
    return(
        <form onSubmit={(value)=>(onChannelName && onChannelName(value))} id="inputForm" className="flex gap-2">
        <input placeholder="Channel Name" name="channelName" id="inputChannel" className="bg-stone-600 p-2 rounded-lg px-4 w-full my-2 border border-stone-600 text-white placeholder:text-grey-500"/>
        <button type="submit" id="submitBtn" className="border text-white rounded-lg p-2 my-2 bg-transparent hover:bg-zinc-800">Submit</button>
        </form>
    )
}