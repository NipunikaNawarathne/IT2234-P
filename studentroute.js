const express=require('express')
const router=express.Router() //import router from the express
const studentService=require('./studentservice')

//callback from the router
router.get('/', (req, res)=>{
    const results = studentService.getStudents()
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry, No Data Found !")
    }
})

//route to get certian student by ID
router.get('/:id', (req, res)=>{
    const id = req.params.id
    const results = studentService.getStudentByID(id)
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry, No Data Found !")
    }
})

//route by the gender
router.get('/gender/:gen', (req, res)=>{
    const gen = req.params.gen=='M'?'Male':'Female'
    const results = studentService.getStudentByGender(gen)
    if(results){
        res.status(200).json(results)
    }
    else{
        res.status(404).send("Sorry, No Data Found !")
    }
})




//export
module.exports=router