import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaYoutube, FaMedium } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/eddie8119" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.youtube.com/channel/UC-1teyrSCuxtpgia0XMr-Ng"
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutube />
      </a>
      <a
        href="https://hackmd.io/@H7lkjK3WTYquMl4v03LjYA/Bk2EXK1KA/edit"
        target="_blank"
        rel="noreferrer"
      >
        <FaMedium />
      </a>
      <a
        href="https://www.linkedin.com/in/jing-wang-705a50105/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
