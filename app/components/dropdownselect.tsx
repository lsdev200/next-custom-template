import React, { useState, useEffect, useRef } from "react";

interface DropdownSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (selectedValue: string) => void;
  error?: string;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  label,
  options,
  value,
  onChange,
  error,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close the dropdown when clicking outside of it
    const handleOutsideClick = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    // Filter options based on the search term
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredOptions(filtered);
  }, [searchTerm, options]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionClick = (selectedValue: string) => {
    setSearchTerm("");
    onChange(selectedValue);
    setDropdownOpen(false);
  };

  return (
    <div className="mb-4" ref={dropdownRef}>
      <label className="block font-semibold mb-2">{label}</label>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          onClick={() => setDropdownOpen(true)}
          className="bg-gray-200 p-2 rounded w-full focus:outline-none"
        />
        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-md overflow-y-auto max-h-60">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                >
                  {option}
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
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default DropdownSelect;
