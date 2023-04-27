import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const UpdateTrain = () => {
    const [searchparams]=useSearchParams()
    const [trainId,setTrainId]=useState(searchparams.get("id"))
    console.log(searchparams.get("id"))
    useEffect(()=>{
        axios.get("http://localhost:3001/train/findOne",{trainId}).then(res=>console.log(res))
    })


  return (
    <div>UpdateTrain {searchparams.get("id")}</div>
  )
}

export default UpdateTrain