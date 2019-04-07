import React from "react"
import classNames from 'classnames';

const rowFixed = (props) => {
  const { classes, children, ...other } = props

  return(
    <div className={classNames(classes, "container-fluid")} {...other}>
      <div className="row">
        {children}
      </div>
    </div>
  )
}

export default rowFixed


