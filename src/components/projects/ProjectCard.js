import React from "react"
import ProjectCardStyles from "../styledComponents/ProjectCardStyles"

const ProjectCard = ({ img, title, description, link, btnText }) => {
  return (
    <ProjectCardStyles>
      <img className="project-img" src={img} alt="inventory" />
      <div className="card-body">
        <div className="card-title">{title}</div>
        <p className="card-text">{description}</p>
        <a href={link} className="btn" target="_blank">
          {btnText}
        </a>
      </div>
    </ProjectCardStyles>
  )
}

export default ProjectCard
