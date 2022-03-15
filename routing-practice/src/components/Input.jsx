import React from 'react';
import { useParams } from 'react-router-dom';

const Input = (props) => {
    const {input} = useParams();

    let isNum = true;
    if (isNaN(+input)) {
        isNum = false;
    } else if(parseInt(+input)) {
        isNum = true;
    }

    return (
        isNum ? <div>This Number is: {input}</div> : <div>This Word is: {input}</div>
    )
}

export default Input;