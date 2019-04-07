import React from "react"
import { RowFixed } from "elements"

const Header = ({ siteTitle}) => {
  
  return (
    <header >
    <RowFixed>
      <footer className="col">
        © {new Date().getFullYear()}, {siteTitle}
      </footer>
      
    </RowFixed>
    </header>
  )
}

export default Header


