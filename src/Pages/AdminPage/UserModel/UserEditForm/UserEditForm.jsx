import './UserEditForm.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const UserEditForm = ({ isOpenEdit, closeModalEdit, editUser }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editUser?.name,
      email: editUser?.email,
      password: editUser?.password,
      createdAt: editUser?.createdAt,
      updatedAt: editUser?.updatedAt,
      role: editUser?.role,
    },
  });

  const onSubmit = (updateData) => {
    console.log('aaa', updateData, editUser?._id);
    api('PATCH', `user/${editUser?._id}`, { body: updateData }, {}).then(() => {
      closeModalEdit();
    });
  };

  return (
    <div className={`modalsongedit ${isOpenEdit && 'isopentoedit'}`} onClick={closeModalEdit}>
      <form className="editInputContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="editFormInput">
          <label>Name</label>
          &nbsp;
          <input
            {...register('name', {
              required: true,
            })}
            type="text"
          />
          <label>Email</label>
          &nbsp;
          <input
            {...register('email', {
              required: true,
            })}
            type="email"
          />
          <label>Password</label>
          &nbsp;
          <input
            {...register('password', {
              required: true,
            })}
            type="password"
          />
          <label>Created At</label>
          &nbsp;
          <input
            {...register('createdAt', {
              required: true,
            })}
            type="date"
          />
          &nbsp;
          <label>Updated At</label>
          &nbsp;
          <input
            {...register('updatedAt', {
              required: true,
            })}
            type="date"
          />
          <label>Role</label>
          &nbsp;
          <input
            {...register('role', {
              required: true,
            })}
            type="text"
          />
          <input className="createButton" type="submit" value="Add" />
        </div>
      </form>
    </div>
    // </div>
  );
};

export default UserEditForm;
