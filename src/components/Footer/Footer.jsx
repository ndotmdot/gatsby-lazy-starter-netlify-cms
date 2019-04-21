import React from "react"
import { RowFixed } from "elements"
import './Footer.scss'

const Footer = ({ siteTitle}) => {
  
  return (
    <RowFixed>
      <footer className="col font-mono">
        © {new Date().getFullYear()}, {siteTitle}
      </footer>
    </RowFixed>
  )
}

export default Footer


