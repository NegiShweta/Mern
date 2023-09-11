const ToDoModel = require('../Model/ToDoModel'); 
module.exports.getToDo = async(req,res)=>
{
    const ToDo = await ToDoModel.find()
    res.send(ToDo)
}

module.exports.saveToDo = async(req,res)=>
{
    const ToDo = await ToDoModel.find()
    res.send(ToDo)
}

module.exports.updateToDo = async(req,res)=>
{
    const ToDo = await ToDoModel.find()
    res.send(ToDo)
}

module.exports.deleteToDo = async(req,res)=>
{
    const ToDo = await ToDoModel.find()
    res.send(ToDo)
}
