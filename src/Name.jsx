import {useState} from "react";

function Name(){

const [fName,setFName]=useState("")
  const [lName,setLName]=useState("")

  function onInputKey(props){
    let whatName=props.target.name
    console.log(whatName);
    if (whatName==="fName"){
      setFName(props.target.value)
    }else if(whatName==="lName"){
      setLName(props.target.value);
    }
  }

  return(
    <div>
        <h1>{fName} {lName}</h1>
        <input onChange={onInputKey} value={fName} name="fName"></input>
        <input onChange={onInputKey} value={lName} name="lName"></input>
    </div>
  )

}

export default Name;