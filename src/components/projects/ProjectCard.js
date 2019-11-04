import React from "react"

const ProjectCard = () => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img class="project-img card-img-top" src="" alt="" />
      <div class="card-body">
        <div class="card-title">Inventory</div>
        <p class="card-text">Mern App to help reduce retail shrinkage</p>
        <a
          href="https://whispering-anchorage-26890.herokuapp.com/"
          class="btn btn-block btn-secondary"
          target="_blank"
        >
          View Online
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
