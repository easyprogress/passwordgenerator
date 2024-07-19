import React,{useCallback, useState} from 'react';
import Child from "../Components/Child.js"
function Demo(){
    const [add,setadd] = useState(0)
     const [count,setcount] = useState(2)
    const learning=useCallback(()=>{
    // fast
    },[])


return(
    <div>
        
        <h1>{add}</h1>
        <button onClick={()=>setadd(add+1)}>addition</button>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>count</button>
        <Child  learning={learning}  count={count}/>
    </div>
)

}

export default Demo;