const createArtist = async (artist) => {
  console.log(artist);

  const response = await fetch('http://localhost:8080', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(artist),
  });
  return response.status;
};

const editArtist = async (artist) => {
  const response = await fetch(`http://localhost:8080`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(artist),
  });
  return response.status;
};

// const getAllArtists = async () => {
//   const response = await fetch('http://localhost:8080/artist');
//   return response.json();
// };

const getArtist = (id) => {
  // GET BY ID APi
};

const deleteArtist = async (artist) => {
  const response = await fetch(`http://localhost:8080`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    },
    body: JSON.stringify(artist),
  });
  return response.status;
};

export { createArtist, editArtist, getArtist, deleteArtist };
