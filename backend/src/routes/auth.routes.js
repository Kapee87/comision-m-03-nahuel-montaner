import { Router } from 'express'
import authController from '../controllers/auth.controller.js'
import { authRequired } from '../middlewares/validateToken.js'
import { handleErrorValidations } from '../middlewares/validators/validateHandler.js'
import { validateRegister } from '../middlewares/validators/validateAuth.js'
import { userExists } from '../middlewares/userExists.js'
import { isAdmin } from '../middlewares/isAdmin.js'


const router = Router()

const { register, login, logout, profile, updateUser, getUsers, deleteUser } = authController

//Rutas para registro de usuario
router.post("/register", validateRegister, handleErrorValidations, userExists, register)
//router.post("/register", userExists)

//Rutas para iniciar sesión
router.post("/login", login) //validateLogin, handleErrorValidations,

router.post("/logout", logout)

router.post("/profile", authRequired, profile)

router.post("/editProfile", authRequired, updateUser)

router.post("/users", getUsers)

router.delete("/:id", isAdmin, deleteUser)

export default router