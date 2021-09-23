const mercadopago = require ('mercadopago');
const { BASE_URL, FRONT_URL } = require('../../Utils/utils');
const promoteUser = require('./promoteUser');
const { PROD_ACCESS_TOKEN } = process.env;


const preferenceMP = async (req, res, next) => {
    const { userId } = req.query
    const order = [req.body]

    //Agrego credenciales
    mercadopago.configure({
        access_token: PROD_ACCESS_TOKEN
    });
  //console.info('ml configured')

  // Crea un objeto de preferencia
  let preference = {
    items: order,
    back_urls: {
      success: `${BASE_URL}/mercadopago/pagos?userId=${userId}`,
      failure: `${BASE_URL}/mercadopago/pagos?userId=${userId}`,
      pending: `${BASE_URL}/mercadopago/pagos?userId=${userId}`,
    },
    installments: 1,
    auto_return: 'approved',
  };
  //console.info('preference:', preference)
  
  try {
      const response = await mercadopago.preferences.create(preference)
        init_point = response.body.init_point
        res.send({init_point: init_point })
  
      //res.send(id)
  } catch (error) {
      next(error)
  }
   

}

    const pagos = async (req, res, next) => {
    const { userId } = req.query
    console.log(userId)
    console.log(req.query)
    const payment_id= req.query.payment_id
    const payment_status= req.query.status
    const external_reference = req.query.external_reference
    const merchant_order_id= req.query.merchant_order_id
    if(payment_status === 'approved'){
        console.log('its approved')
        try {
              await promoteUser(userId, true)
                setTimeout(async () => {
                    await  promoteUser(userId, false)
                }, 50000)
        } catch (error) {
            next(error)
        }
           
        return res.redirect(`${FRONT_URL}/home`)
    } else {
        console.log('el pago ha sido rechazado')
    }
}

module.exports = {
    preferenceMP, 
    pagos
}
