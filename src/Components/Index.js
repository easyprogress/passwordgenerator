// useeffect is run whenever our web page load is run or when our state change it run if we want to 
//not run this we use  pass blank bracket  and where where we want to run this working on this state 
import React,{useState,useEffect} from 'react';

function Index(props){
    const [data,setdata]=useState(8)

const handleclick=()=>{
 setdata(data+1)
}


//useEffect(()=>{
    //console.log("rendering")

//},[data])

//useEffect(()=>{
  //  console.log("rendering")
//},[])

//useEffect(()=>{
  //  console.log("rendering")
    //})

    return(
        <div>
            <h1>{props.name}</h1>
            <h1>it is a index</h1>
            <p>you clicked {data}</p> 
      <button onClick={()=>handleclick()}>index</button>
            
        </div>
    )
}

export default Index;