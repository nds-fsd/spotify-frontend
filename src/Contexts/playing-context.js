import { createContext } from 'react';

export const PlayingContext = createContext({
  indexSongs: undefined,
  countSongs: [],
  valueVol: undefined,
  playingSong: [],
  playingQueue: [],
  isPlaying: false,
  progress: false,
  playListSong: [],
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
  setPlayListSongs: () => {},
});
