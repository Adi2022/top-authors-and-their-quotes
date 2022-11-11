import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
const Dashboard = () => {
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const API = "https://dummyjson.com/quotes";

  const fetchAPIData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setAuthorQuotes(data.quotes);
  };

  useEffect(() => {
    fetchAPIData(API);
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl  p-3 sm:px-6 lg:px-8">
        <div className="h-15 mb-3 w-32">
          <input
            className="mx-20 p-2  m-20 absolute inset-x-0 top-0 h-16"
            type="text"
            name="name"
            value={searchInput}
            placeholder="Search Author By Name"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="mx-auto max-w-2xl   py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">
            Best Quotes from Top Authors
          </h2>

          <div className="mt-2 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {authorQuotes
              .filter((value) => {
                if (searchInput === "") {
                  return value;
                } else if (
                  value.author.toLowerCase().includes(searchInput.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((items) => (
                <div key={items.id} className="group relative m-2">
                  <div className="relative h-50 w-full  overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2  m-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 p-4">
                    <p className="text-base font-semibold text-gray-900 whitespace-normal">
                      <h4 className="mb-2  underline decoration-sky-600 hover:decoration-blue-200">
                        Quote
                      </h4>
                      {items.quote}
                    </p>

                    <h3 className="mt-6 text-sm text-gray-500">
                      <Link to="/">
                        <button
                          className="text-white p-2 font-bold "
                          style={{
                            backgroundColor: "#312e81",
                            borderRadius: "100px",
                          }}
                        >
                          {items.author}
                        </button>
                      </Link>
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

export default Dashboard;
