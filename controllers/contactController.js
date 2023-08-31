const errorHandler = require("../middleware/errorHandler");

const getContacts = (req, res) => {
    res.status(200).json({
        message: 'Get all contacts'
    });
};

const createContact = (req, res, next) => {
    console.log(`The body of the request is: ${JSON.stringify(req.body)}`);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        const err = new Error('Please provide a name, email address, and phone number');
        err.statusCode = 400;
        next(err);
    }
    res.status(201).json({
        message: 'Create new contact'
    });
};

const getIndividualContact = (req, res) => {
    res.status(200).json({
        message: `Get contact for id ${req.params.id}`
    });
};

const updateContact = (req, res) => {
    res.status(200).json({
        message: `Update contact for id ${req.params.id}`
    });
};

const deleteContact = (req, res) => {
    res.status(200).json({
        message: `Delete contact for id ${req.params.id}`
    });
};

module.exports = {getContacts, createContact, getIndividualContact, updateContact, deleteContact};