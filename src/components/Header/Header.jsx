import { Link } from "gatsby"
import React from "react"
import { RowFixed } from "elements"
import { Location } from '@reach/router';

import './Header.scss'

const Header = ({ siteTitle, menuLinks}) => {


  return (
    <header >
      <Location>
        {
          locationProps =>  (
            <RowFixed>
              <div className="col-12">
                <span>
                  <p className="bold">{siteTitle}</p>   
                </span>
                <span className="nav">
                  {
                    menuLinks.map(link => {
                      const linkIsCurrentPage = locationProps.location.pathname === link.link ? false : true

                      if(locationProps.location.pathname === "/"){
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
            )
        }
      </Location>
    </header>
  )
}

export default Header
