import './CategorySelect.css';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useListContext } from '../context';

const CategorySelect = () => {
  const { home, songs, artists, setRefresh, albums, genres, playlists, users } = useListContext();
  const navigate = useNavigate();

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel className="categoriesContainer" id="categoriesContainer">
          CATEGORIES
        </InputLabel>
        <Select className="selectContainer">
          <MenuItem
            className="menuItem"
            onClick={() => {
              navigate('/', { replace: true });
              setRefresh(true);
            }}
            value={home}
          >
            Home
          </MenuItem>
          <MenuItem
            className="menuItem"
            onClick={() => {
              navigate('songs');
              setRefresh(true);
            }}
            value={songs}
          >
            Songs
          </MenuItem>
          <MenuItem
            className="menuItem"
            onClick={() => {
              navigate('artists');
              setRefresh(true);
            }}
            value={artists}
          >
            Artists
          </MenuItem>
          <MenuItem
            className="menuItem"
            onClick={() => {
              navigate('albums');
              setRefresh(true);
            }}
            value={albums}
          >
            Albums
          </MenuItem>
          <MenuItem
            className="menuItem"
            onClick={() => {
              navigate('genres');
              setRefresh(true);
            }}
            value={genres}
          >
            Genres
          </MenuItem>
          <MenuItem
            className="menuItem"
            onClick={() => {
              navigate('playlists');
              setRefresh(true);
            }}
            value={playlists}
          >
            Playlists
          </MenuItem>
          <MenuItem
            className="menuItem"
            onClick={() => {
              navigate('users');
              setRefresh(true);
            }}
            value={users}
          >
            Users
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CategorySelect;
