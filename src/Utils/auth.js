const authLogin = async (data) => {
  return await fetch("http://localhost:3001/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => window.localStorage.setItem("token", response.token));
};

export default authLogin;
