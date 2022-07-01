import React from 'react';
import "./Register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Register as authRegister } from '../../Utils/auth';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
 // const onSubmit = data => console.log(data);

  const onSubmit = async (data) => {
    console.log("hola",data)
  //     const {data} = setValue();
 if (data.password !== data.confirmPassword) {
 console.log("Su contraseña no es válida");}
 else {
  await authRegister({name:data.name, lastName:data.lastName,
        email:data.email, password:data.password, confirmPassword:data.confirmPassword });
        console.log(data.password, data.name)
        window.alert("Tu usuario se ha creado correctamente, "+data.name+". Haz click en 'Aceptar' para ir a la página de inicio");
        navigate('/',{ replace: true });
        return ;
      };
         return console.log(data.password, data.confirmPassword);
   
   }
  return (
    <div>
      <div className="Intro">
        <h2>Welcome to Nuclify</h2>
        <p>Fill the next forms in order to create your Nuclify account:</p>
      </div>
      <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Fields">
        Name:
        <input {...register("name", { required: true })} 
          type="text"
          placeholder="Insert your Name"
        />
        <br/>
        Last name:
        <input {...register("lastName", { required: true })}  
          type="text"
          placeholder="Your Lastname"
        />
        <br/>
        Email: 
        <input
          {...register("email", { required: "Email is required" , pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Make sure to write your emal with the correct format"
          }})}
          type="email"
          placeholder="Your Email"
        /><br/>
        Password:
        <input
          {...register("password", { required: true, minLength: 8,  message:"Password needs to have 8 characters or more",
            pattern: /"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/
        })}
          type="password"
          placeholder="Insert your password "
        /><br/>
        Repeat your password:
        <input
          {...register("confirmPassword", { required: true,  minLength: 8,  message:"Password needs to have 8 characters or more",
            pattern: /"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/
          })}
          type="password"
          placeholder="Repeat your Password"
        /><br/>
        </div>
        <div className="buttons">
        <button type="submit">
          Submit
        </button>
        </div>  
      </form>
      </div>
    </div>
  );
};

export default Register;


/* RESET BUTTON -> To be fixed
   <button type="reset" onClick={(e)=> reset({firstName:null, 
        lastName: null, email:null, password:null, confirmPassword:null})}>
        Reset
        </button>
        */