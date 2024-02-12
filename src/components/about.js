import UserClass from "./userClass";
import React from "react";
const About = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-center">
        About me and this website
      </h1>
      <UserClass name={"Niraj Parab"} />
    </div>
  );
};

export default About;
