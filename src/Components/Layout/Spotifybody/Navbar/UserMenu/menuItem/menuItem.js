import { MenuList, Paper, MenuItem, ListItemText } from '@material-ui/core';
import './menuItem.css';

const UserMenu = ({ options }) => {
  const deleteLocalStorage = () => {
    window.localStorage.clear();
    console.log('cache borrada');
  };
  return (
    <Paper className="container-menuItem" sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        {options.map((option) =>
          option.value === 'signOut' ? (
            <MenuItem>
              <ListItemText onClick={() => deleteLocalStorage()}>{option.label}</ListItemText>
            </MenuItem>
          ) : (
            <MenuItem>
              <ListItemText>{option.label}</ListItemText>
            </MenuItem>
          ),
        )}
      </MenuList>
    </Paper>
  );
};

export default UserMenu;
