import React, { createContext, useContext, useState } from 'react';
import About from '../components/About';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const NavContext = createContext('About');

export function useNav() {
  return useContext(NavContext);
}

export function NavProvider({ children }) {
  const [navOption, setNavOption] = useState('About');

  const componentMap = {
    About,
    Resume,
    Projects,
    Contact
  };

  const navChoice = componentMap[navOption];

  const handleItemClick = (componentName) => {
    setNavOption(componentName);
    // console.log({navChoice})
  };

  const value = {
    navChoice,
    handleItemClick,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

