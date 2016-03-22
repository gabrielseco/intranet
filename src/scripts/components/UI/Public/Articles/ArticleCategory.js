import React, { Component, PropTypes } from 'react'


const ArticleCategory = ( { category } ) => {

  const style = {
    background: '#0085c3'
  }

  return(
    <a className="category" style={style} href="category/${category}/">{category}</a>
  )
}

ArticleCategory.PropTypes = {

}
export default ArticleCategory
