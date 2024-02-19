import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="not-found">
      <div className="overlay">
        <h1> {err.status} </h1>
        <h2> {err.statusText}</h2>
        <h2> {err.data} </h2>
        <p>Oops! The page you are looking for might be under construction or does not exist.</p>
        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  );
};

export default Error;
