const Appointment = require("../models/appointment");
const mongoose = require("mongoose");
const express = require("express");
const moment = require("moment");
/*
*
*/

module.exports = {
  //Create new message
  create: function(req, res) {
    console.log("req.body", req.body);
    const newAppointment = new Appointment({
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      reason: req.body.reason,
      appointmentDate: moment(req.body.appointmentDate).format("LLLL"),
      message: req.body.message
    });
    console.log("newAppointment", newAppointment);
    newAppointment
      .save()
      .then(result => {
        console.log(result);

        if (result) {
          return res.status(200).json({
            message:
              "Thank you for your request an appointment with us. We will contact you to confirm your appointment."
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  } //End of create function
};
