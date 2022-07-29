const createCard = async (song) => {
  console.log(song);

  const response = await fetch('http://localhost:8080', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song),
  });
  return response.status;
};

const editCard = async (song) => {
<<<<<<< HEAD:src/Utils/utils.js
  const response = await fetch('http://localhost:8080', {
=======
  const response = await fetch(`http://localhost:8080`, {
>>>>>>> sprint4:src/Utils/cardUtils.js
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song),
  });
  return response.status;
};

const getAllCards = async () => {
<<<<<<< HEAD:src/Utils/utils.js
  const response = await fetch('http://localhost:8080/songs');
=======
  const response = await fetch('http://localhost:8080/cards');
>>>>>>> sprint4:src/Utils/cardUtils.js
  return response.json();
};

const getCard = (id) => {
  // GET BY ID APi
};

const deleteCard = async (song) => {
<<<<<<< HEAD:src/Utils/utils.js
  const response = await fetch('http://localhost:8080', {
=======
  const response = await fetch(`http://localhost:8080`, {
>>>>>>> sprint4:src/Utils/cardUtils.js
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    },
    body: JSON.stringify(song),
  });
  return response.status;
};

export { createCard, editCard, getAllCards, getCard, deleteCard };
