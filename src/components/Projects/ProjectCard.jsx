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
      }}
    >
      <CardMedia component={"img"} height="140" image={image} alt="project" />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <GitHubIcon sx={{ color: "#1c1c1c" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
