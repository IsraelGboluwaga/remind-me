const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.post('/add', (req, res, next) => {
    const todo = req.body.todo;
    const time = req.body.time;
    const remindMe = req.body.remindMe;

    const params = {todo, time, remindMe};

    Todo.create(params, (err, saved) => {
        if (err) { return err }

        if (saved)
            res.redirect('/');
    });
});

module.exports = router;
