import  { useState } from "react";

 
 function App() { 

    const [count,setCount] = useState(0);
 
 function increment(){
   setCount(count +1);
   
 }

 function decrement(){
     if(count > 0)
     {
        setCount(count-1);
     }
 }

    return(
    <div>

      <div className="center">
           <button onClick = {decrement} >-</button>
            <span>  {count} </span> 
           <button onClick={increment }>+</button>
           </div>
    </div>
    );
}
export default App;