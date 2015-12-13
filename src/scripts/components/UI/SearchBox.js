import React, { Component, PropTypes } from 'react'

class SearchBox extends React.Component {
  render(){
    return (
      <div>
        <div className="mat-slide-right pull-right">
          <form className="search-form form-inline pull-left">
            <div className="form-group">
              <label className="sr-only" htmlFor="search-input">Search</label>
              <input type="text" className="form-control"
                    id="search-input" placeholder="Buscar..." autofocus=""/> </div>
          </form>
        </div>
        <div className="pull-right">
          <button className="btn btn-sm btn-link pull-left withoutripple"> <i className="md md-search f20"></i> </button>
        </div>
      </div>
    )
 }
}


export default SearchBox
