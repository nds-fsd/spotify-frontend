import { useReducer, useState, useEffect } from 'react';
import { PlayingContext } from '../Contexts/playing-context';

const playingSong = localStorage.getItem('playingSong');
const isPlaying = localStorage.getItem('isPlaying');

const initialState = {
  playingSong,
  isPlaying,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'playSong':
      return {
        ...state,
        playingSong: action.playingSong,
        isPlaying: action.isPlaying,
      };
    case 'pauseSong':
      return {
        ...state,
        isPlaying: action.isPlaying,
      };
    default:
      return state;
  }
};

const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const playSong = (song) => {
    localStorage.setItem('playingSong', song);
    localStorage.setItem('isPlaying', true);
    dispatch({ type: 'playSong', playingSong: song, isPlaying: true });
  };

  const setPlaying = (playPause) => {
    localStorage.setItem('isPlaying', playPause);
    dispatch({ type: 'pauseSong', isPlaying: playPause });
  };
  const [valueVol, SetValueVol] = useState(80);
  const [playingQueue, setPlayingQueue] = useState([]);
  const [indexSongs, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [countSongs, setCountSongs] = useState();
  const [playListSongs, setPlayListSongs] = useState([]);
  const [footImg, setFootImg] = useState();
  const [footTitle, setFootTitle] = useState();
  const [newNamePlaylist, setNewNamePlaylist] = useState(false);

  useEffect(() => {
    playSong(playingQueue);
    setIndex(indexSongs);
  }, [playingQueue, isPlaying]);

  return (
    <PlayingContext.Provider
      value={{
        ...state,
        playSong,
        setPlaying,
        valueVol,
        SetValueVol,
        playingQueue,
        setPlayingQueue,
        indexSongs,
        setIndex,
        progress,
        setProgress,
        countSongs,
        setCountSongs,
        playListSongs,
        setPlayListSongs,
        footImg,
        setFootImg,
        footTitle,
        setFootTitle,
        newNamePlaylist,
        setNewNamePlaylist,
      }}
    >
      {children}
    </PlayingContext.Provider>
  );
};

export default PlayerProvider;
