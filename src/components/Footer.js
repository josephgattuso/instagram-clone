import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #212121;
  bottom: 0;
  color: gray;
  margin: 0 auto;
  padding: 30px 20px 50px;
  text-align: left;
  & nav {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    max-width: 900px;
    margin: 0 auto;
    .footer-col {
      flex: 1 auto;
      display: inline-flex;
      flex-direction: column;
      padding-right: 1em;
    }
  }
  & a {
    color: white;
    &:hover {
      color: gray;
    }
    &:visited {
      color: lightgray;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <nav>
        <div className="footer-col">
          <p>
            Built by{" "}
            <a
              href="https://twitter.com/joeetuso"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="social-link"
            >
              Joseph Gattuso
            </a>
          </p>
        </div>
        <p>
          <a
            href="https://github.com/josephgattuso/firegram"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="source-code"
          >
            View Source
          </a>
        </p>
      </nav>
    </FooterWrapper>
  );
};

export default Footer;
