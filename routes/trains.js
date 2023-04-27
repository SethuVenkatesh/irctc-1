const express=require('express')
var router = express.Router();
const mongoose=require('mongoose')
const Train=require('../models/train')



router.get("/all",async function(req,res){
  var AllTrains=await Train.find();
  res.status(200).send(AllTrains)
})
router.post('/new', function(req, res){
   var TrainDetails=req.body.train;
   Train.create(TrainDetails).then(data=>console.log("Train Created successfully"))
   res.send('create new train');
 });


 router.get("/fondOne",async function(req,res)){

  var Traind=req.body.trainId;
  const TrainDetail=
 }
 router.patch('/update',async function(req, res){ 
    var TrainDetails=req.body.train;
    var TrainId=TrainDetails._id
     const updatedTrain=await DonorRegistration.findByIdAndUpdate(
        TrainId,
        {TrainDetails},
        {new: true},
    );
    console.log("Train updated successfully")
    res.send('update train');
 });

 router.delete("/delete",async function(req,res){

  var TrainId=req.body.id
  console.log(req.body)
  console.log(TrainId)
  Train.findByIdAndDelete(TrainId).then((err,docs)=>console.log(err,docs))
 
  console.log("Traind deleted successfully")
  res.send("Delete train")
 })

 module.exports = router;