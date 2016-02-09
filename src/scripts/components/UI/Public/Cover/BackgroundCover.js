import React, { Component, PropTypes } from 'react'


const BackgroundCover = ( { URL } ) => {
  var style = {
    backgroundImage: 'url('+ URL +')'
  }

  return(
    <div>
      <div className="background"
            style={style}>
      </div>
    </div>
  )
}

BackgroundCover.PropTypes = {
  URL: PropTypes.string.isRequired,
}
export default BackgroundCover
