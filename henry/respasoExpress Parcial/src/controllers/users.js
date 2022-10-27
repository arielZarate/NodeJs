//declaramos 2 array , uno para los usuari y otros para todos losm posteos
let users = [];
let postArray = [];

//NOTA ESTO SERIA LO DEL MODEL CONECTADO A LA BD
//seria como el models perop lo hace todo junto en el controller ya que no tenemos  la bd

//getUsers trae una lista de todos los usuarios
const getUsers = () => {
  return users;
};

//======================
//getUsersByName trae los usuarios pero por el nombre en opciones

const getUsersByName = (name) => {
  const filterUsers = users.filter((user) => user.name === name);

  if (filterUsers) {
    return filterUsers;
  } else {
    return { error: "no hay usuario" };
  }
};

//============================================================================

//ID AUTOINCREMENTAL , NO TENEMOS BD 😫😫😫

let id = 1;
//POST
const postUsers = (name, lastName, mail) => {
  const obj = {
    id: id++,
    name,
    lastName,
    mail,
    post: [],
  };

  users.push(obj);
  return obj;
};

//===============================================================================
//getUserById trae un usaurio por id , pasa el parametro por url
const getUserById = (id) => {
  const userId = users.find((user) => user.id === parseInt(id));
  if (userId) {
    return userId;
  } else return { error: "ID invalido" };
};

const updateUser = (id, name, lastName, mail) => {
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) return { error: "usuario No encontrado" };
  else {
    user.name = name;
    user.lastName = lastName;
    user.mail = mail;

    return user;
  }
};

//=================================================================================
// deleteUser elimina un usuario por id
const deleteUser = (id) => {
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) return { error: "usuario No encontrado" };
  else {
    users = users.filter((user) => user.id !== parseInt(id));
    return users;
  }
};

//  POSTS

/* 
nota_ un posteo va tener un id  , un titulo , content
 y un id de usuario al cual pertenece ese posteo

*/

const postUser = (userId, title, contents) => {
  //creo  un nuevo objeto
  const newPost = {
    id: id++,
    title,
    contents,
    userId,
  };

  postArray.push(newPost);

  const user = users.find((i) => i.id === userId);

  //NOTA , ESTA ES UNA FORMA , PERO SERIA MAS OPTIMO GUARDAR SOLO EL ID
  // user.post.push(newPost);
  user.post.push(newPost.id); //==> GUARDO SOLO EL ID Y NO EL ONJETO ENTERO

  //NO OLVIDARV EL RETURN

  return newPost;
};

//se e34xporta entre {} por que son como objetos , SE DEBE IMPORTAR CON DESTRUCTURING
module.exports = {
  getUsers,
  getUsersByName,
  postUsers,
  getUserById,
  updateUser,
  deleteUser,
  postUser,
};
