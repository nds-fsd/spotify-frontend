import "./SignInButton.css";
import { useNavigate } from "react-router";

const SignInButton = ({ onClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login", { required: true });
  };

  return (
    <button className="signinButtonHomepage" onClick={(e) => handleClick()}>
      LOG IN
    </button>
  );
};

export default SignInButton;
