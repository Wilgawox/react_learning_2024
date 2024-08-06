import React, { useEffect, useState } from "react";
import FlexWFirstGrow from "../layout/FlexWFirstGrow/FlexWFirstGrow";
import FlexHThirdGrow from '../layout/FlexHThirdGrow/FlexHThirdGrow'
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
import MemeSVGViewver from "../ui/MemeSVGViewver/MemeSVGViewver";
import MemeForm from "../functionnal/MemeForm/MemeForm";
import NavBar from "../ui/NavBar/NavBar";

const App = (props) => {
  return (
    <div className="App">
      <FlexHThirdGrow>
        <Header />
        <NavBar />
        <FlexWFirstGrow>
          <MemeSVGViewver />
          <MemeForm />
        </FlexWFirstGrow>
        <Footer />
      </FlexHThirdGrow>
    </div>
  );
};

export default App;
