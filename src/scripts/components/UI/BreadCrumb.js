import React, { Component, PropTypes } from 'react'

const UIBreadCrumb = ({data}) => {
  var list = data.map((res, i) => {
    if(i === 0) {
      return ( <li key={i}><a href={res.LINK} target="_blank">{res.NAME}</a></li> )

    }

    return (<li key={i} className="active">{res.NAME}</li>)

  });
  return (
    <ul className="breadcrumb">
      {list}
    </ul>
  )


}

UIBreadCrumb.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default UIBreadCrumb
