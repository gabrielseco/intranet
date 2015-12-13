import React, { Component, PropTypes } from 'react'

const UIPageHeader = ( { info }) => {

  var ICON = 'md '+info.ICON;

  return (
    <div className="page-header">
        <h1>
          <i className={ICON}></i> {info.TITULO}
        </h1>
        <p className="lead"> {info.TEXTO} </p>
   </div>
  )

}

UIPageHeader.propTypes = {
  info: PropTypes.object.isRequired,
}

export default UIPageHeader
