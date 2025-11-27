import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    const whiteList = [process.env.FRONTEND_URL];

    // Permitir peticiones sin origen (cron jobs, servidor-a-servidor, herramientas CLI)
    if (!origin) {
      callback(null, true);
      return;
    }

    // esto es para poder usar postman y thunderclient sin errores de cors, se debe añadir un script en package.json
    if (process.argv[2] === "--api") {
      whiteList.push(undefined);
    }

    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      // Rechazar petición sin causar error 500
      callback(null, false);
    }
  },
};
