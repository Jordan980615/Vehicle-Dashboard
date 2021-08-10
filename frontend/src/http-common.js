import axios from "axios";

export default axios.create({
 baseURL: "http://mongorestapi-env.eba-5rrgzkpc.ca-central-1.elasticbeanstalk.com/",
//  baseURL: " http://localhost:8000/",

  headers: {
    "Content-type": "application/json"
  }
});