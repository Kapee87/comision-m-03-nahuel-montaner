import User from "../models/User.model.js";


export const userExists = async (req, res, next) => {
    const { email } = req.body
    try {
        const userFound = await User.findOne({ email })

        console.log(!userFound);
        console.log(userFound);
        !userFound
            ? next()
            : res.status(400).json({ middleMessage: 'El Email ya está registrado', email: userFound.email })
    } catch (error) {
        console.log(error);
        res.status(500).json({ middleError: error })
    }
}