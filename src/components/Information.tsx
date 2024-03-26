"use client"
import React from 'react'
import {Welcome} from '../lib/types'

interface InformationProps{
    data: Welcome[]
}

const Information: React.FC<InformationProps> = ({data}) => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-800">
        {data.map((item)=>(
            <div key={item.id} className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-white">CATEGORY</span>
              <span className="mt-1 text-gray-500 text-sm">{item.message_date}</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-white title-font mb-2">{item.sender_name}</h2>
              <p className="leading-relaxed">{item.message_text}.</p>
              <a className="text-green-400 inline-flex items-center mt-4">{item.platform}
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      
    </div>
  </div>
</section>
  )
}

export default Information

