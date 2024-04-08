const express = require('express');
const bodyParser = require('body-parser');
const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', studentsController.getAddNewStudentPage);
app.post('/add-student', studentsController.addStudent);
app.get('/success', studentsController.getAddingNewStudentSuccessPage);
app.get('/students-list', studentsController.getStudentsListPage);

app.use(errorController.getNotFoundPage);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

