import { MenuList, Paper, MenuItem, ListItemText } from "@material-ui/core";
import { useNavigate } from "react-router";
import "./menuItem.css";

const UserNavigationMenu = ({ options }) => {
  const deleteLocalStorage = () => {
    window.localStorage.clear(); 
    console.log("cache borrada");
  };
  return (
    <Paper className="container-menuItem" sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList>
        {options.map((option) => {
          return option.value === "signOut" ? (
            <MenuItem>
              <ListItemText onClick={() => deleteLocalStorage()}>
                {option.label}
              </ListItemText>
            </MenuItem>
          ) : (
            <MenuItem>
              <ListItemText>{option.label}</ListItemText>
            </MenuItem>
          );
        })}
      </MenuList>
    </Paper>
  );
};

export default UserNavigationMenu;
