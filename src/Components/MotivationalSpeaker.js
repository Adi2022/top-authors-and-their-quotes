import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import MotivationData from "./MotivationData";
const MotivationalSpeaker = () => {
  useEffect(() => {}, []);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl  p-3 sm:px-6 lg:px-8">
        <div className="h-15 w-32">
          <input
            className="mx-20 p-2  m-20 absolute inset-x-0 top-0 h-16"
            type="text"
            name="name"
            value=""
            placeholder="Search Author By Name"
            // onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="mx-auto max-w-2xl   py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">
            PUBLIC SPEAKERS IN INDIA
          </h2>

          <div className=" space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {MotivationData.map((items) => (
              <div key={items.id} className="group relative m-2 p-2">
                <div className="relative  w-full m-4  rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2  m-2 sm:aspect-h-64 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 p-4" style={{height:"20rem"}}>
                  <p className="text-base font-semibold text-gray-900 whitespace-normal">
                    <h4 className="mb-2  underline decoration-sky-600 hover:decoration-blue-200">
                      Motivational Speaker
                    </h4>
                    {items.name}
                  </p>
                  <img src={items.imageURL} style={{ height: "40%" }} />
                  <h3 className="mt-2 text-sm text-gray-500">
                    
                      <p>{items.description}</p>
                   
                  </h3>
                  <h3 className="mt-2 text-sm text-gray-500">
                    <a href="https://www.indianspeakerbureau.com/speaker_profile/vivek-bindra" target="_blank">
                    <button>Read More</button>
                    </a>
                
                </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default MotivationalSpeaker;
