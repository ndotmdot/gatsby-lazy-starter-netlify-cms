import React, { useState, useEffect } from 'react'
import Swiper from 'react-id-swiper';
import classNames from 'classnames'
import "./BasicSwiper.scss"

const BasicSwiper = (props) => {
  const { images, title, showPagination, classes } = props

  const [ swiper, updateSwiper ] = useState(null)
  const [ pagination, setPagination ] = useState(1)
  const params = {
    speed: 400,
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
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
        },
        {showPagination &&
          <span className="pagination"><p>{pagination}</p></span>
        }
      </div>
      <Swiper {...params}>
        {
          images.map(image => {
            return (
              <span key={image.childImageSharp.fixed.src + Math.random()}>
                <img src={image.childImageSharp.fixed.src} alt=" "/>
              </span>
            )
          })
        }
      </Swiper>
    </div>
  )
}
export default BasicSwiper
