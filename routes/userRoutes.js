import express from "express";
import { addUserController, getUser } from "../controllers/userController.js";
import {
  addConversation,
  getConversation,
  getRecentMessage,
} from "../controllers/conversationController.js";
import { getMessage, sendMessage } from "../controllers/messageController.js";
import { downloadFile, uploadFile } from "../controllers/uploadFile.js";
import upload from "../utils/upload.js";

const router = express.Router();

//add user
router.post("/add-user", addUserController);

//get users
router.get("/get-users", getUser);

//add conversation
router.post("/conversation/add", addConversation);

//get conversation
router.post("/conversation/get", getConversation);

//send message
router.post("/send-sms", sendMessage);

//get messages
router.get("/get-sms/:id", getMessage);

//upload file
router.post("/file/upload", upload.single("file"), uploadFile);

//get file
router.get("/file/:fileId", downloadFile);

//get recent sms
router.post("/get-recent-sms", getRecentMessage);

export default router;
