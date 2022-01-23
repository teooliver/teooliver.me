import React from "react";
import ProjectCardStyles from "../styledComponents/ProjectCardStyles";

const ProjectCard = ({
  img,
  title,
  description,
  detail,
  link,
  link2,
  btnText,
  btnText2,
  tools,
}) => {
  return (
    <ProjectCardStyles>
      <img className="project-img" src={img} alt="inventory" />
      <hr />
      <div className="card-body">
        <div className="card-title">{title}</div>
        <p className="card-text">{description}</p>
        {detail && <p className="card-text">{detail}</p>}
        {tools && (
          <p className="card-text">
            <span>Tools:</span> {tools}
          </p>
        )}
        <a
          href={link}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {btnText}
        </a>
        {btnText2 ? (
          <a
            href={link2}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {btnText2}
          </a>
        ) : null}
      </div>
    </ProjectCardStyles>
  );
};

export default ProjectCard;
