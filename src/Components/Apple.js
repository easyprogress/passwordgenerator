// import React,{useState,useEffect} from 'react';

// function Apple(){
//     const[data,setdata] = useState([])

//     useEffect(()=>{
//         fetchdata();
//     },[]);



//     const fetchdata = async()=>{
//         try{
//         const url = await fetch("https://jsonplaceholder.typicode.com/posts")
//         if(!url.ok){
//             throw new Error("network is not here")
//         }
//         const data = await url.json();
//         setdata(data)
//         }catch(error){
//             console.log(error)
//         }
//     }




//     return(
//         <div>
//             <h3>category</h3>
//             <ul>
//                 {data.map((item)=>{
//                     <li key={item.id}>{item.name}</li>
//                 })}
//             </ul>
//         </div>
//     )
// }

// export default Apple; 

import {useEffect,useState} from 'react'

const Apple = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
      setData(data);
    }).catch(e=>console.log(e.message));
  },[])

   //console.log(data);

  return (
    <div>
      {data.map(i => <p key={i.id}>{i.title}</p> )}
    </div>
  )
}

export default Apple
