import express from "express";
import { userAuth } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";


const router = express.Router();

router.get("/users", userAuth, getUsersForSidebar);
router.get("/:id", userAuth, getMessages);
router.post("/sender/:id", userAuth, sendMessage);

export default router;