import React, { Component, PropTypes } from 'react'

//Uso el JSON DEL MENÚ Y MIRO SI TIENE HIJOS

//SI NO TIENE COJE LA PRIMERA ESTRUCTURA

//SI LOS TIENE HACEMOS UN MAP

class UIMenu extends React.Component {

  render(){

    var list = this.props.menu.map((el, i) => {
      var ICON = 'md '+el.ICON
      var TARGET = '#'+el.ID;
      var NAME = el.NAME;

      if (el.CHILDREN.length === 0) {
        return (
          <li key={i} icon={ICON}>
            <a href={el.LINK}>
              <i className={ICON}></i>&nbsp;
              <span>{NAME}</span>
            </a>
          </li>
        )
      } else {
        var listChildren = el.CHILDREN.map((child,j)=> {
          return(
            <li key={j} name={NAME}>
              <a href={child.LINK}>
                <span id={child.ID} className="pull-right badge theme-primary-bg z-depth-0">{child.NOTIFICATIONS}
                </span>
                <span> {child.NAME} </span>
              </a>
            </li>
          )
        })
        return (
          <li key={i}>
            <a data-toggle="collapse" data-target={TARGET} aria-expanded="false"
            aria-controls={NAME} className="collapsible-header waves-effect">
              <i className={ICON}></i>&nbsp;{NAME}
            </a>
              <ul id={el.ID} className="collapse">
                {listChildren}
              </ul>
          </li>
        )
      }
    });
    return (
      <ul className="menu-links">
        {list}
      </ul>
    )
  }


}

UIMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default UIMenu
