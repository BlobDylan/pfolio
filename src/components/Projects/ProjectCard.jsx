import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function ProjectCard({ title, description, image, link }) {
  return (
    <Card
      sx={{
        width: {
          xs: "80%",
          sm: "23%",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#1c1c1c",
        opacity: "0.9",
        borderRadius: "10px",
        transition: "opacity 0.3s, transform 0.3s",
        "&:hover": {
          opacity: "1",
          transform: "scale(1.1)",
        },
      }}
    >
      <CardMedia component={"img"} height="300" image={image} alt="project" />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          color: "#ffffff",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton href={link} target="_blank" rel="noopener noreferrer">
          <OpenInNewIcon sx={{ color: "#ffffff" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
