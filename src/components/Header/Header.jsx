import { Link } from "gatsby"
import React from "react"
import { RowFixed } from "elements"

const Header = ({ siteTitle, menuLinks, location = "isHome" }) => {

  return (
    <header >
    <RowFixed>
      <div className="col">
        <p>{siteTitle}</p>
      </div>
      {
        menuLinks.map(link => {
          const isHome = location === "isHome" ? true : false
          const linkIsCurrentPage = location.pathname === link.link ? false : true

          if(isHome){
            if(link.link === "/about") {
              return (
                <div className="col" key={link.link}>
                  <Link to={link.link}><p>{link.name}</p></Link>
                </div>
              )
            }
          } else {
            if(linkIsCurrentPage){
              return (
                <div className="col" key={link.link}>
                  <Link to={link.link}><p>{link.name}</p></Link>
                </div>
              )
            }
          }
          return <div key={link.link}/>
        })
      }
    </RowFixed>
    </header>
  )
}

export default Header
