import React, { useState, Fragment } from "react";

import { AddressSelectList } from "./AddressSelectList";
import { Editor } from "./Editor";

// AddressEditor is a set of Editors related to address
// It passes down the typed postocde to the AddressSelectList, whic does the postcode lookup
// then checks and build the option list of all available addresses and if address selected
// it displays and populates address related fields
export const AddressEditor = ({
  postcode,
  address1,
  address2,
  city,
  county,
  handleChange,
  isEdited
}) => {
  const [values, setValues] = useState([address1, address2, city, county]);

  // Callback function passed to the <AddressSelectList/>,
  // it creates an array based on the info from the child and updates the state accordingly
  const handleAddressSelection = event => {
    const newValues = event.target.value.split(",").map(str => str.trimStart());
    setValues(newValues);
  };

  const addressEditors = values.find(val => val !== "") && (
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
        value={postcode}
        handleChange={handleChange}
        isEdited={isEdited}
      />
      <AddressSelectList
        postcode={postcode}
        isEdited={isEdited}
        handleAddressSelection={handleAddressSelection}
      />
      {addressEditors}
    </Fragment>
  );
};
