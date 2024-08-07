import React, { useEffect, useState } from "react";
import FlexWFirstGrow from "../layout/FlexWFirstGrow/FlexWFirstGrow";
import FlexHThirdGrow from "../layout/FlexHThirdGrow/FlexHThirdGrow";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
// import MemeSVGViewver from "../ui/MemeSVGViewver/MemeSVGViewver";
import MemeForm from "../functionnal/MemeForm/MemeForm";
import NavBar from "../ui/NavBar/NavBar";
import { MemeSVGViewer, emptyMeme } from "orsys-tjs-meme";

const App = (props) => {
  const [meme, setMeme] = useState({...emptyMeme, text:"React c'est super"});
  const[images, setImages] = useState([]);

  useEffect(()=> {fetch('http://localhost:5679/images').then((r)=>r.json()).then((arr) => setImages(arr))},[]);

  return (
    <div className="App">
      <FlexHThirdGrow>
        <Header />
        <NavBar />
        <FlexWFirstGrow>
          <MemeSVGViewer image={images.find((item)=>item.id===meme.imageId)} meme={meme} basePath="" />
          <MemeForm images={images} meme={meme}/>
        </FlexWFirstGrow>
        <div>{JSON.stringify(images).substring(1,10)}</div>
        <Footer />
      </FlexHThirdGrow>
    </div>
  );
};

export default App;
