import React, { useState, Fragment } from "react";

import { AddressSelectList } from "./AddressSelectList";
import { Editor } from "./Editor";

export const PostCodeEditor = ({ value, handleChange, isEdited }) => {
  const [values, setValues] = useState([]);

  const handleAddressSelection = event => {
    const newValues = event.target.value.split(",").map(str => str.trimStart());
    setValues(newValues);
  };

  const addressEditors = values.length !== 0 && (
    <Fragment>
      <Editor
        name="address1"
        value={values[0]}
        handleChange={handleChange}
        isEdited={isEdited}
      />
      <Editor
        name="address2"
        value={values[1]}
        handleChange={handleChange}
        isEdited={isEdited}
      />
      <Editor
        name="city"
        value={values[2]}
        handleChange={handleChange}
        isEdited={isEdited}
      />
      <Editor
        name="county"
        value={values[3]}
        handleChange={handleChange}
        isEdited={isEdited}
      />
    </Fragment>
  );

  return (
    <Fragment>
      <Editor
        name="postcode"
        value={value}
        handleChange={handleChange}
        isEdited={isEdited}
      />
      <AddressSelectList
        postcode={value}
        isEdited={isEdited}
        handleAddressSelection={handleAddressSelection}
      />
      {addressEditors}
    </Fragment>
  );
};
