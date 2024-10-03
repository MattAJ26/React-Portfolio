import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
      <footer className="w-100 mt-auto text-dark p-4">
        <h5>Professional Links</h5>
        <div className="container text-center mb-5">
          <a href="https://github.com/MattAJ26" target="_blank">
          <FaGithub className="logo"/>
          </a>
          <a href="https://www.linkedin.com/in/matthew-johnson-b59027101" target="_blank">
            <FaLinkedin className="logo"/>
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  