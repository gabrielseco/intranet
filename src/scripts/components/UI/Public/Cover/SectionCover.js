import React, { Component, PropTypes } from 'react'

const SectionCover = ({ URL, title, description }) => {
  return(
    <section className="blogtitle wrapper">
			<a href={URL}>
        <h1 itemprop="headline">{title}</h1>
      </a>
			<p className="description" itemprop="description">{description}</p>
			<hr/>
		</section>
  )
}

SectionCover.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired
}

export default SectionCover
