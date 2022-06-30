import "./LoginbuttonHomepage.css";
import { useNavigate } from "react-router";

const LoginbuttonHomepage = ({ onClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login", { required: true });
  };

  return (
    <button className="loginbuttonHomepage" onClick={(e) => handleClick()}>
      Log In
    </button>
  );
};

export default LoginbuttonHomepage;
