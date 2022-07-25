import { useEffect, useState } from 'react';
import { useModalEdit } from '../../../../Components/Modals/cardModal/useModal';
import { useListContext } from '../../context';
import api from '../../../../Utils/api';
import UserEditForm from '../UserEditForm/UserEditForm';
import './UserCategory.css';

const UserCategory = ({ name, password, email, createdAt, updatedAt, role }) => {
  const { users, setUsers, refresh, setRefresh } = useListContext();
  //   const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenEdit, openModalEdit, closeModalEdit] = useModalEdit(false);
  const [editUser, setEditUsers] = useState({});

  useEffect(() => {
    if (refresh) {
      api('GET', 'user', {}, {}).then((data) => {
        console.log(data);
        setUsers(data);
        setRefresh(false);
      });
    }
  }, [refresh]);

  const handleDeleteItem = (id) => {
    api('DELETE', `user/${id}`, {}, {}).then(() => {
      setRefresh(true);
    });
  };

  console.log('users', users);

  return (
    // <div className="categoryContainer">
    <div>
      <span className="userCategoryTitle">USERS</span>
      {/* <button onClick={openModal} className="addButton" type="button">
          +
          <PlaylistCreateForm
            isOpen={isOpen}
            closeModal={closeModal}
            name={name}
            password={password}
            email={email}
            createdAt={createdAt}
            updatedAt={updatedAt}
            role={role}
          />
        </button>
      </div> */}

      {users?.map((user) => (
        <>
          <div className="userCategoryContainer">
            <div className="userContainer">{user.name}</div>
            {/* <div className="userContainer">{user.password}</div> */}
            <div className="userContainer">{user.email}</div>
            <div className="userContainer">{user.createdAt}</div>
            <div className="userContainer">{user.updatedAt}</div>
            <h3>{user.role}</h3>
            <button
              onClick={() => {
                setEditUsers(user);
                openModalEdit();
              }}
              className="adminUserButton"
              type="button">
              Update
            </button>
            <button onClick={() => handleDeleteItem(user?._id)} className="adminUserButton" type="button">
              Delete
            </button>
          </div>
        </>
      ))}
      {isOpenEdit && <UserEditForm isOpenEdit={isOpenEdit} closeModalEdit={closeModalEdit} editUser={editUser} />}
    </div>
  );
};

export default UserCategory;
