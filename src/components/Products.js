import React, { useState } from "react";

const Products = () => {
    const [isOpen, setIsOpen ] = useState(false)

    return (
        <div className="relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            Open Dropdown
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <p>Option 1</p>
              <p>Option 2</p>
              <p>Option 3</p>
            </div>
          )}
        </div>
      );
};

export default Products;