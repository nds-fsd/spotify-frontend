// import React, { useRef, createContext, useContext, useState } from 'react';

// const HomeRefactorContext = createContext();

// export const HomeRefactorContextProvider = ({ children }) => {
//   const [songs, setSongs] = useState([]);
//   const [someSongs, setSomeSongs] = useState([]);
//   const [artist, setArtist] = useState([]);
//   const [someArtist, setSomeArtist] = useState([]);
//   const [albums, setAlbums] = useState([]);
//   const [someAlbums, setSomeAlbums] = useState([]);
//   const [genres, setGenres] = useState([]);
//   const [someGenres, setSomeGenres] = useState([]);

//   const value = {
//     songs,
//     someSongs,
//     setSongs,
//     setSomeSongs,
//     artist,
//     setArtist: (date) => {
//       console.log(date);
//       setArtist(date);
//     },
//     someArtist,
//     setSomeArtist,
//     albums,
//     setAlbums,
//     someAlbums,
//     setSomeAlbums,
//     genres,
//     setGenres,
//     someGenres,
//     setSomeGenres,
//   };

//   return <HomeRefactorContext.Provider value={value}>{children}</HomeRefactorContext.Provider>;
// };

// export const useHomeRefactorContext = () => useContext(HomeRefactorContext);
