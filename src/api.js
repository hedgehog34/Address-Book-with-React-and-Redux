import axios from "axios";

const KEY = "iddqd";

// I didn't manage to find in postcodes.io documentation the way to get an addresses for supplied postcode
// I've used ideal-postcodes instead, which is paid service and allows for limited testing
export default axios.create({
  // baseURL: `https://api.postcodes.io/postcodes/`,
  baseURL: "https://api.ideal-postcodes.co.uk/v1/",
  params: {
    api_key: KEY
  }
});
