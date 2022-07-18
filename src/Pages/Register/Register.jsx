import React from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import { useNavigate, Navigate } from 'react-router-dom';
import { hasUserSession, setUserSession } from '../../Utils/session';
import api from '../../Utils/api';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('llego');
    console.log('hola', data);
    if (data.password !== data.confirmPassword) {
      console.log('Su contraseña no es válida');
    } else {
      api('POST', 'register', {
        body: {
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        },
      }).then((userSession) => {
        setUserSession(userSession);
        navigate('/', { replace: true });
      });
    }
  };
  console.log(errors);
  console.log('isValid', isValid);
  return (
    <>
      {hasUserSession() && <Navigate to="/" replace />}
      {!hasUserSession() && (
        <div>
          <div className="Intro">
            <h2>Welcome to Nuclify</h2>
            <p>Fill the next forms in order to create your Nuclify account:</p>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="Fields">
                Name:
                <input {...register('name', { required: true })} type="text" placeholder="Insert your Name" />
                <br />
                Last name:
                <input {...register('lastName', { required: true })} type="text" placeholder="Your Lastname" />
                <br />
                Email:
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Make sure to write your email with the correct format',
                    },
                  })}
                  type="email"
                  placeholder="Your Email"
                />
                <br />
                Password:
                <input
                  {...register('password', {
                    required: true,
                    minLength: 8,
                    message:
                      'Password must have 8 characters or more and include 1 Uppercase letter, 1 Lowercase letter and 1 number',
                    pattern: '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$',
                  })}
                  type="password"
                  placeholder="Insert your password "
                />
                <br />
                Repeat your password:
                <input
                  {...register('confirmPassword', {
                    required: true,
                    minLength: 8,
                    message: 'Password must have 8 characters or more',
                    pattern: '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$',
                  })}
                  type="password"
                  placeholder="Repeat your Password"
                />
                {}
                <br />
              </div>
              <div className="buttons">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
