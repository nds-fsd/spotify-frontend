import React, { createContext, useContext, useState } from 'react';

const ListContext = createContext();

export const ListContextProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [genres, setGenres] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [users, setUsers] = useState([]);

  const value = {
    lists,
    setLists,
    songs,
    setSongs,
    artists,
    setArtists,
    albums,
    setAlbums,
    genres,
    setGenres,
    playlists,
    setPlaylists,
    users,
    setUsers,
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};

export const useListContext = () => useContext(ListContext);
