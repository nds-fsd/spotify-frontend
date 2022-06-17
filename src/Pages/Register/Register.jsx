import "./Register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (!data.password === data.confirmPassword) {
      alert("Su contraseña no es válida");
    }
    return console.log(data.password, data.confirmPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          value="mariela"
          type="text"
          placeholder="Your Name"
        />
        <input
          {...register("lastName", { required: true })}
          value="morales"
          type="text"
          placeholder="Your Lastname"
        />
        <input
          {...register("email", { required: true })}
          value="marielafmorales@gmail.com"
          type="email"
          placeholder="Your Email"
        />
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Your Password"
        />
        <input
          {...register("confirmPassword", { required: true })}
          type="password"
          placeholder="Confirm Password"
        />

        <button type="submit" onClick={(e) => onSubmit()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
