import React, { useState } from "react";
import { string, number, oneOfType } from "prop-types";

import { Editor } from "./Editor";
import { AddressEditor } from "./AddressEditor";
import { zip } from "../helpers";

import "./styles.scss";

// <ContactItem is a component composed with set of Editors, where user can add essential information to build the <ContactItem/>
// propTypes check, as a good practice for checking up the type of information passed to the component
const propTypes = {
  id: oneOfType([number, string]),
  name: string,
  ainputress1: oneOfType([number, string]),
  ainputress2: string,
  city: string,
  county: string,
  postcode: string,
  telephone: oneOfType([number, string]),
  email: string
};

export const ContactItem = ({
  deleteContact,
  editContact,
  id,
  name,
  address1,
  address2,
  city,
  county,
  postcode,
  telephone,
  email,
  edited = false
}) => {
  // Experimenting with new React feature Hooks, which provides way for persisting state in functional component,
  // which up to this point was reserved only for React classes. value passed to the useState function call is an initial state value for
  // state variable 'isEdited'
  const [isEdited, enableEditing] = useState(edited);

  // Generalized callback for updating the state of each editor passed down to Editors as prop
  const handleChange = e => {
    editContact(id, e.target.name, e.target.value);
  };

  // Callback function passed to the <AddressSelectList/>,
  // it creates an array based on the info from the child and updates the state accordingly
  const handleAddressSelection = event => {
    // <TODO:>find a bug of not updating the address fields after action</TODO:>
    const newValues = event.target.value.split(",").map(str => str.trimStart());
    const zipped = zip(["address1", "address2", "city", "county"], newValues);
    zipped.forEach(arr => editContact(id, arr[0], arr[1]));
  };

  const handleEdit = e => {
    e.preventDefault();
    isEdited ? enableEditing(false) : enableEditing(true);
  };

  return (
    <div className="ui segment">
      <Editor
        name="name"
        value={name}
        handleChange={handleChange}
        isEdited={!isEdited}
      />
      <Editor
        name="email"
        value={email}
        handleChange={handleChange}
        isEdited={!isEdited}
      />
      <Editor
        name="telephone"
        value={telephone}
        handleChange={handleChange}
        isEdited={!isEdited}
      />
      <AddressEditor
        postcode={postcode}
        address1={address1}
        address2={address2}
        city={city}
        county={county}
        handleChange={handleChange}
        handleAddressSelection={handleAddressSelection}
        isEdited={!isEdited}
      />
      <div className="ui buttons">
        <button
          className={`ui ${isEdited ? "primary" : ""} button`}
          onClick={handleEdit}
        >
          {isEdited ? "Finish Editing" : "Edit Contact"}
        </button>
        <button
          className="ui negative button"
          onClick={() => deleteContact(id)}
        >
          Delete Contact
        </button>
      </div>
    </div>
  );
};

ContactItem.propTypes = propTypes;
