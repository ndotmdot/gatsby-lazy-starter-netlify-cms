import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Ticker from "components/Ticker/Ticker"
import Header from "components/Header/Header"
import Footer from "components/Footer/Footer"
import "./Layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query layoutQuery {
      site {
        siteMetadata {
          siteTitle,
          menuLinks {
            name
            link
          }
        }
      }
      ticker: file(relativePath: {eq: "home-ticker.md"}) {
        childMarkdownRemark {
          frontmatter {
            items {
              description
              link
            }
          }
        }
      }
    }
  `)
  const { site, ticker } = data
  const { menuLinks, siteTitle } = site.siteMetadata

  return (
    <React.Fragment>
      <Ticker data={ticker} />
      <Header siteTitle={siteTitle} menuLinks={menuLinks}/>
      <main>
        {children}
      </main>
      <Footer siteTitle={siteTitle} />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
