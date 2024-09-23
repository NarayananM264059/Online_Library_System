import { GrGithub } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>Book Haven &copy; 2024</p>
      <div>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <GrGithub />
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin />
        </a>
        <a href="https://leetcode.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;