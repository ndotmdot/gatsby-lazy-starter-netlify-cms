import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Swiper from 'react-id-swiper';

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
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
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

  const swiperParams = {
      speed: 400,
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      grabCursor: true,
      lazy: false
  }
  
  const renderProject = (project, key) => {
    const { images, title } = project
    return (
      <div className="project" key={key}>
        <div className="title">
          <p>{title}</p>
          <span className="swiper-pagination.gallery-dots" />
        </div>
        <Swiper {...swiperParams} className="gallery">
          {
            images.map(image => {
              return (
                <Img fluid={image.childImageSharp.fluid} key={image.childImageSharp.fluid.src}/>
              )
            })
          }
        </Swiper>
      </div>
    )
  }

  return(
    <div>
      {
        projects.map(project => {
          return renderProject(project, project.title)
        })
      }
    </div>
  )
}

export default ProjectGallery


