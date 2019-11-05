import React from "react"
import IntroImageStyles from "./styledComponents/IntroImageStyles"
import teo_image from "../images/teo-oliver_v1.jpg"

const Intro = () => {
  return (
    <IntroImageStyles>
      <img className="intro-image" alt="teo oliver" src={teo_image} />
    </IntroImageStyles>
  )
}

export default Intro
