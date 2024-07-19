// import React,{useState} from "react";

// function Revisionchild({onMessageChange}){
//     const [inputvalue,setinputvalue]=useState("")

//  const handleChange =(e)=>{
//     setinputvalue(e.target.value)
//  }

//  const handleclick=()=>{
//     onMessageChange(inputvalue)
//  }

//     return (
//         <div>
//  <h3>child component</h3>
//  <input type = "text" value={inputvalue} onChange={handleChange}></input>
//     <button onClick={handleclick}>send to parent</button>
//         </div>
//     )
// }

// export default Revisionchild;


import React,{memo} from "react";

function Revisionchild(learning,count){
  console.log("child components")
    return (
        <div>
       </div>
    )
}

export default memo(Revisionchild);


