import "./App.css";
import { Link } from "react-router-dom";
import ParticleBackground from "./components/Background/Particle";
import Timeline from "./components/Timeline/Timeline";
import Tech from "./components/Tech/Tech";
import Footer from "./components/Footer/Footer";
import { Typography, Fab, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function App() {
  return (
    <>
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
      <Typography variant="h2" align="center" color="white" margin={"50px"}>
        Dylan Lewis
      </Typography>
      <Tech />
      <ParticleBackground />
      <Timeline />
      <Footer />
    </>
  );
}

export default App;
