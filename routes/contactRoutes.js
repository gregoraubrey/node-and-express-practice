const express = require('express');
const router = express.Router();
const { getContacts, getIndividualContact, createContact, updateContact, deleteContact } = require('../controllers/contactController');

router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getIndividualContact).put(updateContact).delete(deleteContact);

module.exports = router;