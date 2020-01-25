var mongoose = require('mongoose')
var schema = mongoose.Schema;
var categorySchema = new schema({
    Name:{type:String}
})

module.exports = mongoose.model('category' , categorySchema);