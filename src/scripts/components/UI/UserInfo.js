import React, { Component, PropTypes } from 'react'

const UIUserInfo = ( { config } ) => (
  <div className="user-logged-in">
    <div className="content">
      <div className="user-name">{config.PROFILE.NAME} &nbsp;
        <span className="text-muted f9">{config.PROFILE.RIGHTS}</span>
      </div>
      <div className="user-email">{config.PROFILE.EMAIL}</div>
      <div className="user-actions">
        <a className="m-r-5" href="#">configuración</a>
        <a href="#">cerrar sessión</a>
      </div>
    </div>
  </div>
)


UIUserInfo.propTypes = {
  config: PropTypes.object.isRequired,
}


export default UIUserInfo
