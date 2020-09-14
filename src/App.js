import React, { useEffect, useState } from 'react';
// import { Button, Modal, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import styled from 'styled-components';

import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import OldModal from './components/OldModal';
import Post from './components/Post';
import Footer from './components/Footer';

// import { db, auth } from './firebase/config';
import { db } from './firebase/config';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    position: 'absolute',
    width: 400,
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  // const [open, setOpen] = useState(false);

  // const [username, setUsername] = useState(false);
  // const [email, setEmail] = useState(false);
  // const [password, setPassword] = useState(false);

  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(
        snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  // const signUp = event => {
  //   event.preventDefault();

  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch(error => alert(error.message));
  // };

  // const Form = styled.form`
  //   display: flex;
  //   flex-direction: column;
  // `;

  return (
    <div className="app">
      <GlobalStyles />

      {/* <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <Form>
            <center>
              <img
                alt=""
                src="https://josephgattuso.github.io/firegram/logo192.png"
                width="48px"
              />
            </center>
            <Input
              onChange={e => setUsername(e.target.value)}
              placeholder="username"
              type="text"
              value={username}
            />
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>
              Sign Up
            </Button>
          </Form>
        </div>
      </Modal> */}

      <Header />

      {/* <Button onClick={() => setOpen(true)}>Sign-up</Button> */}

      <UploadForm />

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}

      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <OldModal selectedImg={selectedImg} setSelectedImg={setSelectedImg}>
          <div style={modalStyle} className={classes.paper} />
        </OldModal>
      )}

      <Footer />
    </div>
  );
}

export default App;
