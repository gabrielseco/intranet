import React, { Component, PropTypes } from 'react'
import BreadCrumb from '../UI/BreadCrumb';
import SearchBox from '../UI/SearchBox';





class MainContainer extends React.Component {

  render(){

    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header pull-left">
            <button type="button" className="navbar-toggle pull-left m-15"
                    data-activates=".sidebar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
            </button>
            <BreadCrumb data={this.props.data}/>
          </div>
          <ul className="nav navbar-nav navbar-right navbar-right-no-collapse">
            <li navbar-search="" className="pull-right">
              <SearchBox />
            </li>
          </ul>
        </div>
      </nav>
    )

  }


}

MainContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default MainContainer
