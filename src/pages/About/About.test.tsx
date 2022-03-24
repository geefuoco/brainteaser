import React from "react";
import { screen, render } from "@testing-library/react";
import About from "./About";

describe("About", () => {
  const setup = () => render(<About />);

  beforeEach(() => setup());

  it("should render the component", () => {
    expect(screen.getByText(/about brainteaser/i));
  });
});
