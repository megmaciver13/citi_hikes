var mongoose = require('../db/connection')
var bcrypt = require('bcrypt-nodejs')

var User = mongoose.Schema({
  local: {
    email: String,
    password: String
  },
  isAdmin: Boolean
})

User.methods.encrypt = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

User.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password)
}

module.exports = mongoose.model('User', User)

// Seeding for admin user
// db.users.findOneAndUpdate(
//   {"local.email": "sam_admin"}
//   {"isAdmin": true}
// )


// db.users.findOneAndUpdate(
//   {"local.email": "sam_admin"},
//   {$set: {"isAdmin": "true"}}
// )