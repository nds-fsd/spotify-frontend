import { createContext } from 'react';

export const PlayingContext = createContext({
  valueVol: undefined,
  playingSong: '',
  playingQueue: [],
  isPlaying: false,
  addSongToQueue: () => {},
  addQueue: () => {},
  deleteQueue: () => {},
  setPlaying: () => {},
  playSong: () => {},
  SetvalueVol: () => {},
});
