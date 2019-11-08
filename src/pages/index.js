import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { NavProvider } from "../context/NavContext"
import PageTitleStyles from "../components/styledComponents/PageTitleStyles"
import Mask from "../components/Mask"
import About from "../components/About"
import Intro from "../components/Intro"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Contact from "../components/Contact"
import BodyContainer from "../components/styledComponents/BodyContainer"
import NavbarSide from "../components/NavbarSide"
import NavbarTop from "../components/NavbarTop"
import NavbarSlideOnSmall from "../components/NavbarSlideOnSmall"

const IndexPage = () => (
  <Layout>
    <SEO title="Teo Oliver" />
    <NavProvider>
      <NavbarTop />
      <NavbarSide />
      <NavbarSlideOnSmall />
      <BodyContainer>
        <Mask />
        <section id="intro">
          <Intro />
        </section>
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
      </BodyContainer>
    </NavProvider>
  </Layout>
)

export default IndexPage
