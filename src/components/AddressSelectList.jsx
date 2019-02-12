import React, { Component, Fragment } from "react";

import API from "../api";
// This component receives handleAddressSelection callback which allows its parent to update address
// data. This is classical React class component with state and componentDidUpdate lifecycle method used
// for making a call to the postcodes api (api.ideal-postcodes)
export class AddressSelectList extends Component {
  state = {
    error: null,
    isLoaded: false,
    data: []
  };

  componentDidUpdate(prevProps) {
    const { postcode } = this.props;

    const postcodeRegExp = /[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/gi;
    const isValidPostcodeFormat = postcode && postcode.match(postcodeRegExp);

    if (isValidPostcodeFormat && postcode !== prevProps.postcode) {
      console.log("I hit an API");
      API.get(`postcodes/${postcode}`)
        .then(res => {
          const result = res.data.result;
          this.setState({
            isLoaded: true,
            data: result
          });
        })
        .catch(error => {
          console.log("error", error.response);
          this.setState({
            isLoaded: true,
            error: error.response,
            data: []
          });
        });
    }
  }

  render() {
    const { data, isLoaded, error } = this.state;
    const { isEdited, handleAddressSelection } = this.props;

    // this transforms the received data from api into the array of objects which can be reused
    // for building the option list below
    const list = data.map(pc => {
      return {
        address1: pc.line_1,
        address2: pc.line_2,
        city: pc.post_town,
        county: pc.county
      };
    });

    const buildAddressList = () => {
      const listOfOptions = list.map((l, i) => {
        const value = `${l.address1}, ${l.address2}, ${l.city}, ${l.county}`;
        return (
          <option key={i} value={value}>
            {value}
          </option>
        );
      });

      return [
        <option key="choice" value="">
          --Please choose an address--
        </option>,
        ...listOfOptions
      ];
    };

    const addressesList = data.length !== 0 && (
      <Fragment>
        <label className="italic" htmlFor="adress-select">
          Find your address:
          <select
            id="adress-select"
            disabled={isEdited}
            onChange={handleAddressSelection}
          >
            {buildAddressList()}
          </select>
        </label>
      </Fragment>
    );

    const postcodeNotFound = (
      <label className="italic" htmlFor="postcode-error">
        &nbsp;
        <p id="postcode-error" className="italic postcode-error">
          Postcode Not Found
        </p>
      </label>
    );

    return error && error.data.code === 4040 ? postcodeNotFound : addressesList;
  }
}
