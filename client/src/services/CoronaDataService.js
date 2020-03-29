import { useState, useEffect } from "react";
import axios from "axios";

const CoronaDataService = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://covid19.mathdro.id/api");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return data;
};
export default CoronaDataService;
