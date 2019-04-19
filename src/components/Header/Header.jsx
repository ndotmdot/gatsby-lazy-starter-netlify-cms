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
                      return <Link to={link.link} key={link.link} ><p>{link.name}</p></Link>
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
