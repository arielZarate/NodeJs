## Back-end

### Dependecias

Primero creamos una carpeta que se llame api, y en la consola usamos el siguiente ocomando:

```bash
  npx tsc --init
```

¿Qué realiza ese comando? Nos genra un archivo llamado tsconfig.json, en el cual vamos a configurar nuestro compilador. Dentro nos vamos a encontrar diferentes, las mas importantes que tenemos que revisar son:

```javascript
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
```

Esas son las configuraciones que va a realizar el compilador para convertir nuestro codigo typescript a javascript para que node lo pueda entender. Target es el standard, commonjs es el modo como van a generarse los modulos y outdir es la carpeta donde se va a guardar nuestro codigo typescript.
Para poder utilizar la libreria de sequelize, es necesario que habilitemos los decoradores y utilicemos ES6, por lo que dejamos target en "es6" y activamos las siguientes opciones:

```javascript
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
```

Ahora procedemos a generar nuestro package.json, utilizando el comando:

```bash
npm init
```

Le colocamos el nombre que deseemos, y comenzamos a instalar dependencias:

Instalamos lo que usariamos normalmente en una aplicación de express

```bash
npm i cookie-parser cors dotenv express pg sequelize sequelize-typescript typescript
```

Y realizamos otra instalación, noten acá que tambien estamos instalando dependencias con @types ¿Qué son estos @types?
Asi como nosotros tenemos que agregarle los tipos a todos nuestros objetos y funciones, las librerias tambien, entonces necesitamos instalarlas.
Además estamos instalando ts-node, que es el que nos va a permitir utilizar nodemon con typescript!

```bash
npm i @types/cookie-parser @types/cors @types/express @types/morgan @types/node @types/pg morgan nodemon ts-node --save-dev
```

Ahora modificamos nuestro script, agregamos el comando

```javascript
  "scripts": {
    "dev": "nodemon index.ts"
  },
```

Ahora creemos nuestro index.ts en nuestra carpeta api y ya podemos comenzar!

Ese va a ser nuestro punto de entrada, basicamente, es donde vamos a usar nuestro app.listen y sequelize.sync, antes de eso, creemos una carpeta que se llame src, y ahi dentro creemos nuestro app.ts y comencemos a configurar nuestra aplicacion de express!

```javascript
import express from "express";
const app = express();
export default app;
```

Primero podemos notar dos cosas, uno, podemos usar es6 dentro de node.js, y que, dependiendo de nuestra configuracion, app probablemente nos este dando un error ¿Por qué? Porque le faltan los tipos! Entonces:

```javascript
import express, { Application } from "express";
const app: Application = express();
export default app;
```

Lo que estamos haciendo ahi, es decirle nuestra variable app que es una Application de express. Ahora, seguro estas pensando ¿Como hago yo para saber eso? Simple! Esta en la documentacion. Casi todos los paquetes de npm tienen soporte para typescript, algunos hasta estan escritos en TS!

Antes de continuar, seteemos nuestras variables de entorno, para eso, hagamos un archivo de configuracion. Creemos una carpeta llamada lib, y dentro de ella un archivo que se llame config.ts

Adentro de config.ts, vamos a obtener nuestros valores de las variables de entorno:

```javascript
import dotenv from "dotenv";

dotenv.config();

const config = {
  dbUser: process.env.DB_USER || "postgres",
  dbPassword: process.env.DB_PASSWORD || "1234",
  dbHost: process.env.DB_HOST || "localhost",
  dbName: process.env.DB_NAME || "workshop",
  dbPort: process.env.DB_PORT || "5432",
  dev: process.env.NODE_ENV !== "production",
  port: process.env.API_PORT || "3001",
  host: process.env.API_host || "localhost",
  cors: process.env.CORS || "localhost:3000",
};

export default config;
```

Para esto, tambien deberiamos crear nuestro archivo .env, de la siguiente manera:

```bash
DB_USER="postgres"
DB_PASSWORD="1234"
DB_HOST="localhost"
DB_NAME="workshop"
DB_PORT="5432"
NODE_ENV="development"
API_PORT="3001"
API_HOST="localhost"
CORS="http://localhost:3000"
```

Ahora seteemos nuestros headers y cors,

```javascript
import express, { Application } from "express";
import config from "./lib/config";

const app: Application = express();
app.use(express.urlencoded({ extended: true, limit: "50mb" })); //middleware
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(
  cors({
    origin: config.cors,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default app;
```

Nuestro middleware de control de errores nos esta dando problemas, necesita que le especifiquemos su tipado!
Entonces, tenemos que obtener de express NextFunction, Request y Response, pero ¿Y err?
Bueno, no existe un tipado para los errores, existen varias formas de resolver ese problema. Principalmente porque los errores se declaran de distinta forma dependiendo de su origen.
La forma mas sencilla es que hagamos una interface!

```javascript
import express, { Request, Response, NextFunction } from "express";

//-----------------------------------

interface error {
  status: number;
  message: string;
}
app.use((err: error, req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
```

Genial, ahora lo que tenemos que hacer es probar nuestra configuracion, para eso generamos una ruta!

```javascript
app.get("/", (req: Request, res: Response) => {
  res.send("hola typescript!");
});
```

Y en nuestro archivo index.ts, el que esta en la carpeta raiz:

```javascript
import app from "./src/app";

app.listen(3001, function () {
  console.log("App is listening on port 3001!");
});
```
