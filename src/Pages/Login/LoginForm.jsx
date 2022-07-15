import "./LoginForm.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import LoginButton from "../../Components/Buttons/LoginButton/LoginButton";
import authLogin from "../../Api/auth";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (!data.email || !data.password) {
      alert(
        "The email or password provided is not correct. Please verify and try again."
      );
      navigate("/login", { replace: true });
    } else {
      const redirect = await authLogin({
        email: data.email,
        password: data.password,
      });
      console.log(navigate);
      if (redirect) navigate("/layout", { replace: true });
    }
  };

  return (
    <div className="form-container">
      <form className="input-container" onSubmit={handleSubmit(onSubmit)}>
        <label>Email address</label>
        &nbsp;
        <input
          className="form-inputs"
          {...register("email", {
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
          {...register("password", {
            required: true,
            // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          })} //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
          type="password"
          placeholder="Enter your password"
        />
        <LoginButton onClick={(e) => onSubmit()} />
      </form>
    </div>
  );
};

export default LoginForm;
