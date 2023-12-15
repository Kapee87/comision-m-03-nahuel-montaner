import { body } from "express-validator";

export const validateCreateComment = [
    body("description")
        .isLength({ min: 6 })
        .withMessage("El comentario debe tener al menos 6 caracteres"),
    body("autor")
        .isLength(24)
        .withMessage("La id del autor debe ser de 24 caracteres")
]
