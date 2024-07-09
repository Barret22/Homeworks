

class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
    }
    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }
    getAverageGrade() {
        if(this.grades.length === 0) return 0;
        const sum = this.grades.reduce((a, b) => a+b, 0);
        return sum / this.grades.length;
    }
    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Attendance array is already full.");
        }
    }
    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Attendance array is already full.");
        }
    }
    getAverageAttendance() {
        const attendedClasses = this.attendance.filter(item => item !== null);
        if (attendedClasses.length === 0) return 0;
        const presentCount = attendedClasses.filter(item => item !== true).length;
        return presentCount / attendedClasses.length;
    }
    summary() {
        const averageGrade = this.getAverageGrade();
        const averageAttendance = this.getAverageAttendance();
        if (averageGrade > 90 && averageAttendance > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || averageAttendance < 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const students = [];
function addStudent() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthYear = parseInt(document.getElementById('birthYear').value);
    if (!firstName || !lastName || !birthYear) {
        alert ('Заповніть усі поля для студента!');
        return;
    }
    const student = new Student(firstName, lastName, birthYear);
    students.push(student);
    updateStudentSelect();
    document.getElementById('output').innerHTML = `Студент ${student.firstName} ${student.lastName} доданий. Вік: ${student.getAge()}`;
}
function updateStudentSelect() {
    const studentSelect = document.getElementById('studentSelect');
    studentSelect.innerHTML = '';
    students.forEach((student, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${student.firstName} ${student.lastName}`;
        studentSelect.appendChild(option);
    })
}
function getSelectedStudent() {
    const studentSelect = document.getElementById('studentSelect');
    const selectedIndex = studentSelect.value;
    return students[selectedIndex];
}
function addGrade() {
    const student = getSelectedStudent();
    if (!student) {
        alert('Спочатку додайте студента!');
        return;
    }
    const grade = parseInt(document.getElementById('grade').value);
    if (!grade) {
        alert('Введіть оцінку!');
        return;
    }
    student.grades.push(grade);
    document.getElementById('output').innerHTML =`Оцінка ${grade} додана. Середній бал: ${student.getAverageGrade()}`;
}
function markPresent() {
    const student = getSelectedStudent();
    if (!student) {
        alert('Спочатку додайте студента!');
        return;
    }

    student.present();
    document.getElementById('output').innerHTML = `Відвідуваність оновлена. Середня відвідуваність: ${student.getAverageAttendance()}`;
}

function markAbsent() {
    const student = getSelectedStudent();
    if (!student) {
        alert('Спочатку додайте студента!');
        return;
    }

    student.absent();
    document.getElementById('output').innerHTML = `Відвідуваність оновлена. Середня відвідуваність: ${student.getAverageAttendance()}`;
}

function getSummary() {
    const student = getSelectedStudent();
    if (!student) {
        alert('Спочатку додайте студента!');
        return;
    }

    document.getElementById('output').innerHTML = student.summary();
}