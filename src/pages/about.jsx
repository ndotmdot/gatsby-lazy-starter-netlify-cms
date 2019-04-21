import React from "react"
import { graphql } from "gatsby"
import { SEO } from "utilities"
import { RowFixed } from 'elements'

export default ({ data }) => {
  const { html } = data.about.childMarkdownRemark;
  const { title } = data.about.childMarkdownRemark.frontmatter;

  return(
    <React.Fragment>
      <SEO title="Info" lang="de" />
      <RowFixed classes="py-3">
        <div className="col-sm-3">
        <p>{title}</p>
        </div>
          <div className="col-sm-9 p-large" 
            dangerouslySetInnerHTML={
              {
                "__html": html,
              }
            } 
          />
        </RowFixed>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    about: file(relativePath: {eq: "about.md"}) {
      childMarkdownRemark {
        frontmatter {
          title
        }
        html
      }
    } 
  }
`