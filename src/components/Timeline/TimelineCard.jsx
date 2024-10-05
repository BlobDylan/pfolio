import React from "react";
import { Typography } from "@mui/material";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function TimelineCard({ cardContent }) {
  const WorkIcon = () => <></>;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#1c1c1c", color: "#fff", opacity: "0.9" }}
      contentArrowStyle={{ borderRight: "10px solid  #1c1c1c" }}
      date={cardContent.date}
      iconStyle={{ background: "#1c1c1c", color: "#fff" }}
      icon={<WorkIcon />}
    >
      <Typography variant="h5" className="vertical-timeline-element-title">
        {cardContent.title}
      </Typography>
      <Typography variant="h6" className="vertical-timeline-element-subtitle">
        {cardContent.subtitle}
      </Typography>
      <Typography variant="body1">{cardContent.text.description}</Typography>
      {cardContent.text.courses && (
        <ul>
          {cardContent.text.courses.map((course, index) => (
            <li key={index}>
              <Typography variant="body2">{course}</Typography>
            </li>
          ))}
        </ul>
      )}
    </VerticalTimelineElement>
  );
}

export default TimelineCard;
