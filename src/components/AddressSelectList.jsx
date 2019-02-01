import React, { Component, Fragment } from "react";
import axios from "axios";

export class AddressSelectList extends Component {
  state = {
    isLoaded: false,
    data: []
  };

  componentDidUpdate(prevProps) {
    const { postcode } = this.props;

    if (postcode !== prevProps.postcode) {
      axios
        .get(
          `https://api.ideal-postcodes.co.uk/v1/postcodes/${postcode}?api_key=ak_jrmc1crlelSJE7fD7dksAfLqJ2K4B`
        )
        .then(res => {
          const result = res.data.result;
          this.setState({
            isLoaded: true,
            data: result
          });
        });
      // .catch(error => {
      //   console.log("error", error.response);
      //   this.setState({
      //     isLoaded: true,
      //     error: error.response,
      //     data: []
      //   });
      // });
    }
  }

  render() {
    const { data, isLoaded } = this.state;

    // console.log(data);

    const list = data.map(pc => {
      return {
        address1: pc.line_1,
        address2: pc.line_2,
        city: pc.post_town,
        county: pc.county
      };
    });

    const buildAddressList = () => {
      const listOfValues = list.map((l, i) => {
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
        ...listOfValues
      ];
    };

    const addressesList = data.length !== 0 && (
      <Fragment>
        <label className="italic" htmlFor="adress-select">
          Find your address:
          <select id="adress-select">{buildAddressList()}</select>
        </label>
      </Fragment>
    );

    // console.log(addressesList);

    return addressesList;
  }
}
