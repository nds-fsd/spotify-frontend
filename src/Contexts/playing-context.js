import { createContext } from 'react';

export const PlayingContext = createContext({
  indexSongs: undefined,
  countSongs: undefined,
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
  setCountSongs: () => {},
});
