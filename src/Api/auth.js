const authLogin = async (data) => {
  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  const token = await response.json();
  console.log(token);
  if (token.token) {
    window.localStorage.setItem("token", token.token)
    return true;
  }
  return false;
};

export default authLogin;
