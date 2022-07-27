import { createContext } from 'react';

export const PlayingContext = createContext({
  playingSong: '',
  playingQueue: [],
  isPlaying: false,
  addSongToQueue: () => {},
  addQueue: () => {},
  deleteQueue: () => {},
  setPlaying: () => {},
  playSong: () => {},
});
