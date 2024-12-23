const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/auth')
const User = require('../models/user');

const router = express.Router();


router.post(
    '/signup',
    [
        body('name').trim().not().isEmpty(),
        body('email').isEmail().withMessage('Please enter a valid email.')
            .custom(async (email) => {
                const user = await User.find(email);
                if (user[0].length > 0) {
                    return Promise.reject('Email address already exist!');
                }
            })
            .normalizeEmail(),
        body('password').trim().isLength({ min: 7 })
    ],
    authController.signup
)

router.post(
    '/signin',
    authController.signin
);

module.exports = router;



