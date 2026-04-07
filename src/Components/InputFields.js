import React from "react";

export default function InputFields({onChannelName}){
    return(
        <form onSubmit={(value)=>(onChannelName && onChannelName(value))} id="inputForm" className="flex gap-2">
        <input placeholder="Channel Name" name="channelName" id="inputChannel" className="bg-stone-600 p-2 rounded-lg px-4 w-full my-2 border border-stone-600 text-slate-300"/>
        <button type="submit" id="submitBtn" className="border rounded-lg p-2 my-2 bg-slate-300 hover:bg-gray-300">Submit</button>
        </form>
    )
}