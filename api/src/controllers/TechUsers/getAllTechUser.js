const UsersT = require('../../models/TechUser');

const getAllTechUser = async (req, res, next) => {
    try {
        const getAll = await UsersT.find({}).populate({path: "user"});
        res.send(getAll)
    } catch (error) {
        next(error)
    }
}

module.exports = getAllTechUser;