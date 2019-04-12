import React, { useEffect } from 'react'
import { RowFixed } from 'elements'
import './Ticker.scss'

const Ticker = (props) => {
  const { items } = props.data.childMarkdownRemark.frontmatter

  const messages = (() => {
    const temp =[]
    for(let i = 0; i < 1; i ++){
      items.map(item => (
        temp.push(item)
      ))
    }
    return temp
  })()

  if(items) {
    return (
      <RowFixed>
        <div className="col-12 ticker">
          <marquee className="" direction="left" width="100%" scrollamount="4">
            {
              messages.map(message => {
                const { description, link } = message
                const key = Date.now() + description + link + Math.random()
                if(link) {
                  return <a href={link} key={key}><p>{description}</p></a>
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
