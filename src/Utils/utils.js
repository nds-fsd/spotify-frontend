const createCard = async (songs) => {
    console.log(songs);
   
    let response = await fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(songs),
    })
    return await response.status;
  };
   
  const editCard = async (songs) => {
    let response = await fetch(`http://localhost:3001`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(songs),
    })
    return await response.status;
  };
   
  const getAllCards = async () => {
    const response = await fetch('http://localhost:3001/songs');
    return await response.json();
  };
   
  const getCard = (id) => {
    // GET BY ID APi
  };
   
  const deleteCard = async (songs) => {
    let response = await fetch(`http://localhost:3001`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8', // Indicates the content
      },
      body: JSON.stringify(songs),
    });
    return await response.status;
  }
   
   
  export { createCard, editCard, getAllCards, getCard, deleteCard };