
import Image from "next/image";
import Information from '../components/Information'
import {Welcome} from '../lib/types'
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";



export default function Home() {
  {/*const axios = require('axios');

const [apiData, setApiData] = useState<Welcome[]>([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response: AxiosResponse<Welcome[]> = await axios.get('http://www.app.readychatai.com/data');
        setApiData(response.data);
        console.log('Data from API:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi();
  }, []);*/}

  return (
    <div>
      <Information  />
    </div>
  );
}
