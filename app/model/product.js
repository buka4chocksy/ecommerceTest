var mongoose = require('mongoose')
var schema = mongoose.Schema;
var productSchema = new schema({
    Name:{type:String},
    Description :{type:String},
    Price :{type:Number},
    Category :{type: mongoose.SchemaTypes.ObjectId , ref:'category'},
    Color : {type:String},
    ImageUrl :{type:String , default:''},
    ImageID :{type:String , default:''},

})

module.exports = mongoose.model('product' , productSchema);