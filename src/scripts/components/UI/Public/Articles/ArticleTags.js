import React, { Component, PropTypes } from 'react'


const ArticleTags = ( {tags} ) => {
  return(
    <div className='tags'>
      {tags.map((tag, i ) => <a href="/#/tag/${tag}/" rel="tag" key={i}>{tag}</a>)}
    </div>
  )
}

ArticleTags.PropTypes = {
  tags:React.PropTypes.array.isRequired
}
export default ArticleTags
