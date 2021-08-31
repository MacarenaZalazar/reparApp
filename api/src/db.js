const {mongoose} = require('mongoose');
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
  } = process.env;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

module.exports = connectDB;