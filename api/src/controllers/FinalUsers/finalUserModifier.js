const FinalUser = require('../../models/FinalUser')

const finalUserModifier = async (req, res, next) => {
  const { id } = req.params;
  try {
    const fuFUser = await FinalUser.findByIdAndUpdate(id, req.body, {strict: true});
    if(fuFUser) {
      res.send('Data actualizada correctamente')
    }
    next({message: 'Usuario no encontrado', status: 404})
  } catch (err) {
    next(err);
  }
};

module.exports = { finalUserModifier };
