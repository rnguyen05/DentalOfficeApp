const Message = require("../models/message");
const mongoose = require("mongoose");
const express = require("express");
/*
*
*/

module.exports = {
  //Create new message
  create: function(req, res) {
    const newMessage = new Message({
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      message: req.body.message
    });
    newMessage
      .save()
      .then(result => {
        console.log(result);

        if (result) {
          return res.status(200).json({
            message:
              "Thank you for contacting us. We will contact you as soon as we can!"
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

  //   //Find user function on login
  //   findAll: function(req, res) {
  //     console.log("User login ", req.body);
  //     User.find({ email: req.body.email })
  //       .exec()
  //       .then(user => {
  //         if (user.length < 1) {
  //           return res.status(401).json({
  //             message: "Auth failed"
  //           });
  //         }
  //         bcrypt.compare(req.body.password, user[0].password, (err, result) => {
  //           if (err) {
  //             return res.status(401).json({
  //               message: "Auth failed"
  //             });
  //           }
  //           if (result) {
  //             const token = jwt.sign(
  //               {
  //                 email: user[0].email,
  //                 userId: user[0]._id
  //               },
  //               "ppaoidutslatned",
  //               {
  //                 expiresIn: "1h"
  //               }
  //             );
  //             return res.status(200).json({
  //               message: "Auth successful",
  //               token: token
  //             });
  //           }
  //           res.status(401).json({
  //             message: "Auth failed"
  //           });
  //         });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         res.status(500).json({
  //           error: err
  //         });
  //       });
  //   }, //End of Find user function

  //   //Find user function on login
  //   findOne: function(req, res) {
  //     User.find({ email: req.body.email })
  //       .exec()
  //       .then(user => {
  //         if (user.length < 1) {
  //           return res.status(401).json({
  //             message: "Auth failed"
  //           });
  //         }
  //         bcrypt.compare(req.body.password, user[0].password, (err, result) => {
  //           if (err) {
  //             return res.status(401).json({
  //               message: "Auth failed"
  //             });
  //           }
  //           if (result) {
  //             const token = jwt.sign(
  //               {
  //                 email: user[0].email,
  //                 userId: user[0]._id
  //               },
  //               "ppaoidutslatned",
  //               {
  //                 expiresIn: "2h"
  //               }
  //             );
  //             return res.status(200).json({
  //               message: "Auth successful",
  //               token: token
  //             });
  //           }
  //           res.status(401).json({
  //             message: "Auth failed"
  //           });
  //         });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         res.status(500).json({
  //           error: err
  //         });
  //       });
  //   }, //End of FindOne user function

  //   //User logout function
  //   logout: function(req, res) {
  //     console.log("logout req ", req);
  //     req.logout();
  //     res.send({ isLoggedIn: false });
  //   } //End of User logout function
};
