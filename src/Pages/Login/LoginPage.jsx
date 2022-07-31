import './LoginPage.css';
import './LoginForm.css';
import { Navigate, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterButton from '../../Components/Buttons/RegisterButton/RegisterButton';
import { hasUserSession } from '../../Utils/session';

const LoginPage = ({ onClick }) => {
  const navigate = useNavigate();
  const handleClickLogo = () => {
    navigate('/', { replace: true });
  };

  return (
    <>
      {hasUserSession() && <Navigate to="/" replace />}
      {!hasUserSession() && (
        <div className="login-container">
          <header className="header-container">
            {/* <img
          onClick={(e) => handleClickLogo()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png"
          alt="logo"
        /> */}

            <div className="logoLogin" onClick={(e) => handleClickLogo()}>
              NUCLIFY
            </div>
          </header>

          <section className="loginForm-container">
            <h4 className="header-login">To continue to Nuclify, please log in.</h4>
            <hr />
            <LoginForm />
          </section>

          <section className="signup-container">
            <hr />
            <h2 className="header-signup">Don't have an account?</h2>
            <div className="signUpButtonContainer">
              <RegisterButton />
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default LoginPage;
