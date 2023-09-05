"use client";
// components/ColorPicker.tsx
import React, { useState, useEffect } from "react";

interface ColorPickerProps {
  initialColor: string;
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  initialColor,
  onColorChange,
}) => {
  const [currentColor, setCurrentColor] = useState(initialColor);
  const [colorFormat, setColorFormat] = useState("HEX");

  useEffect(() => {
    onColorChange(currentColor);
  }, [currentColor, onColorChange]);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentColor(event.target.value);
  };

  const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColorFormat(event.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="color"
        placeholder={`Enter ${colorFormat} color`}
        value={currentColor}
        onChange={handleColorChange}
        className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none"
      />

      {/* <div className="mb-2">
        <select
          value={colorFormat}
          onChange={handleFormatChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
        >
          <option value="HEX">HEX</option>
          <option value="RGB">RGB</option>
          <option value="HSL">HSL</option>
        </select>
      </div> */}

      <div className="mb-2">
        <div
          className="w-16 h-16 rounded-lg border border-gray-300"
          style={{ backgroundColor: currentColor }}
        ></div>
      </div>

      <p>Selected Color: {currentColor}</p>
    </div>
  );
};

export default ColorPicker;

// ! TODO:
// select change value change on display
