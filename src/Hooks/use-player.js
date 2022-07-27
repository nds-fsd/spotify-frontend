import { useContext } from 'react';
import { PlayingContext } from '../Contexts/playing-context';

const usePlayer = () => {
  const context = useContext(PlayingContext);
  return context;
};

export default usePlayer;
