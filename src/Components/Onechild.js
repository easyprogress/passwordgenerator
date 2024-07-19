import React ,{useState}from 'react';
function Onechild(props){
    const[name,setname]= useState();
    function handlesubmit(e){
        e.preventDefault();
        props.getdata(name)
    }
    return (
        <div>
       <form onSubmit={handlesubmit}>
        <input type = 'text' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
       <button>submit</button>
       </form>
        </div>
    )
}
export default Onechild;