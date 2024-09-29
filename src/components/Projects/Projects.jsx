import ProjectCard from "./ProjectCard";
import { Box } from "@mui/material";

const ProjectsMap = {
  1: {
    title: "Coming Soon",
    description: "Coming Soon",
    image: "/Coming_Soon.jpg",
    link: "https://github.com/BlobDylan/",
  },
  2: {
    title: "This Website",
    description:
      "This website you are viewing right now. Built using React and Vite.",
    image: "/Website_Project.PNG",
    link: "https://github.com/BlobDylan/pfolio",
  },
  3: {
    title: "IOT Project",
    description:
      "In this project, I Built a game for kids to learn math. It was built using an esp32 and some sensors and inputs.",
    image: "/IOT_Project.jpg",
    link: "https://www.instructables.com/Math-Teaching-Game/",
  },
};

function Projects() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "5%",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        alignItems: "center",
      }}
    >
      {Object.keys(ProjectsMap).map((key) => {
        return (
          <ProjectCard
            title={ProjectsMap[key].title}
            description={ProjectsMap[key].description}
            image={ProjectsMap[key].image}
            link={ProjectsMap[key].link}
          />
        );
      })}
    </Box>
  );
}

export default Projects;
