import React, { Component, PropTypes } from 'react'

const UIBrandLogo = ( { name } ) => (

  <div className="brand-logo">
    <div id="logo">
      <div className="foot1"></div>
      <div className="foot2"></div>
      <div className="foot3"></div>
      <div className="foot4"></div>
    </div> {name}
  </div>
)

UIBrandLogo.PropTypes = {
  name: PropTypes.string.isRequired,
}

export default UIBrandLogo
