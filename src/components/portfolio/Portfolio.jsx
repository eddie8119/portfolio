import "./portfolio.css";

import constructionTool from "../../assets/工程管理.jpg";
import archProject from "../../assets/arch-project.jpg";
import cyDesign from "../../assets/cy-design-rwd.jpg";
import archGod from "../../assets/建築之神要告解.jpg";
import codeyt from "../../assets/codeyt.jpg";
import pos from "../../assets/pos.jpg";
import React from "react";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "室內現場工程管理手帳",
      img: constructionTool,
      technologies: "Vue3 | Vuex | Firebase | Tailwind CSS",
      description:
        "卡片式專案管理-順應工地動態運作，輔助設計師減少遺漏施作，工進運行平順",
      featurelists: [
        "‧ 介紹影片3.2萬次觀看，241次分享，累積 47位設計師註冊",
        "‧ 成本節省效益: 公司數 * 3000元起/每月 * 專案數 ",
      ],
      link: "https://interior-construction-helper.web.app/#/",
    },
    {
      id: 2,
      title: "建築事務所專案管理系統",
      img: archProject,
      technologies: "Vue2 | Vuex ",
      description: "編輯建築專案的細項費用",
      featurelists: [
        "‧ 將自事務所作業的痛點化為產品的機會 ",
        "‧ 利用VUEX store存放增刪改查的資訊",
      ],
      link: "https://arch-project-management.netlify.app/",
    },
    {
      id: 3,
      title: "成寓室內裝修設計官網優化",
      img: cyDesign,
      technologies: "Vue3 | Firebase ",
      description: "以室內公司為客戶協助官網優化 ",
      featurelists: [
        "‧ 優化1:建立主視覺意象，增加視覺質地",
        "‧ 優化2:作品列增加品項選擇，便於檢視",
      ],
      link: "https://eddie8119.github.io/cy-dstudio/",
    },
    {
      id: 4,
      title: "建築之神-我要告解",
      img: archGod,
      technologies: "Vue3 | Firebase ",
      description:
        "集眾力將建築職涯路上迷茫的體悟匯聚起來，提供大家找到一種新方向的可能",
      featurelists: [],
      link: "https://archconfession-1d0cd.firebaseapp.com/",
    },
    {
      id: 5,
      title: "飲料結帳pos機",
      img: pos,
      technologies: "Vue3 | Firebase ",
      description:
        "點選菜單能生成結帳卡片。卡片能獨立刪除，與計算所有卡片價格總和。",
      featurelists: [
        "‧ 物件導向設計",
        "‧ 建構式函式產生菜單物件實例",
        "‧ prototype內寫入功能函式",
      ],
      link: "https://eddie8119.github.io/pos/",
    },
    {
      id: 5,
      title: "前端主題Youtube頻道",
      img: codeyt,
      technologies: "",
      description: "",
      featurelists: [],
      link: "https://www.youtube.com/channel/UC-1teyrSCuxtpgia0XMr-Ng",
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
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
