// import React, { createContext, useContext, useState } from 'react';

// const ListContext = createContext();

// export const ListContextProvider = ({ children }) => {
//   const [searchText, setSearchText] = useState('');
//   const [searchItem, setSearchItem] = useState('');

//   const value = {
//     searchItem,
//     setSearchItem,
//     searchText,
//     setSearchText,
//   };

//   return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
// };

// export const useListContext = () => useContext(ListContext);
