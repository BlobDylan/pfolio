import React from "react";
import "./App.css";

import ParticleBackground from "./components/Background/Particle";
import Profile from "./components/Profile/Profile";
import Tech from "./components/Tech/Tech";
import Timeline from "./components/Timeline/Timeline";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

import { Link } from "react-router-dom";
import { Typography, Fab } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function App() {
  return (
    <>
      <ParticleBackground />
      <Link to="CV.pdf" target="_blank" download>
        <Fab
          variant="extended"
          sx={{
            alignSelf: "flex-end",
            position: "fixed",
            top: "20px",
            right: "20px",
          }}
          color="#1c1c1c"
          aria-label="CV"
        >
          <DownloadIcon />
          Download CV
        </Fab>
      </Link>
      <Typography
        fontWeight="bold"
        variant="h1"
        align="left"
        color="white"
        margin={"50px"}
      >
        Hi, I'm <span style={{ color: "#2e9e93" }}>Dylan</span>
      </Typography>
      <Profile />
      <Typography
        fontWeight="bold"
        variant="h2"
        align="left"
        color="white"
        margin={"25px"}
      >
        Technologies
      </Typography>
      <Tech />
      <Typography
        fontWeight="bold"
        variant="h2"
        align="left"
        color="white"
        margin={"25px"}
      >
        Education
      </Typography>
      <Timeline />
      <Typography
        fontWeight="bold"
        variant="h2"
        align="left"
        color="white"
        margin={"25px"}
      >
        Projects
      </Typography>
      <Projects />
      <Footer />
    </>
  );
}

export default App;
