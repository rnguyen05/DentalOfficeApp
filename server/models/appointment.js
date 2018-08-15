const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  phone: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  },
  userId: {
    type: String
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
