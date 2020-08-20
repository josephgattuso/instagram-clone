import React, { useState } from "react";
import Header from "./components/Header";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="app">
      <GlobalStyles />
      <Header />
      <UploadForm />
      {/* Posts */}
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <footer>
        <a
          href="https://github.com/josephgattuso/firegram"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="source code"
        >
          View Source
        </a>
      </footer>
    </div>
  );
}

export default App;
