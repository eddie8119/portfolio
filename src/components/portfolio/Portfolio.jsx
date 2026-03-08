import React from "react";
import "./portfolio.css";

import materialsTool from "../../assets/materials-tool.png";
import constructionTool from "../../assets/工程管理.jpg";
import codeyt from "../../assets/codeyt.png";
import KaiJi from "../../assets/KaiJi.png";
import cyDesign from "../../assets/cy-design-rwd.jpg";
import aiVision from "../../assets/AI-vision.png";
import pos from "../../assets/pos.jpg";
import zeus from "../../assets/zeus.png";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 0.1,
      title: "KaiJi Independent Developer",
      img: KaiJi,
      technologies: "Vue3 | TypeScript | Nodejs",
      description: "Building management applications for the interior design industry",
      featurelists: [
        "‧ Account: wang8119@gmail.com",
        "‧ Password: v/hl0s0H#",
      ],
      link: "https://kaiji-app.vercel.app/",
    },
    {
      id: 1,
      title: "Next-Full-Stack-Construction Management Cane",
      img: constructionTool,
      technologies: "Next | TypeScript | Nodejs",
      description: "",
      featurelists: [
        "‧ Prisma operations PostgreSQL",
        "‧ NextAuth for authentication",
        "‧ Form validation using UseForm / Zod",
      ],
      link: "https://github.com/eddie8119/interior-helper",
    },
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
      link: "https://youtu.be/Ho3Nqg1ynEI ",
      repoLink: "https://github.com/eddie8119/react-dashboard",
    },

    {
      id: 1,
      title: "Construction Management Cane",
      img: constructionTool,
      technologies: "Vue3 | TypeScript | Firebase | Tailwind CSS",
      description:
        "Assisted interior industry designers in reducing cost and time wasted resulting from omissions.",
      featurelists: [
        "‧ Garnered 33,000 views and 253 shares by industry professionals for the introduction video.",
        "‧ Over 57 industry interior designers registered. ",
        "‧ Creating industry benefits: company count * savings starting from NT$3000 * number of projects per month. ",
      ],
      link: "https://interior-construction-helper.web.app/#/",
      repoLink: "https://github.com/eddie8119/Kanban-interior",
    },
    {
      id: 4,
      title: "Brand Website",
      img: cyDesign,
      technologies: "Nuxt2 | RWD | GA",
      description:
        "",
      featurelists: [],
      link: "https://designer-helper.netlify.app/",
    },
        {
      id: 1.2,
      title: "Layout-focused",
      img: zeus,
      technologies:
        "React | TypeScript | Tailwind CSS | Sass | Flex & Grid | RWD ",
      description: "",
      featurelists: [
        "‧ Use semantic HTML5",
        "‧ Write modular and reusable CSS",
      ],
      link: "https://zeus-network-demo.netlify.app/",
      repoLink: "https://github.com/eddie8119/react-dashboard",
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
      repoLink: "https://github.com/eddie8119/pos",
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
      link: "https://www.youtube.com/watch?v=FMqWC8Rn-AY",
      repoLink: "https://www.youtube.com/watch?v=-NY5qn2AHZk",
    },
    {
      id: 2,
      title: "《是 code 不是 cold》（youtube）",
      img: codeyt,
      technologies: "Technical Knowledge Output",
      description: "Sharing Front-end Technology / Computational Thinking",
      featurelists: [],
      link: "https://www.youtube.com/@code-not-cold",
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
              {pro.repoLink && (
                <a
                  href={pro.repoLink}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Repo
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
