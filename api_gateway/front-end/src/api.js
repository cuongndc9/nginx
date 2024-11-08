// call api for specific service by pass service api url

import axios from "axios";

const getData = async (url) => {
  try {
    const response = await axios.get(url);
    // json
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getData;
