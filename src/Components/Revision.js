import React,{useState,useEffect} from "react";

function Revision(props){
  const [data,setdata] = useState('')
  const[inputdata,setinputdata] = useState('')
  const [islogin,setloggeddata] = useState('')

const handlesubmit=()=>{
  setinputdata(data)

}

const handlelogin=()=>{
  setloggeddata(true)
}


const handlelogout=()=>{
  setloggeddata(false)
}

const handledata=()=>{
  alert("hii")
}

useEffect(()=>{
handledata()
},[])

const a = ["bhaskar","aditya","mobilephone","suryanamasker"]

  return(
    <div>
      <h3>revision</h3>
      <input type="text" placeholder="enter a name" value={data} onChange={e=>setdata(e.target.value)}/>
      <button  onClick={handlesubmit}>submit</button>
      <p>{inputdata}</p>
      <p>{props.name}</p>
      <div>
        {a.map((item,index)=>(
          <p key={index}>{item}</p>
        ))}
        <div>
          {islogin?(
            <div>
         <h2>welcome back</h2>
         <button onClick={handlelogout}>islogout</button>
         </div>
        ) : (
          <div>
        <h2>please login</h2>
          <button onClick={handlelogin}>logout</button>
          </div>
        )}
        </div>



      </div>
    </div>
  )
}

export default Revision;