import React from "react"
import CardStyles from "../styledComponents/CardStyles"

const ProjectCard = () => {
  return (
    <CardStyles>
      <div className="card" style={{ width: "18rem" }}>
        <img className="project-img card-img-top" src="" alt="" />
        <div className="card-body">
          <div className="card-title">Inventory</div>
          <p className="card-text">Mern App to help reduce retail shrinkage</p>
          <a
            href="https://whispering-anchorage-26890.herokuapp.com/"
            className="btn btn-block btn-secondary"
            target="_blank"
          >
            View Online
          </a>
        </div>
      </div>
    </CardStyles>
  )
}

export default ProjectCard
