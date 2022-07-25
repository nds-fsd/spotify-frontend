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
  const response = await fetch(`http://localhost:8080`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song),
  });
  return response.status;
};

const getAllCards = async () => {
  const response = await fetch('http://localhost:8080/cards');
  return response.json();
};

const getCard = (id) => {
  // GET BY ID APi
};

const deleteCard = async (song) => {
  const response = await fetch(`http://localhost:8080`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    },
    body: JSON.stringify(song),
  });
  return response.status;
};

export { createCard, editCard, getAllCards, getCard, deleteCard };
