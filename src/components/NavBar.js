import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const renderedLinks = links.map((link) => (
    <a key={link} href={`#${link}`}>
      {link}
    </a>
  ));
  return <nav>{renderedLinks}</nav>;
}

export default NavBar;
