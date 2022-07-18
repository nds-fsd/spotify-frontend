const BACKEND = process.env.REACT_APP_BACKEND;

const Register = ({ name, lastName, email, password, confirmPassword }) => {
  const userData = {
    name,
    lastName,
    email,
    password,
    confirmPassword,
  };
  return fetch(`${BACKEND}/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((response) => window.localStorage.setItem('token', response.token));
};

export { Register };
