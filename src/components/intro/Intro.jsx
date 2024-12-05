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
              {/* <small>1.5+ year</small> */}
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              {/* <small>Completed Projects</small> */}
            </article>
          </div>
          <p>
            Experience in React and Vue, with deep expertise in React
            technologies, including React Hooks.
            <br />
            -Work Experience:
            <br />
            <li>
              React & Next.js: Developed a company's official website with
              Static Site Generation (SSG).
            </li>
            <li>
              Vue3: Built a SaaS platform for the real estate rental industry.
            </li>
            <li>Vue2 & Nuxt.js: Created a gaming lobby platform.</li>
            <br />
            -Team Contributions:
            <br />
            <li>
              Initiated front-end study groups to foster a collaborative
              learning environment, enhance communication within the team, and
              promote skill development among colleagues.
            </li>
            <br />
            -Versatility:
            <br />
            <li>
              Combines technical expertise with business acumen from commercial
              training.
            </li>
            <li>
              Side Project: An on-site interior construction management tool.
              This project addressed pain points in engineering workflows,
              introducing small yet impactful software tools that help
              professionals reduce construction costs and errors.
            </li>
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
