import React, { Component, PropTypes } from 'react'


const ShareButtons = ( { buttons } ) => {

  var list = buttons.map((button, i) => {
    let classes = {
      awesome: 'fa fa-'+button.icon,
      social: 'socialdark '+button.shape
    };

    return (
      <li key={i}>
        <a href="#" className={classes.social}><i className={classes.awesome}></i></a>

      </li>
    )
  })
  return(
    <ul className='sharebuttons'>
      <li>Compartir:</li>
      {list}
    </ul>
  )
}

ShareButtons.PropTypes = {
  buttons: React.PropTypes.array.isRequired
}
export default ShareButtons
