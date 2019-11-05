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
    <SEO title="Teo Oliver" />
    <NavbarSide />
    <BodyContainer>
      <Intro />
      <section id="about">
        <PageTitleStyles>About</PageTitleStyles>
        <About />
      </section>
      <section id="projects">
        <PageTitleStyles>Projects</PageTitleStyles>
        <Projects />
      </section>
      <section id="skills">
        <PageTitleStyles>Skills</PageTitleStyles>
        <Skills />
      </section>
      <section id="education">
        <PageTitleStyles>Education</PageTitleStyles>
        <Education />
      </section>
      <section id="contact">
        <PageTitleStyles>Contact</PageTitleStyles>
        <Contact />
      </section>
      <Link to="/page-2/">Go to page 2</Link>
    </BodyContainer>
  </Layout>
)

export default IndexPage
