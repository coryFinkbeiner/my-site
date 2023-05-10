import React, { useState } from 'react';
import AboutMe from '../components/AboutMe'
import Resume from '../components/Resume'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'

// Create the context
const SelectedComponentContext = React.createContext(null);

function Home() {
  // Initialize the state variable and the state updater function
  const [selectedComponent, setSelectedComponent] = useState('AboutMe');

  // Define the click handler
  const handleItemClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <SelectedComponentContext.Provider value={{ selectedComponent, setSelectedComponent }}>
      <div className='container'>
        <div className='top'>
          <div className='left'>
            <ul>
              <li onClick={() => handleItemClick('AboutMe')}>About Me</li>
              <li onClick={() => handleItemClick('Resume')}>Resume</li>
              <li onClick={() => handleItemClick('Projects')}>Projects</li>
              <li onClick={() => handleItemClick('ContactMe')}>Contact Me</li>
            </ul>
          </div>
          <div className='center'>
            {selectedComponent === 'AboutMe' && <AboutMe />}
            {selectedComponent === 'Resume' && <Resume />}
            {selectedComponent === 'Projects' && <Projects />}
            {selectedComponent === 'ContactMe' && <ContactMe />}
          </div>
        </div>
      </div>
    </SelectedComponentContext.Provider>
  );
}

export default Home