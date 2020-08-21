import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import AddIcon from "@material-ui/icons/Add";

const Form = styled.form`
  margin: 1rem auto;
  text-align: center;
  & input {
    height: 0;
    opacity: 0;
    width: 0;
  }
  & label {
    padding-top: 1rem;
  }
`;
const ToolTip = styled.p`
  font-size: 1rem;
  font-style: italic;
  padding: 0 0 1rem;
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
      <ToolTip>Add a photo to the collection:</ToolTip>
      <label>
        <input type="file" onChange={handleChange} />
        <AddIcon
          color="secondary"
          style={{
            cursor: `pointer`,
            border: `2px solid`,
            borderRadius: `50%`,
            height: `2.5rem`,
            width: `2.5rem`,
          }}
        />
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
