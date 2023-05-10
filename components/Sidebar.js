import React, { useContext } from 'react';
import SelectedComponentContext from '../contexts/SelectedComponentContext';

function Sidebar() {
  const { setSelectedComponent } = useContext(SelectedComponentContext);

  function handleMenuItemClick(componentName) {
    setSelectedComponent(componentName);
  }

  return (
    <div>
      <ul>
        <li onClick={() => handleMenuItemClick('AboutMe')}>About Me</li>
        <li onClick={() => handleMenuItemClick('Resume')}>Resume</li>
        <li onClick={() => handleMenuItemClick('Projects')}>Projects</li>
        <li onClick={() => handleMenuItemClick('ContactMe')}>Contact Me</li>
      </ul>
    </div>
  );
}

export default Sidebar