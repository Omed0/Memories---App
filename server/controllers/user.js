import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import User from "../models/user.js"

const secret = 'test';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "User dosn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, { expiresIn: "2h" })
        res.status(200).json({ result: existingUser, token })

    } catch (error) {
        res.status(500).json({ message: 'something went wrong.' });

        console.log(error)
    }
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exist." });

        if (password !== confirmPassword) return res.status(400).json({ message: "Password don't match." });
        const hashPassword = await bcrypt.hash(password, 12)
        const result = new User({
            email,
            password: hashPassword,
            name: `${firstName} ${lastName}`
        })
        await result.save();
        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "2h" })
        res.status(201).json({ result, token })

    } catch (error) {
        res.status(500).json({ message: 'something went wrong.' });

        console.log(error)
    }
};