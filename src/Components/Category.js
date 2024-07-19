import React,{useState} from 'react';
import Navbar from './Navbar.js'
function Category(){
    const[getdata ,setdata]= useState(); 
  
    const handlechange=()=>{
        setdata(getdata)
    }

    return (
        <div>
            <Navbar/>
            <h3>category</h3>
            <input type="text" placeholder='name'></input>
            <button onClick={handlechange}>clickme</button>
            <strong>{getdata}</strong>
        </div>
    )
}

export default Category;