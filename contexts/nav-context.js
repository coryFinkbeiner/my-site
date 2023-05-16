import React, { createContext, useContext, useState } from 'react';
import About from '../components/About';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const NavContext = createContext('About');

export function useNav() {
  return useContext(NavContext);
}

const componentMap = {
  About: About,
  Resume: Resume,
  Projects: Projects,
  Contact: Contact
};

export function NavProvider({ children }) {
  // const [navOption, setNavOption] = useState('About');
  const [navChoice, setNavChoice] = useState()



  // const navChoice = componentMap[navOption];

  const handleItemClick = (componentName) => {
    // setNavOption(componentName);
    setNavChoice(componentMap[componentName]);
    console.log({navChoice})
  };

  const value = {
    navChoice,
    handleItemClick,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

