import UserController from "../controllers/UserController";
import * as express from "express";

const router = express.Router();

router.get("/users", UserController.find);

export default router;
