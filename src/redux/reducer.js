import { combineReducers } from "redux";

import { ADD_CONTACT, REMOVE_CONTACT, EDIT_CONTACT } from "./actionTypes";

const initialState = [
  {
    id: 1,
    name: "Yanek",
    address1: "Prime Minister & First Lord Of The Treasury",
    address2: "10 Downing Street",
    city: "London",
    county: "LONDON",
    postcode: "SW1A 2AA",
    telephone: 1234567890,
    email: "rur@gg.com"
  },
  {
    id: 2,
    name: "Diame",
    address1: "123",
    address2: "West Ham Road",
    city: "Warsaw",
    county: "Mazowieckie",
    postcode: "39-460",
    telephone: 1234567890,
    email: "qqq@pp.vom"
  }
];

export const contactList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContact = {
        id: action.id,
        name: "",
        address1: "",
        address2: "",
        city: "",
        county: "",
        postcode: "",
        telephone: "",
        email: ""
      };
      return [newContact, ...state];

    case REMOVE_CONTACT:
      return state.filter(contact => contact.id !== action.id);

    case EDIT_CONTACT:
      return state.map(el => {
        return {
          ...el,
          [action.name]: el.id === action.id ? action.value : el.value
        };
      });

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contactList
});
