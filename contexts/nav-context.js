import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext(null);

export function useNav() {
  return useContext(NavContext);
}

export function NavProvider({ children }) {
  const [navOption, setNavOption] = useState('AboutMe');

  const handleItemClick = (component) => {
    setNavOption(component);
  };

  const value = {
    navOption,
    handleItemClick,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}
