const getContacts = (req, res) => {
    res.status(200).json({
        message: 'Get all contacts'
    });
};

const createContact = (req, res) => {
    console.log(`The body of the request is: ${req.body}`);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.status(400).json({
            message: 'Please provide a name, email address, and phone number'
        });
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