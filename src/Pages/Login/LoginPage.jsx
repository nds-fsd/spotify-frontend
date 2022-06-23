import "./LoginPage.css";
import "./LoginForm.css";
import LoginForm from "./LoginForm";
import SignupButton from "../../Components/Buttons/SignupButton";



const LoginPage = () => {
  return (
    <div className="login-container">
      <header className="header-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png"
          alt="logo"
        />
      </header>

      <section className="loginForm-container">
        <h4 className="header-login">To continue to Nuclify, please log in.</h4>
        <hr></hr>
        <LoginForm />
      </section>

      <section className="signup-container">
        <hr></hr>
        <h2 className="header-signup">Don't have an account?</h2>
        <SignupButton />
      </section>
    </div>
  );
};

export default LoginPage;
