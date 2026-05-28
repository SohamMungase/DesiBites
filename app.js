import React from "react"
import ReactDOM from "react-dom/client"

const Header = ()=>{
    return ( <div className="header">
    <div className="logo-container">
        <img className="logo" src="https://img.magnific.com/premium-vector/food-logo-with-smile-spoon-fork-delicious-food-design-illustration-tongue-saliva_207371-61.jpg?w=2000"/>
    </div>

    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
        </ul>
    </div>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header/>)

