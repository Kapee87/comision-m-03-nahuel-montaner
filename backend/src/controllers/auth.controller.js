import User from "../models/User.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createAccessToken } from "../middlewares/jwt.validator.js";

const controller = {

    register: async (req, res) => {
        const { username, email, password, avatarUrl } = req.body

        try {
            const passwordHash = await bcrypt.hash(password, 10)

            const newUser = new User({
                username,
                email,
                password: passwordHash,
                avatarUrl,
                online: true
            })
            const userSaved = await newUser.save()

            const token = await createAccessToken({ id: userSaved._id })

            console.log(userSaved);

            // res.cookie("token", token)
            return res.json({
                message: "Usuario registrado con éxito",
                id: userSaved._id,
                username: userSaved.username,
                email: userSaved.email,
                avatarUrl: userSaved.avatarUrl,
                token: token
            })

        } catch (error) {
            return res.status(400).json({
                controllermsj: "Error al registrar al Usuario ",
                error
            })
        }

    },
    login: async (req, res) => {
        const { email, password } = req.body;
        console.log(email, password)
        try {
            const userFound = await User.findOne({ email });
            if (!userFound)
                return res.status(400).json({ message: "Usuario no encontrado" });

            const match = await bcrypt.compare(password, userFound.password);

            if (!match)
                return res.status(400).json({ message: "Contraseña incorrecta" });


            //Debemos generar el token nuevamente

            const token = await createAccessToken({ id: userFound._id });
            res.cookie("token", token);
            const online = await User.findByIdAndUpdate(userFound._id, {
                online: true
            })
            console.log(online);
            return res.status(200).json({
                username: userFound.username,
                email: userFound.email,
                avatarUrl: userFound.avatarUrl,
                _id: userFound._id,
                token: token
            });
        } catch (error) {
            return res.status(500).json({ message: "Error al loguearse", error });
        }
    },
    logout: async (req, res) => {
        const userId = req.body._id
        try {
            const userFound = await User.findById(userId)
            if (!userFound.online) return res.status(400).json({ message: "La sesión no está iniciada o expiró." })
            const userLoggedOut = await User.findByIdAndUpdate(userId, {
                online: false
            })
            res.cookie("token", "", { expires: new Date(0) })
            return res.status(200).json({ message: "Vuelvas prontos!", token: null })
        } catch (error) {
            console.log(error);
        }
    },
    profile: async (req, res) => {
        try {
            const userFound = await User.findById(req.user.id);
            if (!userFound)
                return res.status(400).json({ message: "Usuario no encontrado" });
            if (!userFound.online)
                return res.status(400).json({ message: "La sesión expiró o no se inició" });

            return res.json(userFound);
        } catch (error) {
            return res.send("Error localizando el perfil");
        }
    },
    updateUser: async (req, res) => {
        try {
            const updateUser = await User.findOneAndUpdate(req.params.id, req.body, { new: true })
            return res.status(200).json({
                success: true,
                message: 'User updated',
                updateUser
            })
        } catch (error) {
            returnnext(error)
        }
    },
    getUsers: async (req, res) => {
        try {
            const getUsers = await User.find()
            return res.status(200).json({
                getUsers
            })
        } catch (error) {
            console.log("pasaron cosas");
            return res.status(500).send('no se pudo ejecutar la acción, intente de nuevo más tarde')
        }
    },
    deleteUser: async (req, res) => {
        console.log('controller', req.params);
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id)
            console.log(deletedUser);
            return res.status(200).json({ message: 'Usuario borrado con éxito', deletedUser })
        } catch (error) {
            console.log('no se pudo borrar');
            return res.status(500).send('no se pudo ejecutar la acción, intente de nuevo más tarde')
        }
    }

}


export default controller


