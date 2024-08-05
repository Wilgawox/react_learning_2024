import React from "react";
import Button from "../ui/buttons/Button"

function App() {
  return <div className="App">
    <Button>Confirm</Button>
    <Button children="Deny"></Button>
    <Button style={{backgroundColor:"white"}}><img src="/im1.png"/>Search</Button>
    <Button children="Other"></Button>
    {/*Commentaire OwO*/}
    <Button style={{color:"white"}}>Not a button btw</Button>
    </div>
}

export default App
