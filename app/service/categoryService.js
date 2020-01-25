let model = require('../model/category');

exports.createCategory = (data)=>{
 return new Promise((resolve , reject)=>{
     model.findOne({name:data.name}).then(found =>{
         if(found){
             resolve({success:false , message:'product category already exists !!'})
         }else{
             model.create(data).then(created =>{
                 if(created){
                    resolve({success:true , message:'product category created !!'})
                 }else{
                    resolve({success:false , message:'product category was not created !!'}) 
                 }
             })
         }
     }).catch(err =>{
         reject(err);
     })
 })
}

exports.getAllCategory = ()=>{
    return new Promise((resolve , reject)=>{
        model.find({}).then(found =>{
            if(!found){
                resolve({success:false , message:'product category not found !!'})
            }else{
                resolve({success:true , message:'product category !!' , data:found})
            }
        }).catch(err =>{
            reject(err);
        })
    })
   }