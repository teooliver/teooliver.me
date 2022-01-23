import React from "react";
import SkillsStyles from "./styledComponents/SkillsSytles";
import html5_logo from "../images/html5.png";
import ccs3_logo from "../images/css3.png";
import react_logo from "../images/react.png";
import redux_logo from "../images/redux-logo.png";
import bootstrap_logo from "../images/bootstrap.png";
import jquery_logo from "../images/jquery.png";
import javascript_logo from "../images/javascript.png";
import node_logo from "../images/nodejs.png";
import mongodb_logo from "../images/mongodb.png";
import heroku_logo from "../images/heroku.png";
import netlify_logo from "../images/netlify_logo.png";
import github_logo from "../images/github.png";
import typescript_logo from "../images/typescript-logo.svg";
import gatsby_logo from "../images/gatsby_logo.png";

const Skills = () => {
  return (
    <>
      <SkillsStyles>
        <div className="card">
          <div className="card-header">FrontEnd</div>
          <div className="card-body">
            <div className="text-center">
              <img className="badge-img" src={javascript_logo} alt="" />
              Javascript
            </div>
            <div className="text-center">
              <img className="badge-img" src={typescript_logo} alt="" />
              Typescript
            </div>
            <div className="text-center">
              <img className="badge-img" src={html5_logo} alt="" />
              Html5
            </div>
            <div className="text-center">
              <img className="badge-img" src={ccs3_logo} alt="" />
              CSS3
            </div>

            <div className="text-center">
              <img className="badge-img" src={react_logo} alt="" />
              React
            </div>
            <div className="text-center">
              <img
                style={{ marginBottom: "11px", paddingTop: "22px" }}
                className="badge-img"
                src={redux_logo}
                alt=""
              />
              Redux
            </div>
            <div className="text-center">
              <img className="badge-img" src={gatsby_logo} alt="" />
              Gatsby
            </div>
            {/* <div className="text-center">
              <img className="badge-img" src={bootstrap_logo} alt="" />
              Bootstrap
            </div>
            <div className="text-center">
              <img className="badge-img" src={jquery_logo} alt="" />
              jQuery
            </div> */}
          </div>
        </div>
      </SkillsStyles>
      <SkillsStyles>
        <div className="card">
          <div className="card-header">BackEnd</div>
          <div className="card-body">
            <div className="text-center">
              <img className="badge-img" src={javascript_logo} alt="" />
              Javascript
            </div>
            <div className="text-center">
              <img className="badge-img" src={node_logo} alt="" />
              Node Js
            </div>
            <div className="text-center">
              <img className="badge-img" src={mongodb_logo} alt="" />
              MongoDb
            </div>

            <div className="text-center">
              <img className="badge-img" src={heroku_logo} alt="" />
              Heroku
            </div>
            <div className="text-center">
              <img className="badge-img" src={netlify_logo} alt="" />
              Netlify
            </div>
            <div className="text-center">
              <img className="badge-img" src={github_logo} alt="" />
              GitHub
            </div>
          </div>
        </div>
      </SkillsStyles>
    </>
  );
};

export default Skills;
