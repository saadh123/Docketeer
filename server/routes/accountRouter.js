/**
 * ************************************
 *
 * @module AccountRouter
 * @author Catherine Larcheveque, Lorenzo Guevara, Charles Ryu, Griffin Silver, Alex Smith
 * @date 6/14/2021
 * @description Routes all requests to change user information
 *
 * ************************************
 */

const express = require('express');
const configController = require('../controllers/configController');
const userController = require('../controllers/userController');
const bcryptController = require('../controllers/bcryptController');

const router = express.Router();
 
router.post('/contact', 
  configController.updateContactPref,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

router.post('/password', 
  bcryptController.comparePassword,
  bcryptController.hashNewPassword,
  userController.updatePassword,
  (req, res) => {
    if (res.locals.error) return res.status(200).json(res.locals);
    return res.status(200).json('Successfully updated your password.');
  }
);

router.post('/phone', 
  userController.updatePhone,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

router.post('/cpu', 
  configController.updateCPUThreshold,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

router.post('/memory', 
  configController.updateMemThreshold,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

router.post('/stops',
  configController.updateStopPref,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

module.exports = router;