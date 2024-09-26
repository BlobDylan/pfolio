import "./App.css";
import { Link } from "react-router-dom";
import ParticleBackground from "./components/Background/Particle";
import Timeline from "./components/Timeline/Timeline";
import Tech from "./components/Tech/Tech";
import Footer from "./components/Footer/Footer";
import { Typography, Fab, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

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
      <Typography variant="h1" align="left" color="white" margin={"50px"}>
        Hi, I'M <span style={{ color: "#ffffaa" }}>Dylan</span>
      </Typography>
      {/* <img src={"/me.png"} alt="Me" /> */}
      <Box className="profile-container">
        <img
          src={"/me.png"}
          alt="Me"
          style={{
            height: "300px",
            borderRadius: "10%",
            border: "5px solid #ffffaa",
            margin: "auto",
          }}
        />
        <Typography
          variant="body1"
          align="left"
          color="white"
          margin={"50px"}
          marginTop={"0px"}
          marginBottom={"0px"}
        >
          <p className="profile-title">Profile</p>
          Committed software enthusiast, passionate learner and constantly
          curious. Currently attending my second year of studies towards my
          Computer Science Degree at Reichman University.
        </Typography>
      </Box>
      <Typography variant="h2" align="left" color="white" margin={"75px"}>
        Technologies
      </Typography>
      <Tech />
      <Typography variant="h2" align="left" color="white" margin={"75px"}>
        Timeline
      </Typography>
      <Timeline />
      <Footer />
    </>
  );
}

export default App;
