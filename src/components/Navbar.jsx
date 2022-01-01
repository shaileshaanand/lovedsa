import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between p-2 bg-secondary text-white">
      {/* <div></div> */}
      <div className="font-semibold text-3xl text-center w-full font-primary">
        LoveDSA
      </div>
      <div className="fixed right-2 my-[3px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
