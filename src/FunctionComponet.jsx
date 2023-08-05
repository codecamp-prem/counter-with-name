import { useState } from "react";
export function FunctionComponet(){
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    function changeAge(sign){
        setAge(currentAge => {
            let newage =  currentAge + 1
            if (sign === '-') {
                newage = currentAge -  1
            }
            return newage
        })
    }
    return (
        <div>
            <h1>Function Component</h1><br/>
            <input value={name} onChange={e=>setName(e.target.value)}/>
            <br/>
            <br/>
            <button onClick={()=>changeAge('-')}>-</button>{age}<button onClick={()=>changeAge('+')}>+</button>
            <br/>
            <br/>
            <label>My name is {name} and I am {age} years old</label>
        </div>
    )
}