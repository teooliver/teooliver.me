import React from "react";
import AboutStyles from "./styledComponents/AboutStyles";

const About = () => {
  return (
    <AboutStyles>
      <h1>Hi there, I'm Teo 👋</h1>
      <blockquote>
        I'm a Web Developer who is passionate about React/Typescript and Rust.
      </blockquote>

      <p style={{ marginBottom: "2rem" }}>
        🌐 GitHub:
        <a href="https://github.com/teooliver">https://github.com/teooliver</a>
      </p>

      <h2> About:</h2>
      <p>
        In my free time I've been playing a lot with Rust, building REST APIs
        with Warp and the MongoDb driver, it's been awesome!
      </p>

      <ul>
        <li>❤️‍🔥 In love with Rust.</li>
        <li>
          🌱 Learning more about and studying: **Rust Backends, Warp, Rust
          MongoDb Driver.
        </li>
        <li>
          😄 Passionate about accessibility and committed to a web that works
          for everyone
        </li>
      </ul>

      <h2>Side projects:</h2>

      <ul>
        <li>
          <a href="https://github.com/teooliver/time-tracker-base">
            ⏱️ Time Tracker Base
          </a>
          <p>
            - A fullstack time tracker app inspired by toggl/clockify. Written
            in Rust on the server side and React + Typescript on the client.
          </p>
        </li>
        <li>
          <a href="https://habitgrid.xyz">🟣 HabitGrid</a>
          <p>
            - A Habit Tracker PWA that works 100% Offline. Built with React,
            Redux, Dexie.js and Sass.
          </p>
        </li>
      </ul>

      <h2>My Digital Garden 🌱</h2>
      <p>
        I write regular blog posts mostly about things I'm learning or would
        like keep for future reference at
        <a href="https://listed.to/@teooliver">listed.to/@teooliver</a>
      </p>
    </AboutStyles>
  );
};

export default About;

/*

Hi there, I'm Teo 👋
I'm a Web Developer who is passionate about React/Typescript and Rust.

In my free time I've been playing a lot with Rust, building REST APIs with Warp and the MongoDb driver, it's been awesome!


🌐 GitHub: https://github.com/teooliver

About:
- ❤️‍🔥 In love with Rust.
- 🌐 Personal website with examples of my work: https://teooliver.me/
- 🌱 Learning more about and studying: **Rust Backends, Warp, Rust MongoDb Driver**
- 😄 Passionate about accessibility and committed to a web that works for everyone

🚀 Side projects:

⏱️ Time Tracker Base - https://github.com/teooliver/time-tracker-base-v2 
- A fullstack time tracker app inspired by toggl/clockify. Written in Rust on the server side and React + Typescript on the client. 

🦀  Rust-Warp-MongoDB - https://github.com/teooliver/time-tracker-base-v2/tree/main/server
- A Rest API example built with Rust, Warp and MongoDB.

🟣 HabitGrid - https://habitgrid.xyz 
- A Habit Tracker PWA that works 100% Offline. Built with React, Redux, Dexie.js and Sass.
 

My Digital Garden 🌱

I write regular blog posts mostly about things I'm learning or would like keep for future reference.
https://listed.to/@teooliver

*/

/*
Here are some ideas to get you started:
- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
*/

/*

 <blockquote>
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
</p> 

*/
