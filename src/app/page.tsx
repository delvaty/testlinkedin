import Image from "next/image";
import Information from '../components/Information'
import {Welcome} from '../lib/types'
import { useState } from "react";

export default function Home() {
  const axios = require('axios');
  

const fetchDataFromApi = async () => {
  try {
    const response = await axios.get('https://www.dev.readychatai.com/messages_json?format=api');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};


fetchDataFromApi()
  .then(data => {
    console.log('Data from API:', data);
    
  })
  .catch(error => {
    
    console.error('Failed to fetch data:', error);
  });

  return (
    <div>
      <Information/>
    </div>
  );
}
