const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({

  title: {
    type: String,
    required: [true, 'title is needed']
  },
  description: {
    type: String,
    required: false
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

module.exports = mongoose.model('Task', TaskSchema)