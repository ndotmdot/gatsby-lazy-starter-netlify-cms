
import React from "react"
import { BasicSwiper } from "elements"
import "./HomeSlider.scss"

const HomeSlider = (props) => {
  const { slider } = props.data.childMarkdownRemark.frontmatter

  return(
    <div className="home-slider no-gutters">
      <BasicSwiper images={slider} key={Math.random()} classes="col-12"/>
    </div>
  )
}

export default HomeSlider


