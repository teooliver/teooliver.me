import React from "react"
import CardStyles from "../styledComponents/CardStyles"

const ProjectCard = ({ img, title, description, link, btnText }) => {
  return (
    <CardStyles>
      <img className="project-img" src={img} alt="inventory" />
      <div className="card-body">
        <div className="card-title">{title}</div>
        <p className="card-text">{description}</p>
        <a href={link} className="btn" target="_blank">
          {btnText}
        </a>
      </div>
    </CardStyles>
  )
}

export default ProjectCard
