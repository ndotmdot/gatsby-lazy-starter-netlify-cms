import React, { useEffect } from 'react'
import './Ticker.scss'

const Ticker = (props) => {
  const { items } = props.data.childMarkdownRemark.frontmatter

  const getLetters = (items) => {
    let chars = []

    for(let i = 0; i < items.length; i++) {
      let stringTemp = Array.from(items[i].description)

      for(let j = 0; j < stringTemp.length; j++){
        let charObject = {
          char: stringTemp[j],
          link: items[i].link
        }
        chars.push(charObject)
      }
    }
    const charsTripple = []
    for(let k = 0; k < 3; k++) {
      for(let l = 0; l < chars.length; l++) {
        charsTripple.push(chars[l])
      }
    }
    return charsTripple
  }
  const letters = getLetters(items)

  const animateTicker = () => {
    const message = document.getElementsByClassName("message")
    const firstChar = document.getElementsByClassName("message")[0].childNodes[0]
    firstChar.remove()
    message[0].appendChild(firstChar)
  }

  useEffect(() => {
    animateTicker()
    const tickerAnimation = window.requestAnimationFrame(() => {setInterval(animateTicker, 300)})

    return clearInterval(tickerAnimation)
  })

  if(items) {
    return (
    <div className="ticker">
      <div className="message">
        {
        letters.map(letter => {
          const { char, link } = letter
          const key = Date.now() + char + link + Math.random()
          if(link) {
            return <a href={link} key={key}><p>{char}</p></a>
          }else 
          {
            return <p key={key}>{char}</p>
          }
        })
      }
      </div>
    </div>
  )
  }
  else {
    return null
  }
}

export default Ticker
