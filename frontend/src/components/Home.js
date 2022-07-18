import React from "react";
const Home = () => {
  let myhobbies = "Coding & Gaming";
  // inline css
const btnStyles ={
    background: 'red' ,
    borderRadius: "5px",
    border: "none",
    color: "white",
    padding: "10px",
    boxShadow: "2px 2px 2px 1px #282c34",
};


  const btn1 = (
    <button style={{ background: "green", color: "white", padding: "10px" }}>
      A Custom Button
    </button>
  );
  const btn2 =(
    <button style={btnStyles}>Another Button</button>
);
  
  return (
    <div>
      <h1>Home Component</h1>
      <h2 className="mytext"> {myhobbies}</h2>
      {btn1}
      {btn2}
    </div>
  );
};

export default Home;
                       