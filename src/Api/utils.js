export { createCard, editCard, getAllCards, getAllAlbums, getCard, deleteCard, createList, getAlllist };

const createCard = async (song) => {
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
  const response = await fetch('http://localhost:8080', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song),
  });
  return response.status;
};

const getAllCards = async () => {
  const response = await fetch('http://localhost:8080/songs');
  return response.json();
};

const getAllArtists = async () => {
  const response = await fetch('http://localhost:8080/artist');
};
const getAllAlbums = async () => {
  const response = await fetch('http://localhost:8080/album');
  return response.json();
};

const getCard = (id) => {
  // GET BY ID APi
};

const deleteCard = async (song) => {
  const response = await fetch('http://localhost:8080', {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    },
    body: JSON.stringify(song),
  });
  return response.status;
};

const createList = async (name) => {
  const response = await fetch('http://localhost:8080/playlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(name),
  });
  return response.status;
};

const getAlllist = async () => {
  const response = await fetch('http://localhost:8080/playlist');
  return response.json();
};
