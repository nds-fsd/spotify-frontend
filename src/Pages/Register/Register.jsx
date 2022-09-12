import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Navigate } from 'react-router-dom';
import { hasUserSession, setUserSession } from '../../Utils/session';
import api from '../../Utils/api';
import styles from './Register.module.css';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
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

  return (
    <>
      {hasUserSession() && <Navigate to="/" replace />}
      {!hasUserSession() && (
        <div className={styles.maincontainer}>
          <header className={styles.header}>
            <h1 className={styles.logo}>NUCLIFY</h1>
            <hr />
            <p className={styles.formIntro}>Sign up with your email address</p>
          </header>
          <section className={styles.registerContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.form}>
                <label className={styles.registerLabels}>Name</label>
                <input
                  className={styles.registerInputs}
                  {...register('name', { required: true })}
                  type="text"
                  placeholder="Name"
                />
                <br />
                <label className={styles.registerLabels}>Last Name</label>
                <input
                  className={styles.registerInputs}
                  {...register('lastName', { required: true })}
                  type="text"
                  placeholder="Last Name"
                />
                <br />
                <label className={styles.registerLabels}>Email</label>
                <input
                  className={styles.registerInputs}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Make sure to write your email with the correct format',
                    },
                  })}
                  type="email"
                  placeholder="Email"
                />
                <br />
                <label className={styles.registerLabels}>Password</label>
                <input
                  className={styles.registerInputs}
                  {...register('password', {
                    required: true,
                    minLength: 8,
                    message:
                      'Password must have 8 characters or more and include 1 Uppercase letter, 1 Lowercase letter and 1 number',
                    pattern: '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$',
                  })}
                  type="password"
                  placeholder="Password "
                />
                <br />
                <label className={styles.registerLabels}>Confirm Password</label>
                <input
                  className={styles.registerInputs}
                  {...register('confirmPassword', {
                    required: true,
                    minLength: 8,
                    message: 'Password must have 8 characters or more',
                    pattern: '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$',
                  })}
                  type="password"
                  placeholder="ConfirmPassword"
                />
                {}
              </div>

              <hr className={styles.hrBtn} />
              <div className={styles.btn}>
                <button type="submit">SIGN UP</button>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default Register;
