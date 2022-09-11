import './UserEditForm.css';
import { useForm } from 'react-hook-form';
import api from '../../../../Utils/api';

const UserEditForm = ({ editData, setEditItem }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: editData?.name,
      email: editData?.email,
      password: editData?.password,
      createdAt: editData?.createdAt,
      updatedAt: editData?.updatedAt,
      role: editData?.role,
    },
  });

  const onSubmit = (updateData) => {
    api('PATCH', `user/${editData?._id}`, { body: updateData }, {}).then(() => {});
    reset();
    setEditItem(false);
  };

  return (
    <div className="mainContainer">
      <form className="userEditInputContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="userEditFormInput">
          <label className="userLabel">Name</label>
          &nbsp;
          <input
            className="userInput"
            {...register('name', {
              required: true,
            })}
            type="text"
          />
          <label className="userLabel">Email</label>
          &nbsp;
          <input
            className="userInput"
            {...register('email', {
              required: true,
            })}
            type="email"
          />
          <label className="userLabel">Password</label>
          &nbsp;
          <input
            className="userInput"
            {...register('password', {
              required: true,
            })}
            type="password"
          />
          <label className="userLabel">Created At</label>
          &nbsp;
          <input
            className="userInput"
            {...register('createdAt', {
              required: true,
            })}
            type="date"
          />
          &nbsp;
          <label className="userLabel">Updated At</label>
          &nbsp;
          <input
            className="userInput"
            {...register('updatedAt', {
              required: true,
            })}
            type="date"
          />
          <label className="userLabel">Role</label>
          &nbsp;
          <input
            className="userInput"
            {...register('role', {
              required: true,
            })}
            type="text"
          />
          <input className="userEditButton" type="submit" value="Update" />
        </div>
      </form>
    </div>
    // </div>
  );
};

export default UserEditForm;
