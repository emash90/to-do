const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
    try {
        const { username, email, password } = req.body;
        //ensure all fields are filled
        if (!username || !email || !password) {
            return res.status(401).json("ensure all fields are filled");
        }
        //check if user with same email exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(401).send("user with same email already exists");
        }
        //check if the username is taken
        const usernameExists = await User.findOne({ username });
        if (usernameExists) {
            return res.status(401).send("username already taken");
        }
        //hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //create the user
        const user = await User.create({
            email,
            username,
            password: hashedPassword,
        });
        if (user) {
            res.status(201).json({
                _id: user.id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(400);
            throw new Error("Invalid user data");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    try {
        //find user with that email
        const user = await User.findOne({ username });
        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user.id,
                name: user.username,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            return res.status(400).json("Invalid user credentials");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.exports = { registerUser, loginUser };
