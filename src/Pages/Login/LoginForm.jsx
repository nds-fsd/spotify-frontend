import './LoginForm.css';
import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LoginButton from '../../Components/Buttons/LoginButton/LoginButton';
import api from '../../Utils/api';
import { setUserSession } from '../../Utils/session';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setErrorMessage('');
  }, [email, password]);

  const onSubmit = async (data) => {
    api('POST', 'login', {
      body: {
        email: data.email,
        password: data.password,
      },
    })
      .then((userSession) => {
        setUserSession(userSession);
        if (userSession.user.role === 'ADMIN') navigate('/adminpage/songs', { replace: true });
        if (userSession.user.role === 'USER') navigate('/', { replace: true });
      })
      .catch((error) => {
        setErrorMessage('Please re-enter valid credentials');
      });
  };

  return (
    <div className="form-container">
      <form className="input-container" onSubmit={handleSubmit(onSubmit)}>
        <label>Email address</label>
        &nbsp;
        <input
          className="form-inputs"
          {...register('email', {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
          type="email"
          placeholder="Enter your email address"
        />
        <label>Password</label>
        &nbsp;
        <input
          className="form-inputs"
          {...register('password', {
            required: true,
            // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          })} // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
          type="password"
          placeholder="Enter your password"
        />
        <p className="error-message">{errorMessage}</p>
        <LoginButton onClick={(e) => onSubmit()} />
      </form>
    </div>
  );
};

export default LoginForm;
