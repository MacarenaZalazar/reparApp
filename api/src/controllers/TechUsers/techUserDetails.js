const UsersT = require('../../models/TechUser');
const techUsersDetails = async (req, res, next) => {
    const {id} = req.params
    try {
        const gettechUserDetail = await UsersT.findById(id).populate({path: "user"});
        res.status(200).send(gettechUserDetail)
    } catch (error) {
        next(error)
    }
}

module.exports = techUsersDetails