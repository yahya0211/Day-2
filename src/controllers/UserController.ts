import UserService from "../services/UserService";
import { Request, Response } from "express";

export default new (class UserController {
  find(req: Request, res: Response) {
    UserService.find(req, res);
  }
})();
