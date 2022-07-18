import './RegisterButton.css';
import { useNavigate } from 'react-router-dom';

const RegisterButton = () => {
  const navigate = useNavigate();

  const signUp = () => {
    navigate('/register', { replace: false });
  };

  return (
    <div>
      <button className="signup-button" type="button" onClick={signUp}>
        SIGN UP FOR NUCLIFY
      </button>
    </div>
  );
};

export default RegisterButton;
