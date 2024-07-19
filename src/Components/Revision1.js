// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Revision1 = () => {
//     const [data, setData] = useState([]); // Ensure the initial state is an array
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Define the function to fetch data
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://reqres.in/api/users?page=2');
//                 // Check if the response data is an array
//                 if (Array.isArray(response.data)) {
//                     setData(response.data);
//                 } else {
//                     // Handle cases where the data is not an array
//                     console.error('Fetched data is not an array:', response.data);
//                 }
//                 setLoading(false);
//             } catch (err) {
//                 setError(err);
//                 setLoading(false);
//             }
//         };

//         // Call the fetch function
//         fetchData();
//     }, []); // Empty dependency array means this effect runs once when the component mounts

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     return (
//         <div>
//             <h1>Fetched Data</h1>
//             <ul>
//                 {Array.isArray(data) && data.length > 0 ? (
//                     data.map((item, index) => (
//                         <li key={index}>{item.first_name}</li>
//                     ))
//                 ) : (
//                     <p>No data available</p>
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default Revision1;   

// import React from "react";

// function Revision1() {
//     const data = ["neha", "hi", "rahul", "america"];

//     return (
//         <div>
//             <h4>revision1</h4>
//             <ul>
//                 {data.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Revision1;

// import React from "react";

// function Revision1() {
//     const data = [2, 3, 8, 5];

//     return (
//         <div>
//             <h4>revision1</h4>
//             <ul>
//                 {data
//                     .filter((item) => item <= 4)
//                     .map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//             </ul>
//         </div>
//     );
// }

// export default Revision1;

// import React from 'react';

// function UserList() {
//     const users = [
//         { id: 1, name: "John Doe" },
//         { id: 2, name: "Jane Smith" },
//         { id: 3, name: "Alice Johnson" }
//     ];

//     return (
//         <div>
//             <h4>User List</h4>
//             <ul>
//                 {users.map((user) => (
//                     <li key={user.id}>{user.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default UserList;


// import React from 'react';

// function ForLoopList() {
//     const items = ["Apple", "Banana", "Cherry", "Date"];
//     const listItems = [];

//     for (let i = 0; i < items.length; i++) {
//         listItems.push(<li key={i}>{items[i]}</li>);
//     }

//     return (
//         <div>
//             <h4>Fruit List</h4>
//             <ul>
//                 {listItems}
//             </ul>
//         </div>
//     );
// }

// export default ForLoopList; 

// import React, { useState } from 'react';

// function ArrayStateExample() {
//     // Initialize the array state
//     const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

//     // Function to add a new item
//     const addItem = () => {
//         setItems([...items, "Date"]);
//     };

//     return (
//         <div>
//             <h4>Fruit List</h4>
//             <ul>
//                 {items.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//             <button onClick={addItem}>Add Date</button>
//         </div>
//     );
// }

// export default ArrayStateExample;
  
// import React, { useState } from 'react';

// function ObjectArrayStateExample() {
//     // Initialize the array state with objects
//     const [users, setUsers] = useState([
//         { id: 1, name: "John Doe" },
//         { id: 2, name: "Jane Smith" },
//     ]);

//     // Function to add a new user
//     const addUser = () => {
//         const newUser = { id: users.length + 1, name: `User ${users.length + 1}` };
//         setUsers([...users, newUser]);
//     };

//     return (
//         <div>
//             <h4>User List</h4>
//             <ul>
//                 {users.map((user) => (
//                     <li key={user.id}>{user.name}</li>
//                 ))}
//             </ul>
//             <button onClick={addUser}>Add User</button>
//         </div>
//     );
// }

// export default ObjectArrayStateExample;  


// import React, { useState } from 'react';

// function SortableList() {
//     // Initial data array
//     const initialData = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

//     // Initialize state with the data array
//     const [data, setData] = useState(initialData);

//     // Function to sort data in ascending order
//     const sortAscending = () => {
//         const sortedData = [...data].sort((a, b) => a - b);
//         setData(sortedData);
//     };

//     // Function to sort data in descending order
//     const sortDescending = () => {
//         const sortedData = [...data].sort((a, b) => b - a);
//         setData(sortedData);
//     };

//     return (
//         <div>
//             <h4>Sortable List</h4>
//             <ul>
//                 {data.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//             <button onClick={sortAscending}>Sort Ascending</button>
//             <button onClick={sortDescending}>Sort Descending</button>
//         </div>
//     );
// }

// export default SortableList;  


// import React, { useState } from 'react';

// function SortableUserList() {
//     // Initial users array
//     const initialUsers = [
//         { id: 1, name: 'John' },
//         { id: 2, name: 'Alice' },
//         { id: 3, name: 'Bob' },
//     ];

//     // Initialize state with the users array
//     const [users, setUsers] = useState(initialUsers);

//     // Function to sort users by name in ascending order
//     const sortAscending = () => {
//         const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
//         setUsers(sortedUsers);
//     };

//     // Function to sort users by name in descending order
//     const sortDescending = () => {
//         const sortedUsers = [...users].sort((a, b) => b.name.localeCompare(a.name));
//         setUsers(sortedUsers);
//     };

//     return (
//         <div>
//             <h4>Sortable User List</h4>
//             <ul>
//                 {users.map((user) => (
//                     <li key={user.id}>{user.name}</li>
//                 ))}
//             </ul>
//             <button onClick={sortAscending}>Sort Ascending</button>
//             <button onClick={sortDescending}>Sort Descending</button>
//         </div>
//     );
// }

// export default SortableUserList;
// day 2 
// usestate with useeffect and pass function through props
// import React,{useState,useEffect} from "react";
//  function Revision1({onButtonClick}){
//  const[getdata ,setdata]=useState(["banana","orange","apple"]) 

// useEffect(()=>{
// setdata((getdata)=>[...getdata,"date"])
// },[])

//    return (
//         <div>
//             <h3>revision1</h3>
//             {/* //<h3>{props.name}</h3> */}
//             <button onClick={()=>onButtonClick("button clicked")}></button>
//             <ul>
//             {getdata.map((item,index)=>(
//                 <li key={index}>{item}</li>
//             ))}
//             </ul>
         
//         </div>
//     )
//  }

//  export default Revision1; 

// // useeffect with three ways 
// import React,{useState,useEffect} from "react";
// function  Revision1(){
// const [data,setdata]=useState(7)
//  const handlesubmit=()=>{
//     setdata(data+1)
//  }

// //  useEffect(()=>{
// //  alert("hii its upto you")
// //  },[data])


// useEffect(()=>{
//     alert("hii is")
// })

//     return (
//         <div>
//             <h4>useeffect in three ways</h4>
//             <p>{data}</p>
//             <button onClick={()=>handlesubmit()}>clickme</button>
//         </div>
//     )
// }

// export default Revision1;

// send child to parent 

// import React, { useState } from "react";
// import Revisionchild from "./Revisionchild"

// function Revision1(){
// const [message,setmessage] = useState("");

// const handleMessage = (msg)=>{
//     setmessage(msg)
// }

//     return (
//         <div>
//             <h3>reviosn1 take data from child</h3>
//             <p>message from child:{message}</p>
//             <Revisionchild onMessageChange={handleMessage}/>
//         </div>
//     )
// }

// export default Revision1;
// usememo or usecllback 

// import React,{useCallback, useState} from "react";
// import Revisionchild from "./Revisionchild";
// function Revision1(){
//     const [add,setadd] = useState(0)
//     const[count,setcount] = useState('')
//     const learning =useCallback(()=>{

//     },[count])
//     return (
//         <div>
//         <h3>learning usecallback</h3>
//         <Revisionchild  learning={learning}  count={count}/>
//         <h1>{add}</h1>
//         <button onClick={()=>setadd(add+1)}>addition</button>
//        <button onClick={()=>setcount(count+3)}>count</button>
//         <p>{count}</p>
//         </div>
//     )
// }
// export default Revision1;

// import React,{createContext} from 'react';
// import childA from "./ChildA.js"

// const data = createContext();
// const data1 = createContext();

// function Revision1(){
//     const name ="neha"
//     const classsection ="high"

    
//  return (
//     <div>
//         <data.Provider value={name}>
//             <childA/>
//         </data.Provider>

//     </div>
//  )   
// }

// export default Revision1;
// export {data,data1}  

//conditional rendering 
// import React ,{useState}from "react";
// function Revision1(){
//     const [login,setlogin]=useState('')

//     const handlelogin=()=>{
//         setlogin(false)
//     }
//     const handleLogout=()=>{
//         setlogin(true)
//     }
//     return (
//         <div>
//             <h3>conditional rendering</h3>
//             { login ?(
//                 <div>
//             <h3>welcome</h3>
//             <button onClick={handlelogin}>loginfirst</button>
//             </div>
//             ):(
//                 <div>
//             <h3>thankyou</h3>
//             <button onClick={handleLogout}>logioutsecound</button>
//             </div>
//             )
// }
//         </div>
//     )
// } 
// export default Revision1 

// dynamic api with dynamic table 

import React,{useState,useEffect} from "react";
import axios  from "axios";
function Revision1(){
const [data,setdata]=useState([]);
const [checkedItems, setCheckedItems]=useState('') 

useEffect(()=>{
    axios.get('https://api.example.com/data')
    .then(response =>{
        setdata(response.data)
    })
    .catch(error=>{
        console.log("error handling",error)
    });
},[]); 


const handlecheckboxchange =(id)=>{
    setCheckedItems(prevstate =>({
        ...prevstate,
        [id]:!prevstate[id]
    }))
}




    return (
        <div>
            <h3>dynamic api</h3>
            <table>
                <thead>
                    <tr>
                        <th>checkbox</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item=>(
                        <tr key={item.id}>
                            <td>
                                <input
                                 type="checkbox"
                                 checked={checkedItems[item.id] || false}
                                 onChange={()=>handlecheckboxchange(item.id)}
                                 ></input>
                                 

                </td>
                <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Revision1;