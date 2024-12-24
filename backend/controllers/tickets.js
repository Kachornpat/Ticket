const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const Ticket = require('../models/ticket');
const config = require('../config/config.json');

exports.getAllTickets = async (req, res, next) => {
    try {
        const [allTickets] = await Ticket.getAll();
        res.status(200).json(allTickets)
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.addTicket = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return
    }

    const title = req.body.title;
    const body = req.body.body;
    const user = req.body.user;

    try {
        const ticket = {
            title: title,
            body: body,
            user: user
        };
        const result = await Ticket.save(ticket);
        res.status(201).json({ message: 'New Ticket is added!!!' });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.deleteTicket = async (req, res, next) => {
    try {
        const deleteResponse = await Ticket.delete(req.params.id);
        res.status(200).json(deleteResponse)
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
       
}