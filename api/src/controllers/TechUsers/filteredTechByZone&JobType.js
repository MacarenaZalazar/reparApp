const filteredTechByZoneAndJobType = async (req, res, next) => {
    const {jobType, zone} = req.query
    try {
        res.send('estoy en /techUsers')
    } catch (error) {
        next(error)
    }
}

module.exports = filteredTechByZoneAndJobType