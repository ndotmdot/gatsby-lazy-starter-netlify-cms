
import React from "react"
import { RowFixed, BasicSwiper } from "elements"

const ProjectGallery = (props) => {
  const { projects } = props.data.childMarkdownRemark.frontmatter

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


