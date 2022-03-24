import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about">
      <h1 className="about-title">About Brainteaser</h1>
      <p className="about-description">
        We believe everyone should have easy access to train their minds. That's
        why here at Brainteaser, users can solve puzzles in a gamified way.
      </p>

      <p className="about-description">
        Brainteaser offers memory games, simple math games, and much more in
        order to keep your mind active and healthy.
      </p>

      <p className="about-description">
        Brainteaser is an application that can be used for learning and
        entertainment.
      </p>
    </section>
  );
};

export default About;
