import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitleStyles from "../components/styledComponents/PageTitleStyles"
import About from "../components/About"
import Intro from "../components/Intro"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Contact from "../components/Contact"
import NavbarSide from "../components/NavbarSide"
import BodyContainer from "../components/styledComponents/BodyContainer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavbarSide />
    <BodyContainer>
      <Intro />
      <PageTitleStyles>About</PageTitleStyles>
      <About />
      <PageTitleStyles>Projects</PageTitleStyles>
      <Projects />
      <PageTitleStyles>Skills</PageTitleStyles>
      <Skills />
      <PageTitleStyles>Education</PageTitleStyles>
      <Education />
      <PageTitleStyles>Contact</PageTitleStyles>
      <Contact />
      <Link to="/page-2/">Go to page 2</Link>
    </BodyContainer>
  </Layout>
)

export default IndexPage
