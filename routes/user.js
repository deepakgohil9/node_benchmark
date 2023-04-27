const express = require("express")
const { create_user, get_users } = require("../controllers/user")

const route = express.Router()

route.post("/", create_user)
route.get("/", get_users)

module.exports = route