import { validationResult } from "express-validator";

//validación del error
export const handleErrorValidations = (req, res, next) => {
    const error = validationResult(req.body)

    if (!error.isEmpty()) {
        return res.status(400).json({ message: "Error en la validación de Atributos", error: error.errors.map(error => error.msg) })
    }
    next()
};