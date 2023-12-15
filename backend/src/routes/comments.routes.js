import { Router } from "express";
import controller from "../controllers/comment.controller.js";
import { validateCreateComment } from "../middlewares/validators/validateComment.js";
import { handleErrorValidations } from "../middlewares/validators/validateHandler.js";
import { authRequired } from '../middlewares/validateToken.js'

const router = Router()

const { getAllComments, getCommentById, createComment, updateCommnent, deleteComment } = controller


router.get("/all", getAllComments)
router.get("/:id", getCommentById)
router.post("/", validateCreateComment, handleErrorValidations, authRequired, createComment)
router.put("/:id", updateCommnent)
router.delete("/:id", deleteComment)

export default router