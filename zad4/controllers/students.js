
let students = [];

let nextId = 1;

exports.getAddNewStudentPage = (req, res) => {
    res.render('Home', { title: 'Add new student' });
};

exports.addStudent = (req, res) => {
    const { fullName, code, fieldOfStudies } = req.body;
    
    const newStudent = {
        id: nextId,
        fullName,
        code,
        fieldOfStudies
    };
    students.push(newStudent);

    nextId++;

    res.redirect('/success');
};

exports.getAddingNewStudentSuccessPage = (req, res) => {
    res.render('Success', { 
        pageTitle: 'Success',
        message: 'Student has been added with success!',
        links: [
            { href: '/', text: 'Go to Home' },
            { href: '/students-list', text: 'View Students List' }
        ],
        partials: {
            head: 'partials/head',
            navigation: 'partials/navigation'
        }
    });
};

exports.getStudentsListPage = (req, res) => {
    res.render('List', { 
        pageTitle: 'Students List',
        students: students
    });
};

