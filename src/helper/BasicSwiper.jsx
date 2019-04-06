import React, { useState, useEffect } from 'react'
import Swiper from 'react-id-swiper';
import classNames from 'classnames'
import "./BasicSwiper.scss"

const BasicSwiper = (props) => {
  const { images, title, classes } = props

  const [ swiper, updateSwiper ] = useState(null)
  const [ slideIndex, setSlideIndex ] = useState(1)
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
        setSlideIndex(swiper.realIndex + 1)
      })
    }
  })

  return (
    <div className={classNames("swiper", classes)} >
      <div className="info">
        <span className="title"><p>{title}</p></span>
        <span className="pagination"><p>{slideIndex}</p></span>
      </div>
      <Swiper {...params}>
        {
          images.map(image => {
            return (
              <span key={image.childImageSharp.fixed.src}>
                <img src={image.childImageSharp.fixed.src} alt="marc thalberg"/>
              </span>
            )
          })
        }
      </Swiper>
    </div>
  )
}
export default BasicSwiper
