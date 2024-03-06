import React from "react";
import "./InputField.css"

export default function InputFields({onChannelName,}){
    return(
        <form onSubmit={(value)=>(onChannelName && onChannelName(value))} id="inputForm">
        <input placeholder="Channel Name" name="channelName" id="inputChannel"/>
        <button type="submit" id="submitBtn">Submit</button>
        </form>
    )
}