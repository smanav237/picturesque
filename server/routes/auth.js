import express from "express";
import { login } from "../controllers/auth.js";

const routes = express.Router();
router.post('/login', login);
export default router;