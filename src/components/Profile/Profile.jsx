import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import "./Profile.css";

function Profile() {
  useEffect(() => {
    const img = document.querySelector(".profile-img");
    const text = document.querySelector(".profile-text");

    img.classList.add("slide-in-left");
    text.classList.add("slide-in-right");
  }, []);

  return (
    <Box className="profile-container">
      <img
        className="profile-img"
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
        className="profile-text"
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
  );
}

export default Profile;
