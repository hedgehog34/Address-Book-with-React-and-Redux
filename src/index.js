import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import "./styles.css";

import ContactList from "./components/contact/ContactList";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ContactList />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
