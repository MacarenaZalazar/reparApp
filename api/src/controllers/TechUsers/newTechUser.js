const UsersT = require('../../models/TechUser');
const User = require('../../models/User');

const newTechUser = (req, res, next) => {
    try {
        const newUser = new User({
            name: "Sebastian",
            lastName: "Francia",
            mail: "sfranciach@gmail.com",
            userName: "sastiam",
            password: "123124"
        })
        newUser.save((err) => {
            if(err) throw err
            const userTech = new UsersT({user: newUser._id, workZones: ['Cordoba'], jobTypes: ['Programador'], score: 10})
            userTech.save((err) => {
                if(err) throw err;
                res.send('Usuario tecnico creado!')
            })
        })

    } catch (error) {
        next({message: error?.message, status: 404})
    }
}

module.exports = newTechUser;