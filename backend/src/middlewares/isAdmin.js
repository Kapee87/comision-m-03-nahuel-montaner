import { settingAdminCode } from "../config/dotenv.js"

export const isAdmin = async (req, res, next) => {
    const { adminCode } = req.body || ''

    if (adminCode == settingAdminCode()) {
        return next()
    }
    return res.status(401).send('Esta acción sólo puede realizarla un administrador')
}