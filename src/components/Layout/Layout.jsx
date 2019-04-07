/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import "./Layout.css"
import "scss/styles.scss"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  const { title, menuLinks } = data.site.siteMetadata

  return (
    <div>
      <Header siteTitle={title} menuLinks={menuLinks} location={location}/>
      <main>{children}</main>
      <Footer siteTitle={title} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
