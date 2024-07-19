import React from "react";
import Onechild from '../Components/Onechild.js'

function One(){

function getdata(data){
  console.log(data)
}

    return(
        <div>
            <Onechild  getdata={getdata}/>
        </div>
    )

}



export default One;