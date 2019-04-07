
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { RowFixed, BasicSwiper } from "elements"

const ProjectGallery = () => {
  const { gallery } = useStaticQuery(
    graphql`
      query {
        gallery: file(relativePath: {eq: "home-gallery.md"}) {
          childMarkdownRemark {
            frontmatter {
              projects {
                title
                images {
                  childImageSharp {
                    fixed(width: 600) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const { projects } = gallery.childMarkdownRemark.frontmatter

  return(
    <div>
      <RowFixed>
        {
          projects.map(project => {
            const { images, title } = project
            return <BasicSwiper images={images} title={title} key={title} classes="col-6"/>
          })
        }
      </RowFixed>
    </div>
  )
}

export default ProjectGallery


