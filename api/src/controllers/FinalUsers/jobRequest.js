const workOrders = require("../../models/workOrders");


const postNewRequest = async (req,res,next) => {
    const workOrdersSession = await workOrders.startSession();
    const {userFinal} = req.query;
    const {title, description, workImage, workType} = req.body;
    try {
        await workOrdersSession.withTransaction(async () => {
            await workOrders.create({
                title,
                description,
                userFinal,
                workImage,
                workType
            });
        });
        workOrdersSession.endSession();
        res.send('Se creo correctamente la orden');
    } catch (error) {
        workOrdersSession.endSession();
        next({message: error?.message, status:404});
    }
};

const requestModifier = async (req,res,next) => {
    const workOrdersSession = await workOrders.startSession();
    const {id} = req.params
    const {title, description, workImage, workType} = req.body;
    try {
        await workOrdersSession.withTransaction(async () => {
            await workOrders.findByIdAndUpdate(id, {
                title,
                description,
                workImage,
                workType
            });
        });
        workOrdersSession.endSession();
        res.send('Orden actualizada correctamente');
    } catch (error) {
        workOrdersSession.endSession();
        next({message: error?.message, status:404});
    }
};

const deleteRequest = async (req,res,next) => {
    const workOrdersSession = await workOrders.startSession();
    const {id} = req.params;
    try {
        await workOrdersSession.withTransaction(async () => {
            await workOrders.findByIdAndDelete(id);
        });
        workOrdersSession.endSession();
        res.send('Orden eliminada correctamente');
    } catch (error) {
        workOrdersSession.endSession();
        next({message: error?.message, status:404});
    }
};

module.exports = {
    postNewRequest,
    requestModifier,
    deleteRequest
}