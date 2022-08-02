const {Schema,model} = require('../connection');

const myschema = new Schema({
    title : String,
    description : String,
    size: String,
    triangle:String,
    materials:String,
    vertices:String,
    uploadedBy:String,
    support:String,
    image : String,
    file : String,
    createdAt: Date,
    category: String,
});

module.exports= model('3D',myschema);
