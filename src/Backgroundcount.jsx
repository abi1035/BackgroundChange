import {useState} from "react";


let colors=["red","green","blue","black"]

function BackgroundCount(){
  const [count, setCount] = useState(0)
  const [backgroundColor, setBackgroundColour]=useState("Black")

document.body.style.backgroundColor = backgroundColor;

 

  function onButtonClick(){
      setCount(count + 1)
      console.log("I was clicked")
      let randomColor=Math.floor(Math.random()*colors.length)
      
      setBackgroundColour(colors[randomColor])

  }

  return(
    <>
   
    <div>

    

 <button onClick={onButtonClick}>
            The count is {count}
        </button>        
    </div>
    </>
  )
}

export default BackgroundCount;