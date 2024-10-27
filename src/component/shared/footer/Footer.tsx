// import logo from '/vite.svg'
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-primaryColor ">
      <footer className="footer p-10 max-w-7xl mx-auto  text-white flex justify-around items-center">
      <aside className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="" className="h-16" />
        </div>
        <p className="text-center">
          Copyright © 2024 - All right reserved by THUNDER
        </p>
      </aside>

      <nav className="hidden lg:flex md:flex-col">
        <div>
          <h1 className="footer-title">Menu</h1>
        </div>
        <div className="flex gap-2">
          <a className="link link-hover" href="/">
            Home
          </a>
          <a className="link link-hover" href="/products">
            Products
          </a>
          {/* <a className="link link-hover" href="/productManagement">
            Product Management
          </a> */}
          <a className="link link-hover" href="/about">
            About Us
          </a>
        </div>
      </nav>
      <nav className="hidden md:flex md:flex-col">
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/tazahmedcse/" className="text-xl">
            <FaFacebookF></FaFacebookF>
          </a>
          <a href="https://www.tazahmedsoft@gmail.com" className="text-2xl">
            <MdOutgoingMail></MdOutgoingMail>
          </a>
          <a
            href="https://www.linkedin.com/in/shaik-taz-uddin-1a47682a0"
            className="text-xl"
          >
            <FaLinkedin></FaLinkedin>
          </a>
        </div>
      </nav>
    </footer>
    </div>
  );
};

export default Footer;
