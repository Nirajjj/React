import { useRouteError } from "react-router-dom";
import React from "react";
const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops</h1>
      <h2>SoMeThInG gOeS WrOng!!</h2>
      <h3>
        {err.status}_{err.statusText}
      </h3>
    </div>
  );
};

export default Error;
