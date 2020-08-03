import mongoose from 'mongoose';

require('dotenv').config();

const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH, MONGODB_DATABASE } = process.env;
const connectToTheDatabase = () => {
  mongoose
    .connect(`mongodb://${MONGO_PATH}/${MONGODB_DATABASE}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: {
        user: MONGO_USER || '',
        password: MONGO_PASSWORD || '',
      },
    })
    .then((res) => {
      console.log('Connected To Db');
    })
    .catch((err) => console.log('Error connecting: ', err));
};
module.exports = connectToTheDatabase;
