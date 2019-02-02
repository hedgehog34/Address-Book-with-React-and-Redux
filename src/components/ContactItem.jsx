import React, { useState, Fragment } from "react";
import { string, number, oneOfType } from "prop-types";

import { Editor } from "./Editor";
import { AddressEditor } from "./AddressEditor";

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

  return (
    <Fragment>
      <div className="item">
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
          isEdited={!isEdited}
        />
        <div>
          <button
            className="contact-control"
            onClick={() =>
              isEdited ? enableEditing(false) : enableEditing(true)
            }
          >
            {isEdited ? "Finish Editing" : "Edit Contact"}
          </button>
          <button className="contact-control" onClick={() => deleteContact(id)}>
            Delete Contact
          </button>
        </div>
      </div>
    </Fragment>
  );
};

ContactItem.propTypes = propTypes;
