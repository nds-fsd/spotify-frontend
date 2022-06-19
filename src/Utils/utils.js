const createCard = async (song) => {
  console.log(song);

  let response = await fetch("http://localhost:3001", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(song),
  });
  return await response.status;
};

const editCard = async (song) => {
  let response = await fetch(`http://localhost:3001`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(song),
  });
  return await response.status;
};

const getAllCards = async () => {
  const response = await fetch("http://localhost:3001/song");
  return await response.json();
};

const getCard = (id) => {
  // GET BY ID APi
};

const deleteCard = async (song) => {
  let response = await fetch(`http://localhost:3001`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8", // Indicates the content
    },
    body: JSON.stringify(song),
  });
  return await response.status;
};

export { createCard, editCard, getAllCards, getCard, deleteCard };
