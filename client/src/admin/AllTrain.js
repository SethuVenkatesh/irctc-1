import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { createSearchParams, useNavigate } from 'react-router-dom'



const AllTrain = () => {
    const navigate=useNavigate()
    const [trains,setTrains]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/train/all").then((res)=>{
            console.log(res.data)
            setTrains(res.data)
        })
    },[])

    const handleUpdate=(id)=>{
        navigate({
            pathname:"/train/update",
            search:createSearchParams(
                {
                    id:id
                }
            ).toString()
        })
    }

    const handleDelete=(id)=>{
        axios.delete("http://localhost:3001/train/delete",{data:{id:id}}).then((res)=>{

        })
    }

    return (
        <div>
            {
                trains.map((train)=>{
                    return (
                        <div>
                            {
                                train.trainName
                            }
                            <div onClick={()=>handleUpdate(train._id)}>Update</div>
                            <div onClick={()=>handleDelete(train._id)}>Delete</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllTrain