import * as express from "express";
import UserRoutes from "./domain/user/routes";

class App {
  public server;

  constructor() {
    this.server = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();

    router.get("/", (req, res) => {
      res.json({ info: "HabitTracker Server" });
    });

    this.server.use("/", router);
    this.server.use("/user", UserRoutes);
  }
}

export default new App().server;
