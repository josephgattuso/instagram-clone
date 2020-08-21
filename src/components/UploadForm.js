import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const Form = styled.form`
  margin: 30px auto 10px;
  text-align: center;
  & input {
    height: 0;
    opacity: 0;
    width: 0;
  }
  & label {
    font-size: 2.5rem;
    padding-top: 1rem;
  }
`;
const ToolTip = styled.p`
  font-size: 1rem;
  font-style: italic;
  padding: 0 0 1rem;
`;
const UploadButton = styled(Icon)`
  background: var(--primaryColor);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  &:hover {
    background: white;
    color: var(--primaryColor);
  }
`;

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = e => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <Form>
      <ToolTip>Add photos to your collection:</ToolTip>
      <label>
        <input type="file" onChange={handleChange} />
        <UploadButton fontSize="large" className="fa fa-plus-circle" />
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </Form>
  );
};

export default UploadForm;
