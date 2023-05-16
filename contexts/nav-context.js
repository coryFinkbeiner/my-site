import React, { createContext, useContext, useState } from 'react';


const NavContext = createContext('About');

export function useNav() {
  return useContext(NavContext);
}


export function NavProvider({ children }) {

  const [selectedComponent, setSelectedComponent] = useState('About')


  const handleItemClick = (componentName) => {
    setSelectedComponent(componentName);
    console.log(selectedComponent)

  };

  const value = {
    selectedComponent,
    handleItemClick,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

