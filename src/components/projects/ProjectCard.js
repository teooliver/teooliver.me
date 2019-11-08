import React from "react"
import ProjectCardStyles from "../styledComponents/ProjectCardStyles"

const ProjectCard = ({ img, title, description, link, btnText, tools }) => {
  return (
    <ProjectCardStyles>
      <img className="project-img" src={img} alt="inventory" />
      <hr />
      <div className="card-body">
        <div className="card-title">{title}</div>
        <p className="card-text">{description}</p>
        {tools ? (
          <p className="card-text">
            <span>Tools:</span> {tools}
          </p>
        ) : (
          ""
        )}
        <a href={link} className="btn" target="_blank">
          {btnText}
        </a>
      </div>
    </ProjectCardStyles>
  )
}

export default ProjectCard
