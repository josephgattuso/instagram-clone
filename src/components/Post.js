import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import profile from "../images/avatar/1.jpg";

const Post = styled.div`
  background: white;
  border: 1px solid lightgray;
  margin-bottom: 45px;
  max-width: 640px;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  padding: 20px;
`;

const Img = styled.img`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  object-fit: contain;
  width: 100%;
`;

const Caption = styled.p`
  font-weight: normal;
  padding: 20px;
`;

export default ({ username, caption, imageUrl }) => {
  return (
    <Post>
      <Header>
        <Avatar alt={username} src={profile} style={{ marginRight: "10px" }} />
        <h3>{username}</h3>
      </Header>
      <Img src={imageUrl} alt="adblocker much?" />
      <Caption>
        <strong>{username}</strong> {caption}
      </Caption>
    </Post>
  );
};
