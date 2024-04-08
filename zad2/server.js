const express = require('express');
const bodyParser = require('body-parser');
const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', studentsController.getAddNewStudentPage);

app.get('/success', (req, res) => {
    res.render('Success', { title: 'Success' });
});

app.get('/students-list', (req, res) => {
    res.render('List', { title: 'List' });
});

app.post('/add-student', (req, res) => {
    res.redirect('/success');
});

app.use(errorController.getNotFoundPage);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
