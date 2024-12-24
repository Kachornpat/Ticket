const express = require('express');
const { body } = require('express-validator');
const ticketsController = require('../controllers/tickets')
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, ticketsController.getAllTickets)

router.post(
    '/',
    [
        auth,
        body('title').trim().isLength({ min: 5 }).not().isEmpty(),
        body('body').trim().isLength({ min: 10 }).not().isEmpty(),
        body('user').trim().not().isEmpty()
    ],
    ticketsController.addTicket
)

router.delete(
    '/:id',
    auth,
    ticketsController.deleteTicket
);

module.exports = router;



