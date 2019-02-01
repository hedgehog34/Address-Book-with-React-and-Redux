import { ADD_CONTACT, REMOVE_CONTACT, EDIT_CONTACT } from "./actionTypes";

export const addContact = id => {
  return {
    type: ADD_CONTACT,
    id
  };
};

export const deleteContact = id => {
  return {
    type: REMOVE_CONTACT,
    id
  };
};

export const editContact = (id, fieldName, fieldValue) => {
  return {
    type: EDIT_CONTACT,
    id,
    name: fieldName,
    value: fieldValue
  };
};
