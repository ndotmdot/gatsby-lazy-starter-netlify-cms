
import React from "react"
import { RowFixed, BasicSwiper } from "elements"

const HomeSlider = (props) => {
  console.log(props)
  const { slider } = props.data.childMarkdownRemark.frontmatter

  return(
    <div>
      <RowFixed>
        {
          slider.map(slide => {
            const { images } = slide
            return <BasicSwiper images={images} key={Math.random()} classes="col-sm-6 col-12"/>
          })
        }
      </RowFixed>
    </div>
  )
}

export default HomeSlider


