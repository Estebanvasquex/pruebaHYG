import React from 'react'
import errorimg from '../../assets/404.avif'


const Error404 = () => {
  return (
    <div>
      <img src={errorimg} alt=""  style={{with: "100vw", height: "100vh"}}/>
    </div>
  )
}

export default Error404