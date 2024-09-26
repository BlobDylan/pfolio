import ProjectCard from "./ProjectCard";
import { Box } from "@mui/material";

const ProjectsMap = {
  1: {
    title: "Project 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/me.png",
  },
  2: {
    title: "Project 2",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/me.png",
  },
  3: {
    title: "Project 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/me.png",
  },
};

function Projects() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "5%",
      }}
    >
      {Object.keys(ProjectsMap).map((key) => {
        return (
          <ProjectCard
            title={ProjectsMap[key].title}
            description={ProjectsMap[key].description}
            image={ProjectsMap[key].image}
          />
        );
      })}
    </Box>
  );
}

export default Projects;
