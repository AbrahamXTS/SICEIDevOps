import morgan from "morgan";
import express from "express";
import { config } from "dotenv";

import { studentsRouter } from "./infrastructure/routers";

config();

const app = express();

const PORT = process.env.SERVER_PORT ?? 8085;

app.use(morgan("dev"));
app.use(express.json());
app.use("/students", studentsRouter);

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`);
});
