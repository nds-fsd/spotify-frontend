const createCard = async (song) => {
  console.log(song);

  let response = await fetch("http://localhost:8080", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(song),
  });
  return await response.status;
};

const editCard = async (song) => {
  let response = await fetch("http://localhost:8080", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(song),
  });
  return await response.status;
};

const getAllCards = async () => {
  const response = await fetch("http://localhost:8080/songs");
  return await response.json();
};

const getCard = (id) => {
  // GET BY ID APi
};

const deleteCard = async (song) => {
  let response = await fetch("http://localhost:8080", {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8", // Indicates the content
    },
    body: JSON.stringify(song),
  });
  return await response.status;
};


const createList = async (name) => {
  console.log(name);

  let response = await fetch("http://localhost:8080/playlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(name),
  });
  return await response.status;
};

const getAlllist = async () => {
  const response = await fetch("http://localhost:8080/playlist");
  return await response.json();
};









export { createCard, editCard, getAllCards, getCard, deleteCard ,createList, getAlllist};
