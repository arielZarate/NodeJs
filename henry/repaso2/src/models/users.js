//ESTO SERIA COMO EL ACCESO A LA BD
let users = [];

//get
const allUsers = () => {
  if (users === undefined)
    return { error: "no se encuentran datos para mostrar" };
  return users;
};

const getUsersByName = (name) => {
  const user = users.filter((u) => u.name === name);
  if (!user) return { error: "No se encuentra el user " };
  return user;
};

//create

let id = 1;
const createUser = (name, lastName, mail) => {
  newUser = {
    id: id++,
    name,
    lastName,
    mail,
    post: [],
  };

  users.push(newUser);

  return newUser;
};

//buscar por id

const getUserById = (id) => {
  //verisico si existe
  const idUser = users.find((us) => us.id == id);

  if (idUser) {
    return idUser;
  } else {
    return { error: "ID no encontrado" };
  }
};

const updateUser = (id, name, lastName, mail) => {
  const userUp = users.find((us) => us.id === parseInt(id));

  if (!userUp)
    return { error: "No se puede actualizar user con ese id , no existe" };
  else {
    userUp.name = name;
    userUp.lastName = lastName;
    userUp.mail = mail;

    //cuando finalizo

    return userUp;
  }
};

const deletedUser = (id) => {
  /*   let user = users.find((u) => u.id === parseInt(id));
  //console.log(user);
  if (user) {
    users = users.filter((us) => us.id !== parseInt(id));
    return users;
  } else {
    return { error: "ID incorrecto" };
  } */
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) return { error: "usuario con id no encontrado" };
  else {
    users = users.filter((user) => user.id !== parseInt(id));
    return user;
  }
};

module.exports = {
  allUsers,
  getUsersByName,
  createUser,
  getUserById,
  updateUser,
  deletedUser,
};
