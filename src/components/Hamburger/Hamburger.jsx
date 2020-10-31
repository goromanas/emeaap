import React from 'react'

const Hamburger = ({ menuOpen, onClick, className }) => {
  return (
    <div
      className={`hamburger hamburger--collapse ${
        menuOpen ? 'is-active' : ''
      } ${className}`}
      onClick={onClick}
    >
      <div className="hamburger-div">
        <div className="hamburger-inner" />
      </div>
    </div>
  )
}

export default Hamburger
