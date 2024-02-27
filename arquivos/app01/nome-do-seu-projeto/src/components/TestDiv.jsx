import React,{useEffect, useRef, useState} from "react";
import withAuth from "./WithAuth";

function TestDiv(){

    const inputRef=useRef(null);

    const handleClck=(e)=>{
        inputRef.current.focus();
    }

    const falar=()=>{
        alert('oi');
    }

    return(
        <div>
            <input ref={inputRef}/>
            <button onClick={handleClck}>Focus input</button>
            
        </div>
    )
}

export default withAuth(TestDiv);