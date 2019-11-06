import React, { useContext } from "react"
import MaskStyles from "./styledComponents/MaskStyles"
import { NavContext } from "../context/NavContext"

const Mask = () => {
  const { isOpen, handleSlideNav } = useContext(NavContext)
  return <MaskStyles isOpen={isOpen} onClick={() => handleSlideNav()} />
}

export default Mask
