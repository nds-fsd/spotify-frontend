import React, { useRef, createContext, useContext, useState } from 'react';

const ListContext = createContext();

export const ListContextProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState('');
  const [home, setHome] = useState('');
  const [artist, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [genres, setGenres] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [createItem, setCreateItem] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [editData, setEditData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const createItemInput = useRef(null);
  const editItemInput = useRef(null);

  const value = {
    searchText,
    setSearchText,
    editData,
    setEditData,
    createItem,
    setCreateItem,
    editItem,
    setEditItem,
    createItemInput,
    editItemInput,
    home,
    setHome,
    song,
    setSong,
    refresh,
    setRefresh,
    lists,
    setLists,
    songs,
    setSongs,
    artist,
    setArtist: (date) => {
      setArtist(date);
    },
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
