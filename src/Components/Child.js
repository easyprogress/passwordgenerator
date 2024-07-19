import {React,memo} from 'react';

function Child(learning,count){
    console.log("child components")
 return (
    <div>

    </div>
 )   
}

export default memo(Child);