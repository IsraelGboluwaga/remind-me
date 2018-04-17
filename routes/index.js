const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.post('/add', (req, res, next) => {
    const todo = req.body.todo;
    const remindMe = req.body.remindMe;

    const params = {todo, remindMe};

    Todo.create(params, (err, saved) => {
        if (err) { return err }

        if (saved)
            res.redirect('/');
    });
});

module.exports = router;
