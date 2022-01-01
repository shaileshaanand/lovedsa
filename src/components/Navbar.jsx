import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("gfg_username");
    window.location.reload();
  };
  return (
    <>
      <div className="flex justify-between p-2 bg-secondary text-white">
        {/* <div></div> */}
        <div className="font-semibold text-3xl text-center w-full font-primary">
          LoveDSA
        </div>
        <button
          className="fixed right-2 my-[3px]"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className="p-2 bg-secondary border-y-secondarydark text-white border-y-2 font-primary">
          <ul>
            <li className="text-center">
              <a href="#" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
