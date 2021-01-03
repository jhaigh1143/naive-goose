// @flow strict-local
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home.react";

test("renders learn react link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/LearAAAAn react/i);
  expect(linkElement).toBeInTheDocument();
});
