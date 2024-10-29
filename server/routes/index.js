import express from "express";
import userRoutes from "./userRoutes.js"
import taskRoute from "./taskRoutes.js"

const router = express.Router();

router.use("/user",userRoutes)//api/user/login
router.use("/task",taskRoute)

export default router;