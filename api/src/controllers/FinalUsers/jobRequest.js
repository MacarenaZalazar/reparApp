const postNewRequest = async (req,res,next) => {
    const {user} = req.query
    const {jobType, zone} = req.body
    try {
        res.send('estoy en POST /finalUsers/newRequest')
    } catch (error) {
        next(error)
    }
}


const deleteRequest = async (req,res,next) => {
    const {id} = req.params
    try {
        res.send('estoy en DELETE /request/:id')
    } catch (error) {
        next(error)
    }

}

module.exports = {
    postNewRequest,
    deleteRequest
}