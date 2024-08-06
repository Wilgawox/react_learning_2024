import React, { useEffect, useState } from "react";
import Button from "../ui/buttons/Button"

const App: React = () => {
  const [counter, setcount] = useState(-1);
  useEffect(() => {setcount(0);}, [])

  return <div className="App">
    <Button bgcolor="red" color='white' onButtonClick={()=>setcount(counter-1)}>+1 {setcount}</Button>
    <Button bgcolor="red" color='white' onButtonClick={()=>setcount(counter+1)}>-1</Button>
    <Button bgcolor="white"><img src="/im1.png"/>Search</Button>
    <Button bgcolor="red" color='black' children="Other"></Button>
    {/*<Button style={{color:"white"}}>Not a button btw</Button>*/}
    </div>
}



export default App