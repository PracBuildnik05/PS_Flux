import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Plural Sight Administration</h1>
      <p>React, Redux , Flux ,and React-Router for ultra-reponsive </p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;

//<Link to ="about" className="btn btn-primary"></Link>    <a href="/about">About</a>
