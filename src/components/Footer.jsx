import React from "react";
import { FaFacebook, FaGithub, FaCoffee, FaLinkedin  } from "react-icons/fa";

import { logo } from "../assets";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/cedric.galila",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      url: "https://github.com/Cedrix-code",
    },
    {
      name: "Instagram",
      icon: <FaCoffee />,
      url: "https://www.buymeacoffee.com/cedrix",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/lcedric-galila/",
    },
  ];

  return (
    <footer>
      <div className="container mx-auto flex flex-col items-center justify-center py-8">
        {/* Your Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 object-contain mb-4"
        />

        {/* Social Links */}
        <div className="flex gap-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg transition-colors duration-200 hover:text-accent"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Trademark */}
        <div className="mt-4 text-secondary">
          Lance Cedric Galila &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
