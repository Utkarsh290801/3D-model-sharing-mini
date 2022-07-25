const {Schema,model} = require('../connection');

const myschema = new Schema({
    title : String,
    description : String,
    size: String,
    triangle:String,
    materials:String,
    uploadedBy:String,
    support:String,
    thumbnail: String,

});

module.exports= model('3D',myschema);
