import React, { useState, useEffect } from 'react'
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import classNames from 'classnames'
import Img from "gatsby-image/withIEPolyfill"
import "./BasicSwiper.scss"

const BasicSwiper = (props) => {
  const { images, title, showPagination, classes } = props

  const [ swiper, updateSwiper ] = useState(null)
  const [ pagination, setPagination ] = useState(1)
  const params = {
    speed: 500,
    autoplay: {
      delay: 1500,
      disableOnInteraction: true,
    },
    spaceBetween: 0,
    loopedSlides: images.length * 2,
    slidesPerView: 1,
    loop: true,
    lazy: true,
    getSwiper: updateSwiper,
  }

  useEffect(() => {
    if(swiper !== null) {
      swiper.on('slideChange', () => {
        setPagination(swiper.realIndex + 1)
      })
    }
  })

  return (
    <div className={classNames("swiper", classes)} >
      <div className="info">
        {title &&
          <span className="title bold"><p>{title}</p></span>
        }
        {showPagination &&
          <span className="pagination"><p>{pagination}</p></span>
        }
      </div>
      <Swiper {...params}>
        {
          images.map(image => {
            return (
              <span key={image.childImageSharp.fluid.src + Math.random()}>
                <Img fluid={image.childImageSharp.fluid} critical fadeIn={false} objectFit="cover" />
              </span>
            )
          })
        }
      </Swiper>
    </div>
  )
}
export default BasicSwiper
