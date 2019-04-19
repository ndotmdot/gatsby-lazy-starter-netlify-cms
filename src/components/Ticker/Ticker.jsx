/* eslint-disable jsx-a11y/no-distracting-elements */

import React from 'react'
import { RowFixed } from '../../elements/'
import './Ticker.scss'

const Ticker = (props) => {
  const { items } = props.data.childMarkdownRemark.frontmatter

  const messages = (() => {
    const temp =[]
    for(let i = 0; i < 10; i ++){
      items.map(item => (
        temp.push(item)
      ))
    }
    return temp
  })()

  if(items) {
    return (
      <RowFixed>
        <div className="col-12 ticker font-mono">
          <marquee className="" direction="left" width="100%" scrollamount="4">
            {
              messages.map((message, index) => {
                const { description, link } = message
                const key = index + Math.random()
                if(link) {
                  return <p key={key}><a href={link}>{description}</a></p>
                }else 
                {
                  return <p key={key}>{description}</p>
                }
              })
            }
          </marquee>
        </div>
      </RowFixed>
  )
  }
  else {
    return null
  }
}

export default Ticker
