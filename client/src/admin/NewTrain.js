import React, { useState } from 'react'
import InputContainer from '../components/InputContainer'
import axios from 'axios';
const NewTrain = () => {

    const [train,setTrain]=useState({
        trainName:"",
        trainNumber:"",
        source:"",
        destination:"",
        startTime:'',
        endTime:'',
        numberOfStations:0,
        listOfStations:[],
        seater:{price:"",seats:0},
        sleeper:{price:"",seats:0},
        threeTireAC:{price:"",seats:0},
        twoTireAC:{price:"",seats:0},
        singleTireAC:{price:"",seats:0},

    })
    console.log(train)
    const createNewTrain=()=>{
        axios.post("http://localhost:3001/train/new",{train}).then((res)=>{
          console.log(res)
        }).catch((err)=>console.log(err))
    }
  return (
    <div className='container p-4'>
      <InputContainer labelName="Train Name" type="text" value={train.trainName} name="trainName" setTrain={setTrain} train={train}/>
      <InputContainer labelName="Train Number" type="text" value={train.trainNumber} name="trainNumber" setTrain={setTrain} train={train}/>
      <InputContainer labelName="Source Place" type="text" value={train.source} name='source' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Destination Place" type="text" value={train.destination} name='destination' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Start Time" type="time" value={train.startTime} name='startTime' setTrain={setTrain} train={train}/>
      <InputContainer labelName="End Time" type="time" value={train.endTime} name='endTime' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Number of Stations" type="text" value={train.numberOfStations} name='numberOfStations' setTrain={setTrain} train={train}/>
      <InputContainer labelName="List of Stations" type="text" value={train.listOfStations} name='listOfStations' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Seater Price" type="text" value={train.seater.price} name='seaterPrice' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Seater Seats" type="text" value={train.seater.seats} name='seaterSeats' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Sleeper Price" type="text" value={train.sleeper.price} name='sleeperPrice' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Sleeper Seats" type="text" value={train.sleeper.seats} name='sleeperSeats' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Three Tire Price" type="text" value={train.threeTireAC.price} name='threeTireACPrice' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Three Tire Seats" type="text" value={train.threeTireAC.seats} name='threeTireACSeats' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Two Tire Price" type="text" value={train.twoTireAC.price} name='twoTireACPrice' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Two Tire Seats" type="text" value={train.twoTireAC.seats} name='twoTireACSeats' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Single Tire Price" type="text" value={train.singleTireAC.price} name='singleTireACPrice' setTrain={setTrain} train={train}/>
      <InputContainer labelName="Single Tire Seats" type="text" value={train.singleTireAC.seats} name='singleTireACSeats' setTrain={setTrain} train={train}/>
      <button className='p-4 text-slate-400 border-4 rounded-sm ' onClick={createNewTrain}>Submit</button>
    </div>

  )
}

export default NewTrain