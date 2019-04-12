import React from "react"
import { RowFixed } from "elements"
import './Footer.scss'

const Header = ({ siteTitle}) => {
  
  return (
    <header >
    <RowFixed>
      <footer className="col font-mono">
        © {new Date().getFullYear()}, {siteTitle}
      </footer>
      
    </RowFixed>
    </header>
  )
}

export default Header


