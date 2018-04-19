const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const config = require('../config');

let userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  links: [{
    type: String
  }]
});

userSchema.statics.addUser = function (username, password) {
  let newUser = new this({
    username: username,
    password: password,
  });

  return bcrypt.hash(newUser.password, 1).then((hash) => {
    newUser.password = hash;
    return newUser.save();
  });
};

userSchema.statics.check = function (username, password) {
  return this.findOne({ username: username })
    .then((user) => {
      if (!user) {
        throw new Error('No User');
      } else {
        return bcrypt.compare(password, user.password);
      }
    });
};

userSchema.statics.addLink = function (id, link) {
  return this.findOne({ _id: id })
    .then((user) => {
      user.links.push(link);
      return user.save();
    });
};

userSchema.statics.getLinks = function (id) {
  return this.findOne({ _id: id})
    .then((user) => {
      return user.links;
    });
};

module.exports = mongoose.model('User', userSchema);