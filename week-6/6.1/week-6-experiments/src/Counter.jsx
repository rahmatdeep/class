import React, { useEffect, useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState(1)
    const [value, setValue] = useState(0)

    useEffect(()=>{
        let counter = 0;
        for(let i = 1; i<=inputValue; i++){
            counter = counter+i
        }
        setValue(counter)
    },[inputValue])

    let counter = 0;
    for(let i = 1; i<=inputValue; i++){
        counter = counter+i
    }
    
    return(
        <>
            <input type="text" onChange={function(e){
                setInputValue(e.target.value);
            }} placeholder="Enter a value"/><br />
                Sum from 1 to {inputValue} is {value}<br />
            <button onClick={()=>{
                setCount(count+1)
            }}>Count {count}</button>
        </>
    )
}