import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #212121;
  bottom: 0;
  color: gray;
  margin: 0 auto;
  padding: 30px 20px 50px;
  position: absolute;
  text-align: left;
  width: 100%;
  & nav {
    align-items: flex-start;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    max-width: 900px;
    .footer-col {
      display: inline-flex;
      flex-direction: column;
      flex: 1 auto;
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
            Built by{' '}
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
