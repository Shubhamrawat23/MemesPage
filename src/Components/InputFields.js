import React from "react";

export default function InputFields({onChannelName}){
    return(
        <form onSubmit={(value)=>(onChannelName && onChannelName(value))}>
        <input placeholder="Channel Name" name="channelName"/>
        <button type="submit" >Submit</button>
        </form>
    )
}