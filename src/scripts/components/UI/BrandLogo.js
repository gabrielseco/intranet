import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';

const UIBrandLogo = ( { name , URL, openLink } ) => {
  openLink = openLink === true ? "_blank" : null
  return(
  <div className="brand-logo">
    <div id="logo">
      <div className="foot1"></div>
      <div className="foot2"></div>
      <div className="foot3"></div>
      <div className="foot4"></div>
    </div> <a href={URL} target={openLink}>{name}</a>
  </div>
)
}

UIBrandLogo.PropTypes = {
  name: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
  openLink:PropTypes.bool
}

export default UIBrandLogo
