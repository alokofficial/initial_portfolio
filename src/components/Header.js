import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: aloknh31@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/alokofficial",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/alokofficial/",
  },
  {
    icon: faMedium,
    url: "https://alokofficial.medium.com/",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/24548973/alok-kumar",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = prevScrollPos < currentScrollPos;

      if (scrollingDown) {
        headerRef.current.style.visibility = "hidden";
      } else {
        headerRef.current.style.visibility = "visible";
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      boxShadow="0 2px 10px 0 rgb(0 0 0 / 30%)"
      color="black"
      zIndex={999}
      transition="visibility 0.3s ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map(({ icon, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                    style={{ color: "#fff" }}
                  />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* <button onClick={handleClick("home")}>Home</button> */}
              <button onClick={handleClick("projects")}>Projects</button>
              {/* <button onClick={handleClick("resume")}>Resume</button> */}
              <button onClick={handleClick("contactme")}>Contact me</button>
              {/* <button onClick={handleClick("aboutme")}>About me</button> */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
