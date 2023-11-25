const mongoose =require("mongoose")

const License =new mongoose.Schema({
    license:{type:String,unique:true},
    email:{type:String,default:null},
    validTo:{type:Date},
    registeredSite:{type:String,default:null},
    licenseFor:{type:String}
})

module.exports=mongoose.model("License",License);