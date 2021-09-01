
const updateTechUser = async (req, res, next) => {
    try {
        // throw new Error('Ocurrio un error')
        const allTechnicUser = await TechnicUser.find({}).exec();
        res.send(allTechnicUser)
    } catch (error) {
        next({message: error.message, status: 404});
    }
}

module.exports = updateTechUser;