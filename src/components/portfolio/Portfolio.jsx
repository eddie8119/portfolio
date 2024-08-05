import "./portfolio.css";
import materialsTool from "../../assets/materials-tool.png";
import constructionTool from "../../assets/工程管理.jpg";
import codeyt from "../../assets/codeyt.png";
import codeingLanguageExchange from "../../assets/codeingLanguageExchange.png";
import archProject from "../../assets/arch-project.jpg";
import cyDesign from "../../assets/cy-design-rwd.jpg";
import archGod from "../../assets/建築之神要告解.jpg";
import aiVision from "../../assets/AI-vision.jpg";
import pos from "../../assets/pos.jpg";
import React from "react";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 0,
      title: "Engineering Materials Management System",
      img: materialsTool,
      technologies: "React | TypeScript",
      description:
        "Integrates material management throughout the project lifecycle (Planning-Engineering-Closure)",
      featurelists: [
        "‧ Forms: Useform / Mui",
        "‧ Charts: react-chartjs-2",
        "‧ i18n (English / Chinese) (ChainedBackend approach)",
        "‧ Vitest unit testing",
      ],
      link: "https://github.com/eddie8119/react-dashboard",
      demoLink: "https://youtu.be/Ho3Nqg1ynEI",
    },
    {
      id: 1,
      title: "Construction Management Cane",
      img: constructionTool,
      technologies: "Vue3 | Vuex | Firebase | Tailwind CSS",
      description:
        "Assisted interior industry designers in reducing cost and time wasted resulting from omissions.",
      featurelists: [
        "‧ Garnered 33,000 views and 253 shares by industry professionals for the introduction video.",
        "‧ Over 57 industry interior designers registered. ",
        "‧ Creating industry benefits: company count * savings starting from NT$3000 * number of projects per month. ",
      ],
      link: "https://interior-construction-helper.web.app/#/",
    },
    {
      id: 2,
      title: "《是 code 不是 cold》（youtube）",
      img: codeyt,
      technologies: "Technical Knowledge Output",
      description: "Sharing Front-end Technology / Computational Thinking",
      featurelists: [
        "‧ Foster a culture of code discussion within the front-end team, encouraging colleagues who lack confidence in coding to also start enjoying programming discussions. ",
      ],
      link: "https://www.youtube.com/@code-not-cold",
    },
    {
      id: 3,
      title: "Hosting Codeing Language Exchange",
      img: codeingLanguageExchange,
      technologies: "Organization | Technical Influence",
      description: "Exchange frount-end / back-end codeing language ",
      featurelists: [
        "‧ Matchmaking the frount-end / back-end engerneer who want to enhance the other side of codeing language technique",
      ],
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfnSu4WgpY392mXuZEh-cxxx73bDtwjIKxQaHXx2I0i-tW66A/viewform",
    },
    {
      id: 4,
      title: "Interior Design Company Website",
      img: cyDesign,
      technologies: "JavaScript | SCSS",
      description:
        "Assisted an interior design company with website optimization",
      featurelists: [
        "‧ Optimization 1: Establish main visual imagery to enhance visual texture",
        "‧ Optimization 2: Add item selection to the portfolio for easier viewing",
      ],
      link: "https://eddie8119.github.io/cy-dstudio/",
    },
    {
      id: 5,
      title: "Beverage Checkout POS",
      img: pos,
      technologies: "JavaScript | CSS",
      description:
        "Clicking on the menu can generate checkout cards. The cards can be independently deleted, and the total price of all cards can be calculated.",
      featurelists: [
        "‧ Object-Oriented Design",
        "‧ Constructor Function to Generate Menu Object Instances",
        "‧ Writing Functional Methods in the Prototype",
      ],
      link: "https://eddie8119.github.io/pos/",
    },
    {
      id: 6,
      title: "Architectural Firm Project Management System",
      img: archProject,
      technologies: "Vue2 | Vuex ",
      description: "Edit detailed expenses of architectural projects",
      featurelists: [
        "‧ Transform operational pain points from the firm into product opportunities",
        "‧ Use VUEX store to store information for create, read, update, and delete operations",
      ],
      link: "https://arch-project-management.netlify.app/",
    },
    {
      id: 7,
      title: "AI Vision Impairment Object Recognition Assistive Device",
      img: aiVision,
      technologies: "Python | YOLOv3",
      description: "",
      featurelists: [
        "‧ Qualitative Research Interviews with Visually Impaired Individuals",
        "‧ Identify User Needs and Corresponding Product Features",
      ],
      link: "https://www.youtube.com/watch?v=-NY5qn2AHZk",
      demoLink: "https://www.youtube.com/watch?v=FMqWC8Rn-AY",
    },
    {
      id: 8,
      title: "God of Architecture - I Want to Confess",
      img: archGod,
      technologies: "Vue3 | Firebase ",
      description:
        "Gather collective insights from the uncertainties encountered in architectural careers to provide everyone with the possibility of finding a new direction.",
      featurelists: [],
      link: "https://archconfession-1d0cd.firebaseapp.com/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.technologies}</p>
              <p>{pro.description}</p>

              <ul>
                {pro.featurelists.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Link
              </a>
              {pro.demoLink && (
                <a
                  href={pro.demoLink}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
