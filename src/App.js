import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Post from "./components/Post";
import GlobalStyles from "./components/GlobalStyles";
import Footer from "./components/Footer";

import { db } from "./firebase/config";

function App() {
  // eslint-disable-next-line
  const [posts, setPosts] = useState([
    // {
    //   username: "anonymous",
    //   imageUrl: "https://placeimg.com/640/480/tech",
    //   caption: "awesome tech",
    // },
    // {
    //   username: "anonymous",
    //   imageUrl: "https://placeimg.com/640/480/animals",
    //   caption: "such lovely animals",
    // },
    // {
    //   username: "anonymous",
    //   imageUrl: "https://placeimg.com/640/480/nature",
    //   caption: "getting back to nature",
    // },
  ]);

  const [selectedImg, setSelectedImg] = useState(null);

  // useEffect -> runs code based ona condition
  useEffect(() => {
    // this is where the code runs
    db.collection("posts").onSnapshot(snapshot => {
      // every time a new post is added, this code runs
      setPosts(snapshot.docs.map(doc => doc.data()));
    });
  }, []);

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
      <Footer />
    </div>
  );
}

export default App;
