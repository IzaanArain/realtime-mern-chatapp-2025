import express from "express";
import { editProfile, login, logout, signup, checkAuth } from "../controllers/auth.controller.js";
import { userAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout)
router.put("/edit-profile", userAuth, editProfile);
router.get("/check", userAuth, checkAuth);

export default router;