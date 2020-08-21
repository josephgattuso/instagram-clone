import React, { useState } from "react";
import Header from "./components/Header";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Post from "./components/Post";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  // eslint-disable-next-line
  const [posts, setPosts] = useState([
    {
      username: "joeetuso",
      imageUrl: "https://placeimg.com/640/480/animals",
      caption: "such a lovely animal",
    },
    {
      username: "joeetuso",
      imageUrl: "https://placeimg.com/640/480/tech",
      caption: "awesome tech",
    },
    {
      username: "joeetuso",
      imageUrl: "https://placeimg.com/640/480/nature",
      caption: "getting back to nature",
    },
  ]);
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="app">
      <GlobalStyles />
      <Header />
      <UploadForm />
      {posts.map(post => (
        <Post
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
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
