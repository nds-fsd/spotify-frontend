import "./LoginButton.css";

const LoginButton = ({ onClick }) => {
  return (
    <div className="button-container">
      <button className="login-button" type="submit">
        LOG IN
      </button>
    </div>
  );
};

export default LoginButton;
