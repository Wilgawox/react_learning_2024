import React from "react";
import Button from "../ui/buttons/Button"

function App() {
  return <div className="App">
    <Button bgcolor="red" color='white'>Confirm</Button>
    <Button bgcolor="red" color='white' children="Deny"></Button>
    <Button style={{backgroundColor:"white"}}><img src="/im1.png"/>Search</Button>
    <Button bgcolor="red" color='black' children="Other"></Button>
    {/*<Button style={{color:"white"}}>Not a button btw</Button>*/}
    </div>
}

export default App