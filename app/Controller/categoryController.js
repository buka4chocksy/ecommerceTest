var service = require('../service/categoryService')

module.exports = categoryController = function(){
    this.create = (req,res)=>{
       service.createCategory(req.body).then(data =>{
        res.json(data);
       }).catch((err) => {
        res.json(err);
    })
    }

    this.getAll = (req,res)=>{
        service.getAllCategory({}).then(data =>{
         res.json(data);
        }).catch((err) => {
         res.json(err);
     })
     }
}