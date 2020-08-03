/**
 * @file Defined schema for user.
 * @this User Model
 * @exports userModel
 *
 * @author Sanjay Sharma
 */
// Require Mongoose
import mongoose from 'mongoose';

// Define a schema
const { Schema } = mongoose;

const userModelSchema = new Schema({
  firstName: String,
  lastName: String,
});
const userModel = mongoose.model('User', userModelSchema);
module.exports = userModel;
