import React from "react";
import { styled } from "@mui/material/styles";

import { Box, Typography, IconButton, Container } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginBottom: 0,
}));

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1c1c1c",
        color: "white",
        opacity: "0.9",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          gutterBottom
          variant="h5"
          align="center"
          sx={{ marginBottom: 0 }}
        >
          Socials
        </Typography>
        <SocialIcons>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/dylan-lewis-989955279/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ marginBottom: "10px" }}
          >
            <LinkedInIcon sx={{ color: "#ffffff" }} />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/BlobDylan"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ marginBottom: "10px" }}
          >
            <GitHubIcon sx={{ color: "#ffffff" }} />
          </IconButton>
        </SocialIcons>
      </Container>
    </Box>
  );
}
