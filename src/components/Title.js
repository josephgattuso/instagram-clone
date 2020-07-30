import React from "react";

const Title = () => {
  return (
    <div className="title">
      <h1>
        <a href="/firegram">FireGram</a>
      </h1>
      <p>
        Add images to your collection by clicking the plus button below.{" "}
        <a
          href="https://github.com/josephgattuso/firegram"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="source code"
        >
          View Source
        </a>
      </p>
    </div>
  );
};

export default Title;
