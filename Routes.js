const express = require('express');
const Router = express.Router();
const License = require('./licenseSchem');

// validate license
Router.post('/api/osbash-product/license/validate',validate)

function validate(req,res){
    try{
        console.log(req.headers.origin)
    const {license,email}= req.body;
    console.log(req.body)
    License.findOne({license:license},async (err,data)=>{
        if(err){
            res.status(500).send(err.message);
            return;
        }
        if(!data){
            res.status(200).send({verified:false,email,license,validTo:null,message:'this license or email does not exist'});
            return;
        }
        if(data){
            const validity = data.validTo - Date.now();
            const registeredSite = data.registeredSite;
            if(validity>0 && !registeredSite){
                data.registeredSite= req.headers.origin;
                data.email= email;
                await data.save();
                res.status(200).send({verified:true,email,license,validTo:new Date(data.validTo),message:`This license Valid To ${new Date(data.validTo)}`})
            }
            else if(validity>0 && registeredSite && email === data.email ){
                data.registeredSite= req.headers.origin;
                await data.save();
                res.status(200).send({verified:true,email,license,validTo:new Date(data.validTo),message:`This license Valid To ${new Date(data.validTo)}`})
                // fetch('')
            }
            else{
                res.status(200).send({verified:false,email,license,validTo:data.validTo,message:`This license has been expired)}`})
            }
        }
    })
    }catch(e){
        console.log(e.message);
        res.send(e);
    }
}

// generate new license
const crypto = require('crypto');

function generateLicenseKey(length) {
    const bytes = crypto.randomBytes(length);
    return bytes.toString('hex');
}

// Example: Generate a license key with a length of 16 characters
// console.log('Generated License Key:', licenseKey);


Router.post('/generate-license', async(req,res)=>{
    try{
    const licenseKey = generateLicenseKey(16);
    const validTo= new Data(req.body.validTo)
    const newLicense =await License.create({license:licenseKey,validTo:validTo,licenseFor:req.body.licenseFor})
    await newLicense.save();
    res.status(200).send({license:licenseKey,validTo:validTo,licenseFor:req.body.licenseFor,message:'license created successfully'})
    }catch(e){
        res.status(500).send(e.message);
        console.log(e.message)
    }
})
const generateDemo=async()=>{

    const licenseKey = generateLicenseKey(16);
    const valid= new Date('2027-11-24');
    const DemoLicense = {license:licenseKey,validTo:valid,licenseFor:'any'}
    const newDemoLicense = await License.create(DemoLicense);
    await newDemoLicense.save((err)=>{
        console.log(err)
    console.log(DemoLicense)
    })
    // console.log(new Date())
}
// generateDemo()


module.exports = Router;
