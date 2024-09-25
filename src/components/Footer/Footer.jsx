import { styled } from "@mui/material/styles";

import { Box, Typography, IconButton, Container } from "@mui/material";

import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1c1c1c",
        padding: (theme) => theme.spacing(4),
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography gutterBottom variant="h5" align="center">
          Socials
        </Typography>
        <SocialIcons>
          <IconButton
            component="a"
            href="https://www.X.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon sx={{ color: "#ffffff" }} />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "#ffffff" }} />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon sx={{ color: "#ffffff" }} />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon sx={{ color: "#ffffff" }} />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "#ffffff" }} />
          </IconButton>
        </SocialIcons>
      </Container>
    </Box>
  );
}
