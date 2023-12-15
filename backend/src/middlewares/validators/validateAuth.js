import { body } from "express-validator";

//validación para el registro
export const validateRegister = [
    body("username")
        .isLength({ min: 6 })
        .withMessage("El nombre de usuario debe tener al menos 6 caracteres")
    ,
    body("email")
        .isEmail()
        .withMessage("Ingrese un email válido")
        .notEmpty()
        .withMessage("El email no debe estar vacío")
    ,

    body("password")
        .isLength({ min: 6 })
        .withMessage("La constraseña debe tener al menos 6 caracteres")
    ,

    body("avatarUrl")
        .isURL()
        .withMessage("La url del avatar debe ser válida")
]

export const validateLogin = [
    body("email")
        .isEmail()
        .withMessage("Ingrese un email válido")
        .notEmpty()
        .withMessage("El email no debe estar vacío")
    ,

    body("password")
        .isLength({ min: 6 })
        .withMessage("La constraseña debe tener al menos 6 caracteres")
]


