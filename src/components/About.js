import React from "react";
import AboutStyles from "./styledComponents/AboutStyles";

const About = () => {
  return (
    <AboutStyles>
      {/* <blockquote>
        Front-End developer with a passion for learning, collaboration and
        music.
      </blockquote>
      <p>
        I used to work doing sound for movies and tv but with time I got more
        and more interested in the programming part of it wich led me to work
        with games and then to web development.
      </p>
      <p>
        After 10 years working in the music industry I decided to go fulltime as
        a programmer and leave music as a hobby. I love learning new
        technologies and languages and I'm always up for new challenges.
      </p> */}

      <h1>Hi there, I'm Teo 👋</h1>
      <blockquote>
        I'm a Web Developer who is passionate about React and Typescript.
      </blockquote>

      <h2> About:</h2>
      <ul>
        <li>
          {" "}
          🌐 Github with examples of my work:{" "}
          <a href="https://github.com/teooliver">
            https://github.com/teooliver
          </a>
        </li>
        <li>
          {" "}
          🌱 Learning more about and studying: **CS Algorithms, Testing,
          Docker**
        </li>
        <li>
          {" "}
          😄 Passionate about accessibility and committed to a web that works
          for everyone
        </li>
      </ul>

      <h2>🚀 Side projects:</h2>
      <ul>
        <li>
          <a href="https://habitgrid.xyz">HabitGrid</a> - A Habit Tracker PWA
          built with React, Redux, Dexie.js and Sass.{" "}
        </li>
        <li>
          <a href="https://github.com/teooliver/time-tracker-base">
            Time Tracker Base
          </a>{" "}
          - A Typescript toggl/clockify like clone.{" "}
        </li>
      </ul>

      <h2>My Digital Garden 🌱</h2>
      <p>
        I write regular blog posts mostly about things I'm learning or would
        like keep for future reference at
        <a href="https://listed.to/@teooliver">listed.to/@teooliver</a>
      </p>

      {/* Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ... */}
    </AboutStyles>
  );
};

export default About;
