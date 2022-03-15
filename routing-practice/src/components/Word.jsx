import React from "react";
import { useParams } from "react-router-dom";

const Word = (props) => {
    const {word, bgColor, color} = useParams();
    
    let isWord = false;
    if (isNaN(+word)) {
        isWord = true;
    } else if (parseInt(+word)) {
        isWord = false;
    }
    
    
    return (
        isWord ? <div style={{backgroundColor: bgColor , color: color}}>The word is : {word}</div> : <div>This is an invalid word.</div>
    )
}

export default Word;