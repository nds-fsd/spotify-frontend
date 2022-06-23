import "./SignupButton.css";
import { useNavigate } from "react-router";

const SignupButton = () => {
  const navigate = useNavigate();

  const signUp = () => {
    navigate("/register", { replace: true });
  };

  return (
    <footer>
      <button className="signup-button" type="button" onClick={signUp}>
        SIGN UP FOR NUCLIFY
      </button>
    </footer>
  );
};

export default SignupButton;
