// require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async (env) => {
    try {
        const {
            DB_USER,
            DB_PASSWORD,
            DB_HOST,
            DB_NAME
          } = env;
        const conn = await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        })
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.error(`Error: ${error.message}`)
        throw new Error(error?.message);
    }
}

module.exports = connectDB;