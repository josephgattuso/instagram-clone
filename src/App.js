import React from "react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("G-MLZF68H9M9");
  ReactGA.pageview("/firegram");
}

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
