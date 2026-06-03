import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const RestaurantMenu=()=> {

    const [resMenu,setResMenu]= useState(null)

    useEffect(()=>{
        FetchData()
    },[])

    const FetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId=21001")
        const json = await data.json()
        // console.log(json)
        setResMenu(json.data)
    }
  return (
    <div>
        <h1>hello</h1>
    </div>
  )
}

export default RestaurantMenu