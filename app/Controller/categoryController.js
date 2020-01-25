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

     this.getById = (req,res)=>{
        service.getCategoryById(req.query.id).then(data =>{
         res.json(data);
        }).catch((err) => {
         res.json(err);
     })
     }

     this.updateCategoery = (req,res)=>{
        service.UpdateCategory(req.query.id ,req.body).then(data =>{
         res.json(data);
        }).catch((err) => {
         res.json(err);
     })
     }

     this.deleteCategoery = (req,res)=>{
        service.deleteCategory(req.query.id ).then(data =>{
         res.json(data);
        }).catch((err) => {
         res.json(err);
     })
     }
}