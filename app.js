import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Restaurantcard from "./src/components/Restaurantcard";



// const Footer = () => {
//   return <div>Footer</div>;
// };

const Applayout = () => {
  return (
    <div>
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
