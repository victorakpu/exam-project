import React from "react";
import { Link } from "react-router-dom";
const NoMatch = () => {
  return (
    <div className="e-404">
      <div>
        Something Really went wrong here, please press the home button to go
        back
      </div>
      <Link className="link-e" to={`/`}>
        Home
      </Link>
    </div>
  );
};

export default NoMatch;
