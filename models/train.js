const mongoose = require('mongoose');


const Arrangement=mongoose.Schema({
    price:'Number',
    seats:'Number'
})
const Train = mongoose.Schema({
  trainName:'String',
  trainNumber:'String',
  source:'String',
  startTime:"String",
  endTime:'String',
  destination:'String',
  numberOfStations:'Number',
  listOfStations:[],
  seater:Arrangement,
  sleeper:Arrangement,
  threeTireAC:Arrangement,
  twoTireAC:Arrangement,
  singleTireAC:Arrangement,
});

module.exports = mongoose.model('Train', Train);