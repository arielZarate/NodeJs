const serviceUsers = require("../models/users");

let posts = [];

let id = 1;
const postUser = (userId, title, contents) => {
  //creo  un nuevo objeto
  const newPost = {
    id: id++,
    title,
    contents,
    userId,
  };

  posts.push(newPost);

  const user = serviceUsers.allUsers().find((i) => i.id === userId);

  //NOTA , ESTA ES UNA FORMA , PERO SERIA MAS OPTIMO GUARDAR SOLO EL ID
  // user.post.push(newPost);
  user.post.push(newPost.id); //==> GUARDO SOLO EL ID Y NO EL ONJETO ENTERO

  //NO OLVIDARV EL RETURN

  return newPost;
};

module.exports = { postUser };
