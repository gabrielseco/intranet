import React, { Component, PropTypes } from 'react'


const Home = (props) => {
  return(
      <div className='home blog'>
        {props.children}
      </div>
  )
 }

export default Home
