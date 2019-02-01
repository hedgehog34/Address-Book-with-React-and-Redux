import React, { Fragment } from "react";

import { AddressSelectList } from "./AddressSelectList";
import { Editor } from "./contact/Editor";

export const PostCodeEditor = ({ value, handleChange, isEdited }) => {
  return (
    <Fragment>
      <Editor
        name="postcode"
        value={value}
        handleChange={handleChange}
        isEdited={isEdited}
      />
      <AddressSelectList postcode={value} />
    </Fragment>
  );
};
