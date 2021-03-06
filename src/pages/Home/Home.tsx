import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <main className="home">
      <h1 className="home-title">
        We believe everyone should have easy access to train their brains daily
      </h1>
      <p className="home-description">
        Brainteaser offers simple, well designed mind games for you to train
        your brain every day
      </p>
    </main>
  );
};

export default Home;
