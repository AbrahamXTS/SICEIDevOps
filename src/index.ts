import morgan from "morgan";
import dotenv from "dotenv";
import express, { Application } from "express";

import { studentsRouter } from "./infrastructure/routers";

class Bootstrap {
	private app: Application;

	constructor() {
		this.app = express();

		this.configureMiddlewares();
		this.configureRoutes();

		this.runApplication(process.env.SERVER_PORT ?? "8085");
	}

	configureMiddlewares() {
		dotenv.config();

		this.app.use(morgan("dev"));
		this.app.use(express.json());
	}

	configureRoutes() {
		this.app.use("/students", studentsRouter);
	}

	runApplication(port: string) {
		this.app.listen(port, () => {
			console.log(`Server running on port: ${port}`);
		});
	}
}

try {
	new Bootstrap();
} catch (error) {
	console.error(
		"Oh no! An error was occurred while trying to running the app: ",
		error,
	);
}
