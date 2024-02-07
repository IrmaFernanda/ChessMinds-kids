import React from 'react';

export default function TextBox({ value }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="border-none bg-transparent p-2 mb-2 focus:outline-none"
      >
        {value}
      </span>
    </div>
  );
}