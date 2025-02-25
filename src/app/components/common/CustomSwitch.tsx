import React from "react";

interface CustomSwitchProps {
  selected: boolean;
  onToggle: () => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ selected, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative w-12 h-7 flex items-center rounded-full ${
        selected ? "bg-[#1ABC9C]" : "bg-gray-400"
      } p-1 transition-colors duration-200`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
          selected ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
};

export default CustomSwitch;
