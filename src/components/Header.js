import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, Text } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    currentScrollY > prevScrollY.current
      ? setShowHeader(false)
      : setShowHeader(true);
    prevScrollY.current = currentScrollY;
  };
  const headerStyle = {
    transform: showHeader ? "translateY(0)" : "translateY(-200px)",
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      style={headerStyle}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((social) => (
              // <Link key={social.url} href={`${social.url}`}>
              //   {social.icon}
              // </Link>
              <Link key={social.url} href={social.url} ml={5}>
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </Link>
            ))}
            {/* Add social media links based on the `socials` data */}
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link href="/#projects" onClick={handleClick("projects")}>
                <Text>Projects</Text>
              </Link>
              <Link
                href="/#contact-me"
                onClick={handleClick("contactme")}
                ml={5}
              >
                <Text>Contact Me</Text>
              </Link>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
