import React from "react";
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
      <h3 className="vertical-timeline-element-title">{cardContent.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">
        {cardContent.subtitle}
      </h4>
      <p>{cardContent.text.description}</p>
      {cardContent.text.courses && (
        <ul>
          {cardContent.text.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      )}
    </VerticalTimelineElement>
  );
}

export default TimelineCard;
