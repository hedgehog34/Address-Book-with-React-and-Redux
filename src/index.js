import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import "./styles.css";

import ContactList from "./components/ContactList";

// Start of application, whereI use a React-Redux Provider which allows for passing down the redux store
// to the <ContactList/> component
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContactList />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
