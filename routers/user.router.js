const express = require('express');

const { createUser, homePage, modifyUser, readUsers, deleteUser, updateUser } = require('../controllers/user.controller.js')

const router = express.Router();

router.get("/", homePage)
router.get('/read', readUsers)
router.get('/delete/:id', deleteUser)
router.get('/update/:id', updateUser)


router.post('/create', createUser)
router.post('/change/:id', modifyUser)

module.exports = router;