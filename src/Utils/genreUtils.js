const createGenre = async (genre) => {
  const response = await fetch('http://localhost:8080', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(genre),
  });
  return response.status;
};

const editGenre = async (genre) => {
  const response = await fetch(`http://localhost:8080`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(genre),
  });
  return response.status;
};

// const getAllGenres = async () => {
//   const response = await fetch('http://localhost:8080/genre');
//   return response.json();
// };

const getGenre = (id) => {
  // GET BY ID APi
};

const deleteGenre = async (genre) => {
  const response = await fetch(`http://localhost:8080`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    },
    body: JSON.stringify(genre),
  });
  return response.status;
};

export { createGenre, editGenre, getGenre, deleteGenre };
