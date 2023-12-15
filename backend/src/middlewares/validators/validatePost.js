import { body } from "express-validator";

export const validateCreatePost = [
    body("title")
        .isLength({ min: 6 })
        .withMessage("El título debe tener al menos 6 caracteres")
    ,
    body("description")
        .isLength({ min: 25 })
        .withMessage("El contenido del post debe tener al menos 25 caracteres.")
    ,
    body("imageUrl")
        .isURL()
        .withMessage("La url de la imagen debe tener formato de URL")
    ,
    body("autor")
        //si se cambia la configuracion de los bytes del object id hay que modificar esta validación de acuerdo a ello.
        .isLength(24)
        .withMessage("La id del autor debe ser de 24 caracteres")
]