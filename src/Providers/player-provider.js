import { useReducer, useState } from 'react';
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

  return (
    <PlayingContext.Provider value={{ ...state, playSong, setPlaying, valueVol, SetValueVol }}>
      {children}
    </PlayingContext.Provider>
  );
};

export default PlayerProvider;
