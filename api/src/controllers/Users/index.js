const User = require("../../models/User");

const createNewUser = async (user) => {
    try {
        const newUser = await User.create({
            name: user.name,
            lastName: user.lastName,
            mail: user.mail,
            userName: user.username,
            password: user.password
        })
        return newUser;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createNewUser
}