import React from "react";
import GridContainer from "./styledComponents/GridContainer";
import ProjectCard from "./projects/ProjectCard";
import inventory_image from "../images/Inventory_DateChecking.png";
import ligth_out_image from "../images/lights-out-game.png";
import retrace_image from "../images/Retrace_DjangoApp.png";
import todo_list_image from "../images/MERN_TodoList.png";
import devconnector_image from "../images/DevoConnector_v2.png";
import black_iris_image from "../images/Black_Iris.jpg";
import teooliver_me_image from "../images/teooliver_me_image.png";
import password_generator_image from "../images/password_generator_image.png";
import habit_grid from "../images/habit-grid-image.png";

const Projects = () => {
  return (
    //Todo: add teooliver.me and password generator
    <GridContainer>
      <ProjectCard
        img={habit_grid}
        title="Habit Grid"
        description="Habit Grid is a minimalistic app to help you track and build habits. With a simple and straight to the point interface, you dont have to configure or learn anything to use the app. Just add the habit/task and click the cells to track."
        tools="Typescript, React, Redux ,Dexie.js and Sass"
        link="https://habitgrid.xyz/"
        btnText="View Online"
        link2="https://github.com/teo-oliver/habit-tracker-js"
        btnText2="View Code"
      />
      <ProjectCard
        img={inventory_image}
        title="Inventory Management"
        description="Full Stack Mern App to help reduce retail shrinkage"
        tools="React, redux, lodash, express, REST API, mongoDb, mongoose, express-validator, passport "
        link="https://whispering-anchorage-26890.herokuapp.com/"
        btnText="View Online"
        link2="https://github.com/teo-oliver/date-checking-app"
        btnText2="View Code"
      />
      <ProjectCard
        img={ligth_out_image}
        title="Lights Out"
        description="Game made with React and the Howler library for the sound"
        tools={"React, Howler, react-transition-group "}
        link="https://nifty-haibt-8b22b3.netlify.com/"
        btnText="View Online"
        link2="https://github.com/teo-oliver/lights-out-game"
        btnText2="View Code"
      />
      <ProjectCard
        img={retrace_image}
        title="Retrace"
        description="A Django App to manage small busines"
        tools="Django, SQLite, html, bootstrap"
        link="https://github.com/teo-oliver/retrace_0.1"
        btnText="View Code"
      />
      <ProjectCard
        img={teooliver_me_image}
        title="teooliver.me"
        description="Fully responsive Portifolio website"
        tools={"React, Gatsby, styled-components, ContextAPI"}
        link="https://github.com/teo-oliver/teooliver.me"
        btnText="View Code"
      />
      <ProjectCard
        img={password_generator_image}
        title="Password Generator"
        description="React with Typescript app"
        tools={"React, Typescript, styled-components"}
        link="https://serene-yalow-7ff20e.netlify.com/"
        btnText="View Online"
        link2="https://github.com/teo-oliver/password-generator"
        btnText2="View Code"
      />
      <ProjectCard
        img={todo_list_image}
        title="Mern Todo List"
        description="A Simple Todo List App - MERN stack"
        tools={
          "React, redux, lodash, react-transition-group, express, mongoDb, mongoose"
        }
        link="https://mysterious-spire-91968.herokuapp.com/"
        btnText="View Online"
        link2="https://github.com/teo-oliver/MERN_TodoList"
        btnText2="View Code"
      />
      <ProjectCard
        img={devconnector_image}
        title="DevConnector"
        description="Project based on Brad Traversy's course - MERN Front To Back
                    WebDev"
        link="https://evening-coast-59870.herokuapp.com/"
        btnText="View Online"
        link2="https://github.com/teo-oliver/DevConnector_v2"
        btnText2="View Code"
      />
      <ProjectCard
        img={black_iris_image}
        title="Black Iris"
        description="Indie Game made with Unreal Engine - My programming role was
                    implementing Fmod banks by scripting the sound events and cues."
        tools={"Unreal Engine, Fmod, MIDI, Reaper, Orchestral Tools"}
        link="https://www.youtube.com/watch?v=h5YfiaVKU5k"
        btnText="View Trailer"
      />
    </GridContainer>
  );
};

export default Projects;
