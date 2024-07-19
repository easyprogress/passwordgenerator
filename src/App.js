import React from"react";
import {Route,Routes} from "react-router-dom";
import Category from "./Components/Category.js";
import Subcategory from "./Components/Subcategory.js";
import Apple from "./Components/Apple.js";

//import Index from  "./Components/Index.js";
//import Demo from "./Components/Demo.js";
import One from './Components/One.js'
import './App.css';
import Secound from './Components/Secound.js';
import Practiale from "./Components/Practiale.js";
import Revision from "./Components/Revision.js";
import Conditionrendering from "./Components/Conditionrendering.js";
//import Look from "./Components/Look.js";
import Revision1 from "./Components/Revision1.js";
// all the state 
///const [length,setlength]=useState(8)
//const[numberallowed,setnumberallowed]=useState(false)
//const[charallowed,setcharallowed]=useState(false)
//const [password,setpassword] = useState("")

//method of passwordgenerator
//  const passwordgenerator = useCallback(()=>{
//   let pass= ""
//   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   if(numberallowed) str  += "0123456789";
//   if(charallowed) str += "!@#$%^&*()~"

//  },[])



function App() {

  //const [count,setcount] = useState(0)


const handlesubmit=console.log("this is from new props")

// new code

  const handleclick =(message)=>{
    alert(message)
  }


// function updatecounter(){
//   setcount(count + 1)
// }

// useEffect(()=>{
//   console.log("component mount")
// },[count])

  return (
    <div> 
      {/* <Demo/> */}
      {/* <Index   name= "neha"/> */}
      {/* <One/> */}
        {/* <Secound/>  */}
       {/* <Look/> */}
   {/* <Routes>
    <Route path='/category' element={<Category/>}/>
    <Route path='/subcategory' element={<Subcategory/>}/>
   </Routes> */}
 {/* <Apple/> */}
 {/* <Practiale  name="boy"  handler={handlesubmit}/> */}
     {/* <Revision    name="mi"/>  */}
    {/* <Conditionrendering/> */}
    {/* <Revision1    name="learning react"   onButtonClick={handleclick}/> */}
    <Revision1/>
    </div>
  );
}

export default App;
