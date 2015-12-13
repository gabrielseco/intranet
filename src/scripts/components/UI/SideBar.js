'use strict';

import React, { Component, PropTypes } from 'react'
import UIBrandLogo from './BrandLogo';
import UIUserInfo from './UserInfo';
import UIMenu from './Menu';

var style = {
  width: '260px',
  left: '0px'
};





class UISideBar extends React.Component {

    render() {

        return (

          <div>
            <aside className="sidebar fixed" style={style}>
              <UIBrandLogo name={this.props.data.config.NAME}/>
              <UIUserInfo config={this.props.data.config} />
              <UIMenu menu={this.props.data.menu}/>
            </aside>
          </div>

        );

    }
}

UISideBar.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UISideBar
