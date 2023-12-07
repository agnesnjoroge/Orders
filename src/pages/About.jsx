import React from "react";
import MultiplePizzas from "../assets/pizza.jpeg";
import "../styles/about.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          We serve the best pizza and are commited to serve our customers.Order now for a quick delivery.
             We serve the best pizza and are commited to serve our customers.Order now for a quick delivery.
          We serve the best pizza and are commited to serve our customers.Order now for a quick delivery.
          We serve the best pizza and are commited to serve our customers.Order now for a quick delivery.
          We serve the best pizza and are commited to serve our customers.Order now for a quick delivery.
        </p>
      </div>
    </div>
  );
}

export default About;