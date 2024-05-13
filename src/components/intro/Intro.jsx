import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me.png";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              {/* <small>Completed Projects</small> */}
            </article>
          </div>
          <p>
            1.5 years of experience in front-end development in Vue and React,
            using Tailwind and Sass to manage CSS and be proficient in
            responsive design (RWD).
            <br />
            - Passionate about researching and synthesizing code, creating
            YouTube content to share programming. Also manages a YouTube channel
            sharing design thinking over 7 years.
            <br />
            - Possesses the ability to explore needs and invent, evidenced by
            being an early adopter and patent holder of a popular rotating
            feature in 20,000 units of consumer electronics.
            <br />- Combining programming skills with inventive abilities,
            created a site management tool for the interior design industry as a
            side project, assisting over 57 interior designers to save at least
            $15,000 in construction costs and avoid a 3-day delay per project
            per month.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
