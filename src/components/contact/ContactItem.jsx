import React, { useState, Fragment } from "react";
import { string, number, oneOfType } from "prop-types";

import { Editor } from "./Editor";
import { PostCodeEditor } from "../PostCodeEditor";

import "./styles.scss";

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
  const [isEdited, enableEditing] = useState(edited);

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
        <Editor
          name="address1"
          value={address1}
          handleChange={handleChange}
          isEdited={!isEdited}
        />
        <Editor
          name="address2"
          value={address2}
          handleChange={handleChange}
          isEdited={!isEdited}
        />
        <Editor
          name="city"
          value={city}
          handleChange={handleChange}
          isEdited={!isEdited}
        />
        <Editor
          name="county"
          value={county}
          handleChange={handleChange}
          isEdited={!isEdited}
        />
        <PostCodeEditor
          value={postcode}
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
