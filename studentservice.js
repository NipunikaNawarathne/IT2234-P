const students=require('./studentsdb') //import student data

//write function to get all the students
function getStudents(){
    return students;
}

//find particular student according to ID
function getStudentByID(id){
    return students.find((student)=>student.regno==id)
}

//find student by gender
function getStudentByGender(gen){
    return students.filter((student)=>student.gender==gen)
}




//export our all the available functions
module.exports={getStudents, getStudentByID, getStudentByGender}