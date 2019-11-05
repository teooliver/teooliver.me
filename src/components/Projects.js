import React from "react"
import GridContainer from "./styledComponents/GridContainer"
import ProjectCard from "./projects/ProjectCard"

const Projects = () => {
  return (
    <GridContainer>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </GridContainer>
  )
}

export default Projects
