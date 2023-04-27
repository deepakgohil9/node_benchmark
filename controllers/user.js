const bcrypt = require("bcryptjs")
const User = require("../models/user")

const create_user = async (req, res, next) => {
    try {
        let { email, password, first_name, last_name } = req.body
        const salt = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password, salt)

        let user = User({ email, password, first_name, last_name })
        await user.save()

        res.send({ message: "user created", data: user })
    } catch (error) {
        req.err = error
        next()
    }
}

const get_users = async (req, res, next) => {
    try {
        let data = await User.find()
        res.send(data)
    } catch (error) {
        req.err = error
        next()
    }
}

module.exports = { create_user, get_users }