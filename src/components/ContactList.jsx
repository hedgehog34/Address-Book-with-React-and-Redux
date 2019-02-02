import React, { Fragment } from "react";
import { connect } from "react-redux";

import { addContact, deleteContact, editContact } from "../redux/actions";

import { ContactItem } from "./ContactItem";
import { guidGenerator } from "../helpers";

// ContactList is a top level component which is being connected to the store with react-redux connect function
// and is also the place where mapping redux's dispatchers & state to components' props, is happening
const ContactList = ({
  contactList,
  addContact,
  deleteContact,
  editContact
}) => {
  // List of contacts is being created here by mapping over the data passed from the Provider, which gets it from the Redux store
  const list = contactList.map((c, i) => {
    // This is check if component is a newly created, enables immediate editing the contact, which by default is switched off
    const edited =
      c.name === "" &&
      c.address1 === "" &&
      c.address2 === "" &&
      c.address2 === "" &&
      c.address2 === "" &&
      c.address2 === "" &&
      c.address2 === "";

    // <ContactList passes down some of the dispatched redux actions to the <ContactItem /> child component
    // along with the bits of the data needed to build a <ContactItem/>
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

  // We need a button for adding new
  return (
    <Fragment>
      <button onClick={() => addContact(guidGenerator())}>
        Add New Contact
      </button>
      <div>{list}</div>
    </Fragment>
  );
};

// Mapping the store data state to the props
const mapStateToProps = state => ({
  contactList: state.contactList
});

// Mapping the actions from the redux to the component props
const mapDispatchToProps = dispatch => ({
  addContact: id => dispatch(addContact(id)),
  deleteContact: id => dispatch(deleteContact(id)),
  editContact: (id, name, value) => dispatch(editContact(id, name, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);
