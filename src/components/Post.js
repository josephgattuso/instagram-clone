import React from "react";
import styled from "styled-components";
import { Avatar, makeStyles } from "@material-ui/core/";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
}));

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

export default ({ username, caption, imageUrl, profile }) => {
  const classes = useStyles();
  return (
    <Post>
      <Header>
        <Avatar
          alt={username}
          className={classes.pink}
          src={profile}
          style={{ marginRight: "10px" }}
        >
          <i className="fa fa-user" />
        </Avatar>
        <h3>{username}</h3>
      </Header>
      <Img src={imageUrl} alt="Adblocker, perhaps?" />
      <Caption>
        <strong>{username}:</strong> {caption}
      </Caption>
    </Post>
  );
};
