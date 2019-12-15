const users = [];

const addUser = ({ id, chatID, room }) => {
  
  const existingUser = users.find((user) => user.room === room && user.chatID === chatID);

  if(!chatID || !room) return { error: 'ID y sala son requeridos.' };
  if(existingUser) return { error: 'ID ya existente.' };

  const user = { id, chatID, room };

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };