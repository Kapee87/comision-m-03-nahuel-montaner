import jwt from 'jsonwebtoken'
import { settingDotEnvSecret } from '../config/dotenv.js'

const { secret } = settingDotEnvSecret()

export const authRequired = (req, res, next) => {
    console.log(req.body);
    const token = req.body.token

    if (!token) return res.json({ message: "Autorizacion denegada, no hay token" })

    jwt.verify(token, secret, (err, user) => {
        if (err) return res.json({ message: "Token inválido" })
        req.user = user
    })

    if (req.user) {
        console.log('hay user pasamos al controller');
        next()
    }

    return
}
