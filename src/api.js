import axios from "axios";

export default axios.create({
  // baseURL: `https://api.postcodes.io/postcodes/`,
  baseURL: "https://api.ideal-postcodes.co.uk/v1/",
  params: {
    api_key: "iddqd"
  }
});
