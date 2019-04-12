import React from "react"
import { RowFixed } from 'elements'
import { SEO } from "utilities"
import { graphql } from "gatsby"

export default ({ data, location }) => {
  const { phone, email } = data.contact.childMarkdownRemark.frontmatter
  return(
    <React.Fragment>
      <SEO title="Page two" />
        { phone.show &&
          <RowFixed>
            <div className="col-3">
              <p>Phone</p>
            </div>
            <div className="col-9">
              <a href={`tel:${phone.number}`}>
                {phone.number}
              </a>
            </div>
          </RowFixed> 
        },
        { email.show && 
          <RowFixed>
            <div className="col-3">
              <p>Email</p>
            </div>
            <div className="col-9">
              <a href={`mailto:${email.address}`}>
                {email.address}
              </a>
            </div>
          </RowFixed> 
        }
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    contact: file(relativePath: {eq: "contact.md"}) {
      childMarkdownRemark {
        frontmatter {
          phone {
            number
            show
          }
          email {
            address
            show
          }
        }
      }
    } 
  }
`