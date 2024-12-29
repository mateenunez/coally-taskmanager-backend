const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url).then(res => console.log("Conected to database"))
}

module.exports = connectDB