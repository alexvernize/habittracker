// wiki.js - Wiki route module.

import { Router } from "express";

class UserRoutes {
  public router;

  constructor() {
    this.router = Router();

    this.router.get("/", (req, res) => {
      res.json({ method: "GET", path: "/user" });
    });
  }
}

export default new UserRoutes().router;
