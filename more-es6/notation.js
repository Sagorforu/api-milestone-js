const student = {
    name: 'kokim uddin',
    age: 16,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
};

// dot notation
const marks = student.marks;
console.log(marks);

const mark = student.marks.math;
console.log(mark);

// 3rd bracket notation
const physics = student ['marks']['physics'];
console.log(physics);

// 3rd bracket notation another way
const subject = 'chemistry';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);