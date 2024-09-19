import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/Francescodev1" target="_blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com/frank_ceck" target="_blank">
          <FaInstagram />
        </a>

        <a href="https://www.linkedin.com/in/francesco-cecca-30696a185/" target="_blank">
          <GrLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
