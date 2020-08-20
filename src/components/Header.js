import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background: white;
  border-bottom: 1px solid lightgray;
  padding: 20px;
  object-fit: contain;
`;

const Logo = styled.img`
  object-fit: contain;
  width: 3rem;
`;

export default function () {
  return (
    <Header>
      <h1>
        <a href="/firegram">
          <Logo src="https://josephgattuso.github.io/firegram/logo192.png" />
        </a>
      </h1>
    </Header>
  );
}
