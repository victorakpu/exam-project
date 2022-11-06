import React from "react";
import {Link} from "react-router-dom"
const About = () => {
  return (
    <div className="about">
      <p>
        semester of Alt School Africa, School of Engineering, Front end
        development This is a project done for the second semester
      </p>
      <Link className="link" to={`/`}>home</Link>
    </div>
  );
};

export default About;
