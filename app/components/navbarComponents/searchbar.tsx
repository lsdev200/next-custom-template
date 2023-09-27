"use client";

// components/SearchBar.tsx
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  // Function to handle input changes and fetch search results
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    // Simulate fetching search results (replace with actual API call)
    // For this example, we'll just generate some dummy results
    const dummyResults = [""];

    setResults(
      dummyResults.filter((result) =>
        result.toLowerCase().includes(newQuery.toLowerCase())
      )
    );
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-64 py-2 pl-8 pr-4 border rounded-full focus:outline-none focus:border-[#000000] ml-1"
        value={query}
        onChange={handleInputChange}
      />
      <BiSearchAlt2 className="h-6 w-6 text-gray-400 absolute left-3 top-2.5 " />
      {query && (
        <div className="absolute w-64 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-y-auto max-h-60">
          {results.length > 0 ? (
            results.map((result, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {result}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              No Data Found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
