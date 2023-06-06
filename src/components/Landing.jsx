import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";

export default function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing </h1>
            <h2>Lorem ipsum dolor sit amet consectetur, </h2>
            <a href="#features">
              <button className="btn">Browse Books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}
