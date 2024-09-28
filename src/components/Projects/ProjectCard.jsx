import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectCard({ title, description, image }) {
  return (
    <Card
      sx={{
        width: "22vw",
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
      <CardMedia component={"img"} height="140" image={image} alt="project" />
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
        <IconButton>
          <GitHubIcon sx={{ color: "#ffffff" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
