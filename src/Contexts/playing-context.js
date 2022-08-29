import { createContext } from 'react';

export const PlayingContext = createContext({
  index: undefined,
  valueVol: undefined,
  playingSong: [],
  playingQueue: [],
  isPlaying: false,
  progress: false,
  addSongToQueue: () => {},
  addQueue: () => {},
  deleteQueue: () => {},
  setPlaying: () => {},
  playSong: () => {},
  SetvalueVol: () => {},
  setPlayingQueue: () => {},
  setIndex: () => {},
  setProgress: () => {},
});
