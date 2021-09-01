const UsersT = require('../../models/TechUser');
const User = require('../../models/User');

const newTechUser = (req, res, next) => {
    try {
        const userTech = new UsersT({})
        
    } catch (error) {
        next({message: error?.message, status: 404})
    }
}

module.exports = newTechUser;