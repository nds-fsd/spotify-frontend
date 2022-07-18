import React, { createContext, useContext, useState } from 'react';

const ListContext = createContext();

export const ListContextProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [song, setSong] = useState([]);
  const [artist, setArtist] = useState([]);
  const [album, setAlbum] = useState([]);
  const [genre, setGenre] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [user, setUser] = useState([]);

  const value = {
    list,
    setList,
    song,
    setSong,
    artist,
    setArtist,
    album,
    setAlbum,
    genre,
    setGenre,
    playlist,
    setPlaylist,
    user,
    setUser,
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};

export const useListContext = () => useContext(ListContext);
