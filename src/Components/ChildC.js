import React, { useContext } from 'react';
import {data,data1} from "./Revision1"

function ChildC(){
   const name =  useContext(data);

 return (
    <div>
<h3>hi{name}</h3>
    </div>
 )   
}

export default ChildC;