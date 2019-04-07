import { Link } from "gatsby"
import React from "react"
import { RowFixed } from "elements"
import './Header.scss'

const Header = ({ siteTitle, menuLinks, location = "isHome" }) => {

  return (
    <header >
    <RowFixed>
      <div className="col-12">
        <span>
          <p>{siteTitle}</p>   
        </span>
        <span className="nav">
          {
            menuLinks.map(link => {
              const isHome = location === "isHome" ? true : false
              const linkIsCurrentPage = location.pathname === link.link ? false : true

              if(isHome){
                if(link.link === "/about") {
                  return (
                    <Link to={link.link} key={link.link} ><p>{link.name}</p></Link>
                  )
                }
              } else {
                if(linkIsCurrentPage){
                  return (
                    <Link to={link.link} key={link.link} ><p>{link.name}</p></Link>
                  )
                }
              }
              return null
            })
          }
        </span>
      </div>
    </RowFixed>
    </header>
  )
}

export default Header
