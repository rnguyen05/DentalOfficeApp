const Appointment = require("../models/appointment");
const mongoose = require("mongoose");
const express = require("express");
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
      appointmentDate: req.body.appointmentDate,
      message: req.body.message
    });
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
