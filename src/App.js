import React, { useState } from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("G-MLZF68H9M9");
  ReactGA.pageview("/firegram");
}

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <initializeReactGA />
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
