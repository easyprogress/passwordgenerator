import  React,{useState,useEffect} from " react";
 function Look(){
    const [data,setdata] = useState()
const fetchdata=()=>{
    fetch("https://dummy.restapiexample.com/api/v1/employees")
    .then(async(result)=>{
        let res = await result.json()
        setdata(res)
    })
    .catch((error)=>{
        console.log(error)
    })
}
    
useEffect(()=>{
  fetchdata()
},[])
    return (
        <div>
        <h1>testing for dummy api</h1>
        <ul>
            {
         data.map((item)=>{
            return (
                <li>{item}</li>
            )
         })
        }
         </ul>
        </div>
    )
 }

 export default Look;