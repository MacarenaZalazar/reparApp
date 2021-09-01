const UsersT = require('../../models/TechUser');

const updateTechUser = async (req, res, next) => {
    try {
        
        res.send("updateTechUser")
    } catch (error) {
        next({message: error.message, status: 404});
    }
}

module.exports = updateTechUser;