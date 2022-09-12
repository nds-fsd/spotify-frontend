const createArtist = async (artist) => {
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

export { createArtist, editArtist, deleteArtist };
