import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const useStyles = makeStyles(theme => ({
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
}));

const Form = styled.form`
  margin: 1rem auto;
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

const PlusCircle = styled(Icon)`
  border-radius: 100%;
  cursor: pointer;
`;

const UploadForm = props => {
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

  const classes = useStyles();

  return (
    <Form>
      <ToolTip>Add a photo to the collection:</ToolTip>
      <label>
        <input type="file" onChange={handleChange} />
        <PlusCircle
          fontSize="large"
          className={`fa fa-plus-circle ${classes.pink}`}
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
