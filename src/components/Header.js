import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background: white;
  border-bottom: 1px solid lightgray;
  padding: 20px;
  object-fit: contain;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "Grand Hotel", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  & a {
    color: var(--textColor);
    text-decoration: none;
    &:active {
      color: var(--textColor);
    }
    &:hover {
      color: var(--textColor);
    }
    &:visited {
      color: var(--textColor);
    }
  }
`;

export default function () {
  return (
    <Header>
      <Title>
        <a href="/firegram">Firegram</a>
      </Title>
    </Header>
  );
}
