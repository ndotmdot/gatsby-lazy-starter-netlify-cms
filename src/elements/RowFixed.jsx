import React from "react"
import classNames from 'classnames';

const rowFixed = (props) => {
  const { classes, children, noGutters, ...other } = props

  return(
    <div className={classNames(classes, "container ")} {...other}>
      <div className={classNames("row", noGutters ? "no-gutters" : null)}>
        {children}
      </div>
    </div>
  )
}

export default rowFixed


