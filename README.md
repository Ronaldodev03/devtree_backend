# devtree

### commands

- npm init
- npm i express
- npm i nodemon -D
- npm i -D typescript ts-node
- npm i -D @types/express
- npm i colors
- npm i express-validator
- npm i mongoose
- npm i dotenv
- npm i slug
- npm i -D @types/slug
- npm i jsonwebtoken bcrypt
- npm i -D @types/jsonwebtoken @types/bcrypt

### files

- .gitignore

### settings

- En package.json hay que poner modules para habilitar ESM ==> "type":"module" ==> pero si estamos usando ts esta configuracion se hace en el tsconfig.json, no es necesaria en el package.json

- script en package.json ==> "dev": "nodemon --exec ts-node src/index.ts" (esto una vez estemos usando nodemon y ts, con el index en el folder src);

  - podemos usar "dev": "nodemon src/index.ts" porque en las versiones nuevas de nodemon no es necesario especificar --exec ts-node;
  - sin usar ts (solo js) basta con "dev": "nodemon src/index.js"

- script en package.json ==> "build": "tsc" y "start": "node dist/index.js", uno es para compilar el ts y el otro para correr el project en el servidor

### auth

- middleware/auth/authenticate: Retorna el user que corresponde con el token (jwt) proporcionado, el cual debe venir en la requet (en los headers)
