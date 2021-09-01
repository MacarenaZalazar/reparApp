const techUsersDetails = async (req, res, next) => {
    const {id} = req.params
    try {
        res.send('Soy el techUserDetails')
    } catch (error) {
        next(error)
    }
}

module.exports = techUsersDetails