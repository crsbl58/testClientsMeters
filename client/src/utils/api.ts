import axios from "axios";

import { config } from "../utils/config";
 
const apiInstance = () => {
  return {
    apiAxios: axios.create({
      baseURL: `${config.api}/api`
    })
  }
}



export { apiInstance };
