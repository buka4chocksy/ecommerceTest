var mongoose = require('mongoose')
var schema = mongoose.Schema;
var categorySchema = new schema({
    name:{type:String}
})

module.exports = mongoose.model('category' , categorySchema);