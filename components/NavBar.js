import React from 'react'

const navNames = ['About', 'Resume', 'Projects', 'Contact']

const handleItemClick = (componentName) => {
  setSelectedComponent(componentName);
};


const navButton = name => (

  <div
    className='nav-btn'
    onClick={() => handleItemClick({name})}
  >
    {name}
  </div>

)

function NavBar() {

  return (
    <div className='nav-bar'>
      {navNames.map(name => {
        return navButton(name)
      })}
    </div>
  )
}

export default NavBar
