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

    if (postcode !== prevProps.postcode) {
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
    const { data, isLoaded } = this.state;
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

    return addressesList;
  }
}
