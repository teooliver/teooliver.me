import React from "react"
import { Link } from "gatsby"
import GridContainer from "../components/styledComponents/GridContainer"

import Layout from "../components/layout"
import Image from "../components/image"
import teo_image from "../images/teo-oliver_v1.jpg"
import SEO from "../components/seo"
import ProjectCard from "../components/projects/ProjectCard"
import PageTitleStyles from "../components/styledComponents/PageTitleStyles"
import IntroImageStyles from "../components/styledComponents/IntroImageStyles"
import AboutStyles from "../components/styledComponents/AboutStyles"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroImageStyles>
      <img class="intro-image" src={teo_image} />
    </IntroImageStyles>

    <PageTitleStyles>About</PageTitleStyles>
    <AboutStyles>
      <blockquote>
        Full stack developer with a passion for learning, collaboration and
        music.
      </blockquote>
      <p>
        I am full stack web developer. I used to work with sound for movies and
        games, but with time I got more and more interested in the programming
        part of it.
        <br />
        I've worked with Unreal Engine and Unity but my passion for web
        development led me to invest most of my programing time in Javascript,
        C# and Typescript.
      </p>
    </AboutStyles>
    <PageTitleStyles>Projects</PageTitleStyles>
    <GridContainer>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </GridContainer>
    <PageTitleStyles>Skills</PageTitleStyles>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum officiis
      eligendi aspernatur! In quos iure incidunt, officiis amet adipisci quis
      laboriosam voluptatibus fugiat? Quia, quod. Consectetur ipsum molestias
      qui quia. Quasi consequatur quod amet iusto. Voluptate iste assumenda
      autem quia animi. Temporibus, officia exercitationem. Quisquam porro
      voluptatibus eius ducimus, molestiae ratione rerum magnam quam nisi
    </p>
    <PageTitleStyles>Education</PageTitleStyles>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum officiis
      eligendi aspernatur! In quos iure incidunt, officiis amet adipisci quis
      laboriosam voluptatibus fugiat? Quia, quod. Consectetur ipsum molestias
      qui quia. Quasi consequatur quod amet iusto. Voluptate iste assumenda
      autem quia animi. Temporibus, officia exercitationem. Quisquam porro
      voluptatibus eius ducimus, molestiae ratione rerum magnam quam nisi
    </p>
    <PageTitleStyles>Contact</PageTitleStyles>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum officiis
      eligendi aspernatur! In quos iure incidunt, officiis amet adipisci quis
      laboriosam voluptatibus fugiat? Quia, quod. Consectetur ipsum molestias
      qui quia. Quasi consequatur quod amet iusto. Voluptate iste assumenda
      autem quia animi. Temporibus, officia exercitationem. Quisquam porro
      voluptatibus eius ducimus, molestiae ratione rerum magnam quam nisi
    </p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
