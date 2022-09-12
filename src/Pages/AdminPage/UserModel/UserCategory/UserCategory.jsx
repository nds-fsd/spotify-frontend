import { useEffect } from 'react';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import UserEditForm from '../UserEditForm/UserEditForm';
import './UserCategory.css';

const UserCategory = () => {
  const {
    searchText,
    users,
    setUsers,
    editItemInput,
    refresh,
    setRefresh,
    editItem,
    setEditItem,
    editData,
    setEditData,
  } = useListContext();

  useEffect(() => {
    const query = {};
    if (searchText !== '') {
      query.search = searchText;
    }
    api('GET', 'user', {}, query).then((data) => {
      setUsers(data);
      setRefresh(false);
    });
  }, [refresh, searchText]);

  const handleDeleteItem = (id) => {
    api('DELETE', `user/${id}`, {}, {}).then(() => {
      setRefresh(true);
    });
  };

  return (
    <div>
      <span className="userCategoryTitle">USERS</span>
      {editItem && <UserEditForm editData={editData} setEditItem={setEditItem} />}
      {users?.map((user) => (
        <>
          <div className="userCategoryContainer">
            <div className="userContainer">{user.name}</div>
            <div className="userContainer">{user.email}</div>
            <div className="userContainer">{user.createdAt}</div>
            <div className="userContainer">{user.updatedAt}</div>
            <h3>{user.role}</h3>
            <button
              onClick={() => {
                if (!editItem ? setEditItem(true) : setEditItem(false)) editItemInput.current.focus();
                setEditData(user);
              }}
              className="adminUserButton"
              type="button"
            >
              Update
            </button>
            <button onClick={() => handleDeleteItem(user?._id)} className="adminUserButton" type="button">
              Delete
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default UserCategory;
