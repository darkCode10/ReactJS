import { useState } from "react"
function Counter() {
    const [count, setCount] = useState(0)
    const Increment=()=>{
        setCount(count+1)
    }
    const Decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
        else{
            setCount(0)
        }
        
    }
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>Increment()}>Increment</button>
        <button onClick={()=>Decrement()}>Decrement</button>
        </>
    );  
}
export default Counter