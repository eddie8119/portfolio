import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "ReactJS, Redux-toolkit",
    "VueJS",
    "NextJS",
    "NuxtJS",
    "RESTful APIs",
    "Git",
    "Firebase",
    "Solidity",
  ];

  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Full-stack Development</h3>
          <div className="experience__content">
            {skills.map((skill, index) => (
              <article key={index} className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
