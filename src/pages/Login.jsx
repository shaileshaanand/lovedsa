import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { useStats } from "../hooks/useStats";
import { useQuery } from "react-query";

function Login() {
  const [username, setUsername] = useState("");

  const onSuccess = (data) => {
    if (data.info) {
      console.log("rf", data);
      localStorage.setItem("gfg_username", data.info.username);
      window.location.reload();
    } else {
      console.log("Invalid username");
      toastContent.current.innerHTML = `${username} is not a valid username`;
      toast.current.style.display = "flex";
      setTimeout(() => {
        toast.current.style.display = "none";
      }, 5000);
    }
  };
  const enabled = false;

  const { data, isLoading, error, refetch, isFetching } = useStats(username, {
    onSuccess,
    enabled,
  });

  const toast = useRef();
  const toastContent = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };
  console.log(data);
  return (
    <div className="font-primary relative">
      <Navbar />
      <p className="font-primary font-bold text-2xl mt-3 mx-3 text-center">
        Please Login with your GeeksForGeeks id
      </p>
      <div
        className="bg-red-100 rounded-lg py-3 px-4 text-base text-red-700 inline-flex items-center absolute top-5 right-5"
        role="alert"
        ref={toast}
        style={{ display: "none" }}
        onClick={() => {
          toast.current.style.display = "none";
        }}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times-circle"
          className="w-4 h-4 mr-2 fill-current"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
          ></path>
        </svg>
        {/* Username {username} does not exist, please try again. */}
        <span ref={toastContent}></span>
      </div>
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
            disabled={isLoading || isFetching || username === ""}
            className=" bg-secondary text-white p-1 rounded-md h-10 flex items-center justify-center"
            onClick={handleSubmit}
          >
            {isLoading || isFetching ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
