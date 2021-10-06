const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
    res.json(req.body);
};

const login = async (req, res) => {
    res.send("login user");
};

module.exports = {
    register,
    login,
};
