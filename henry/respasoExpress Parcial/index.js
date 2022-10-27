const server = require("./src/app");

PORT = 3001;

server.listen(PORT, () => console.log(`escuchando en el port ${PORT}`));
