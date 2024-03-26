"use client"
import React from 'react'
import {Welcome} from '../lib/types'
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";


const Information: React.FC = () => {
  const axios = require('axios');

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
  }, []);

  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-800">
        {apiData.map((item)=>(
            <div key={item.id} className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">CATEGORY</span>
              <span className="mt-1 text-gray-500 text-sm">{item.message_date}</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">{item.sender_name}</h2>
              <p className="leading-relaxed ">{item.message_text}.</p>
              <h2 className='text-xl font-medium text-white title-font mb-2'>Received number</h2>
              <p className='leading-relaxed text-green-500'>{item.received_number}</p>
              <h2 className='text-xl font-medium text-white title-font mb-2'>Sender number</h2>
              <p className='leading-relaxed text-red-500'>{item.sender_number}</p>
              
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200"><span>{item.platform}</span><div className="ml-1 transition group-hover:translate-x-1"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
            </div>
          </div>
        ))}
      
    </div>
  </div>
</section>
  )
}

export default Information

