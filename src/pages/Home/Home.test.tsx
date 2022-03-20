import React from "react";
import { screen, render } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  const setup = () => render(<Home />);

  it("should render the component", () => {
    setup();
    expect(screen.getByText(/brainteaser/i)).toBeTruthy();
  });
});
