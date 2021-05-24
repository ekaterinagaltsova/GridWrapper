import React from 'react';
// import { string } from 'prop-types';

const MyContext = React.createContext();

// const CountProvider = ({ children }) => {
//   const [state, dispatch] = React.useReducer();
//   const value = { state, dispatch };
//   return <IdContext.Provider value={value}>{children}</IdContext.Provider>;
// };

// const useCount = () => {
//   const context = React.useContext(IdContext);
//   if (context === undefined) {
//     throw new Error('useCount must be used within a CountProvider');
//   }
//   return context;
// };

// CountProvider.propTypes = {
//   children: string.isRequired,
// };

export default (MyContext);
