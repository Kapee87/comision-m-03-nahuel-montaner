import { Router } from "express";
import controller from "../controllers/post.controller.js";
import { validateCreatePost } from "../middlewares/validators/validatePost.js";
import { handleErrorValidations } from "../middlewares/validators/validateHandler.js";
import { authRequired } from "../middlewares/validateToken.js";
import { isAdmin } from "../middlewares/isAdmin.js";


const router = Router()

const { getAllPosts, getPostById, createPost, updatePost, deletePost } = controller


router.get("/all", getAllPosts)
router.get("/:id", getPostById)
router.post("/", validateCreatePost, handleErrorValidations, authRequired, createPost)
router.put("/:id", authRequired, updatePost)
router.delete("/:id", isAdmin, deletePost)

export default router