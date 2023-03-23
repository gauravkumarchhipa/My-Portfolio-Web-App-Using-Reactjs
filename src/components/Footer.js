import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import logo2 from "../assets/logo2.jpg"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={logo2}
          alt="Founder"
        />

        <h2>Gaurav Kumar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/channel/UCL5KdCTu3gtKdaUqN3EHvTA" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/gaurav_chhipa16/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/gauravkumarchhipa" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
