import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useListContext } from '../context';

const CategorySelect = () => {
  const { home, songs, artists, setRefresh, albums, genres, playlists, users } = useListContext();
  const navigate = useNavigate();
  //   const handleChangeCategories = (value) => {
  //     navigate(value.target.value);
  //     setRefresh(true);
  //   };

  return (
    <div>
      <FormControl sx={{ m: 2, minWidth: 170 }}>
        <InputLabel id="categoriesContaines">CATEGORIES</InputLabel>
        <Select>
          <MenuItem
            onClick={() => {
              navigate('/', { replace: true });
              setRefresh(true);
            }}
            value={home}>
            Home
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate('songs');
              setRefresh(true);
            }}
            value={songs}>
            Songs
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate('artists');
              setRefresh(true);
            }}
            value={artists}>
            Artists
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate('albums');
              setRefresh(true);
            }}
            value={albums}>
            Albums
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate('genres');
              setRefresh(true);
            }}
            value={genres}>
            Genres
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate('playlists');
              setRefresh(true);
            }}
            value={playlists}>
            Playlists
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate('users');
              setRefresh(true);
            }}
            value={users}>
            Users
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CategorySelect;
