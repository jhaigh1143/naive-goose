// @flow strict-local
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App.react";

test("renders learn react link", () => {
  render(<App name="My Name" />);
  const linkElement = screen.getByText(/LearAAAAn react/i);
  expect(linkElement).toBeInTheDocument();
});
