import React, { createContext, useContext, useState } from 'react';


const NavContext = createContext('About');

export function useNav() {
  return useContext(NavContext);
}


export function NavProvider({ children }) {

  const [selectedComponent, setSelectedComponent] = useState('About')


  const handleItemClick = (componentName) => {
    setSelectedComponent(componentName);
    // console.log(selectedComponent)

  };

  const value = {
    selectedComponent,
    handleItemClick,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}









// // Assuming you have a string called `componentName` that determines which component to render
// const componentName = 'About';

// const renderComponent = (name) => {
//   switch (name) {
//     case 'About':
//       return <About />;
//     case 'Resume':
//       return <Resume />;
//     case 'Projects':
//       return <Projects />;
//     case 'Contact':
//       return <Contact />;
//     default:
//       return null; // Render default component or handle unknown component case
//   }
// };

// // Usage example:
// const MyComponent = () => {
//   return (
//     <div>
//       {/* Pass the `componentName` string to the renderComponent function */}
//       {renderComponent(componentName)}
//     </div>
//   );
// };