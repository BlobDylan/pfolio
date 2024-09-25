import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineCard from "./TimelineCard";
import { Box } from "@mui/material";

function Timeline() {
  const timelinecontent = [
    {
      date: "date 1 - date 1",
      title: "Title 1",
      subtitle: "Subtitle 1",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur dignissimos asperiores reiciendis officiis, nisi voluptatum, adipisci ducimus magnam non sunt et quaerat, sint veritatis ea dolorum quidem nobis voluptas.",
    },
    {
      date: "date 2 - date 2",
      title: "Title 2",
      subtitle: "Subtitle 2",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur dignissimos asperiores reiciendis officiis, nisi voluptatum, adipisci ducimus magnam non sunt et quaerat, sint veritatis ea dolorum quidem nobis voluptas.",
    },
    {
      date: "date 3 - date 3",
      title: "Title 3",
      subtitle: "Subtitle 3",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur dignissimos asperiores reiciendis officiis, nisi voluptatum, adipisci ducimus magnam non sunt et quaerat, sint veritatis ea dolorum quidem nobis voluptas.",
    },
    {
      date: "date 4 - date 4",
      title: "Title 4",
      subtitle: "Subtitle 4",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur dignissimos asperiores reiciendis officiis, nisi voluptatum, adipisci ducimus magnam non sunt et quaerat, sint veritatis ea dolorum quidem nobis voluptas.",
    },
  ];

  return (
    <Box marginBottom={"50px"} marginTop={"15px"}>
      <VerticalTimeline>
        {timelinecontent.map((content, index) => (
          <TimelineCard key={index} cardContent={content} />
        ))}
      </VerticalTimeline>
    </Box>
  );
}

export default Timeline;
