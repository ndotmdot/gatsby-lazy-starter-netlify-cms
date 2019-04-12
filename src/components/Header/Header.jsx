import { Link } from "gatsby"
import React from "react"
import { RowFixed } from "elements"
import './Header.scss'

const Header = ({ siteTitle, menuLinks, location}) => {
  console.log(location.pathname)

  return (
    <header >
    <RowFixed>
      <div className="col-12">
        <span>
          <p className="bold">{siteTitle}</p>   
        </span>
        <span className="nav">
          {
            menuLinks.map(link => {
              const linkIsCurrentPage = location.pathname === link.link ? false : true

              if(location.pathname === "/"){
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
