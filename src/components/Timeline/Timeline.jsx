import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineCard from "./TimelineCard";
import { Box } from "@mui/material";

function Timeline() {
  const timelinecontent = [
    {
      date: "2024 - present",
      title: "Third Year CS Degree",
      subtitle: "Reichman University",
      text: {
        description:
          "Currently attending my third and final year of studies towards my Computer Science Degree at Reichman University. I Currently have a GPA of 90",
      },
    },
    {
      date: "2023 - 2024",
      title: "Second Year CS Degree",
      subtitle: "Reichman University",
      text: {
        description:
          "In my second year of studies I completed the following courses",
        courses: [
          "Algorithms",
          "Probability",
          "Advanced Programming",
          "Digital Systems",
          "Machine Learning",
          "IOT",
          "Computational Models",
          "Full Stack Development",
        ],
      },
    },
    {
      date: "2022 - 2023",
      title: "Frist Year CS Degree",
      subtitle: "Reichman University",
      text: {
        description:
          "In my first year of studies I completed the following courses",
        courses: [
          "Calculus 1 & 2",
          "Linear Algebra 1 & 2",
          "Discrete Mathematics",
          "Introduction to Computer Science",
          "Data Structures",
          "Logic and set theory",
          "Systems Programming in C",
        ],
      },
    },
    {
      date: "2016 - 2019",
      title: "High School",
      subtitle: "Rishonim High School",
      text: {
        description:
          "In my high school years I studied at Rishonim High School",

        courses: [
          "Mathematics - 5 units",
          "Physics - 5 units",
          "Computer Science - 10 units",
          "English - 5 units",
        ],
      },
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
