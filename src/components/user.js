// const User = ()=>{
//     return(
//     <div className="user-card">
//         <h2>Name:Soham</h2>
//         <h3>Location: Pune</h3>
//         <h4>Contact: @Sohammungase</h4>
//     </div>
//     )
// }

// export default User;


import { useEffect, useState } from "react";

const User = (props)=>{
    const {name,location,contact}=props
    const [userInfo,setUserInfo] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const data = await fetch("https://api.github.com/users/Sohammungase")
        const json = await data.json()
        setUserInfo(json)
        console.log(json)
    }

    const {name,location,login,avtar_url}=userInfo

    return(
        <div>
            <img src="{avtar_url}" alt="userphoto"/>
            <h1>Nmae:{name}</h1>
            <h2>Location:{Location}</h2>
            <h3>Contact:{login}</h3>
        </div>
    )
}

export default User;
