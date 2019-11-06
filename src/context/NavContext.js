import React, { createContext, useState } from "react"

export const NavContext = createContext()

export const NavProvider = props => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSlideNav = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <NavContext.Provider value={{ isOpen, handleSlideNav }}>
      {props.children}
    </NavContext.Provider>
  )
}
