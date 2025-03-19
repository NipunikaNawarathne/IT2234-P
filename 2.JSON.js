/*
Define 10 students JSON
Store it in an Array
Find the female students
Find the students who are following IT course
Find the max and average GPA among the students
*/

let students = [
	{regno: '2021/ICT/10', name: 'Harshan', age: 23, course: 'SSM', gender: 'male', gpa: 3.54 },
	{regno: '2021/ICT/41', name: 'Nipunika', age: 24, course: 'IT', gender: 'female', gpa: 3.74 },
	{regno: '2021/ICT/44', name: 'Danial', age: 32, course: 'SSM', gender: 'male', gpa: 2.09 },
	{regno: '2021/ICT/56', name: 'Tia', age: 29, course: 'IT', gender: 'female', gpa: 3.10 },
	{regno: '2021/ICT/62', name: 'Sally', age: 20, course: 'HS', gender: 'female', gpa: 3.43},
	{regno: '2021/ICT/78', name: 'Tim', age: 31, course: 'SSM', gender: 'male', gpa: 3.07 },
	{regno: '2021/ICT/80', name: 'Zaid', age: 41, course: 'SSM', gender: 'male', gpa: 2.99 },
	{regno: '2021/ICT/87', name: 'Clem', age: 33, course: 'HS', gender: 'male', gpa: 3.14 },
	{regno: '2021/ICT/93', name: 'Sarah', age: 26, course: 'IT', gender: 'male', gpa: 3.51 },
	{regno: '2021/ICT/102', name: 'Malani', age: 57, course: 'HS', gender: 'female', gpa: 3.64 }
]

//Female students
let femaleStudents = students.filter(stu => stu.gender === 'female')
console.log("Female Students: ", femaleStudents)
console.log()

//Follow IT
let ITStudents = students.filter(stu => stu.course === 'IT')
console.log("IT Students: ", ITStudents)
console.log()

//Max gpa
let maxGPA = Math.max(...students.map(stu => stu.gpa))
console.log("Maximum GPA: ", maxGPA)

//Average gpa
let avGPA = students.reduce((sum, stu) => sum + stu.gpa, 0) / students.length
console.log("Average GPA: ", avGPA.toFixed(2))