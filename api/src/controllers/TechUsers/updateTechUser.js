const updateTechUser = async (req, res, next) => {
    try {
        res.send('Estoy en /update')
    } catch (error) {
        res.status(400).send('Ocurrio un error ' + error?.message)
    }
}

module.exports = updateTechUser;