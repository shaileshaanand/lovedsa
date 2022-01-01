import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Login() {
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://geeks-for-geeks-api.vercel.app/${username}`, {
      mode: "no-cors",
    })
      .then((res) => {
        // console.log(res.text());
        return res.text();
      })
      .then((result) => {
        console.log(result);
        // res.info
        //   ? localStorage.setItem("gfg_username", username)
        //   : alert("User not found");
      });
    // localStorage.setItem("gfg_username", username);
    // window.location.reload();
  };
  return (
    <div>
      <Navbar />
      <div className="rounded-xl bg-white font-primary text-xl p-3 m-4">
        {/* <p className="text-center">Login</p> */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="GeeksForGeeks Username"
            className="p-1.5 border-2 border-secondary rounded-md text-base"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="block bg-secondary text-white p-1 rounded-md"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
