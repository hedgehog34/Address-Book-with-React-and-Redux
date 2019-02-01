import React, { Fragment } from "react";
import { connect } from "react-redux";

import { addContact, deleteContact, editContact } from "../redux/actions";

import { ContactItem } from "./ContactItem";
import { guidGenerator } from "../helpers";

const ContactList = ({
  contactList,
  addContact,
  deleteContact,
  editContact
}) => {
  const list = contactList.map((c, i) => {
    const edited =
      c.name === "" &&
      c.address1 === "" &&
      c.address2 === "" &&
      c.address2 === "" &&
      c.address2 === "" &&
      c.address2 === "" &&
      c.address2 === "";

    return (
      <ContactItem
        deleteContact={deleteContact}
        editContact={editContact}
        key={c.id}
        id={c.id}
        name={c.name}
        address1={c.address1}
        address2={c.address2}
        city={c.city}
        county={c.county}
        postcode={c.postcode}
        telephone={c.telephone}
        email={c.email}
        edited={edited}
      />
    );
  });

  return (
    <Fragment>
      <button onClick={() => addContact(guidGenerator())}>
        Add New Contact
      </button>
      <div>{list}</div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  contactList: state.contactList
});

const mapDispatchToProps = dispatch => ({
  addContact: id => dispatch(addContact(id)),
  deleteContact: id => dispatch(deleteContact(id)),
  editContact: (id, name, value) => dispatch(editContact(id, name, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);
