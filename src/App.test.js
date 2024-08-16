/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
//import Fetch from "./fetch";
import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(<App />);

  const linkElement = screen.getByText("Add Golfer");
  expect(linkElement).toBeInTheDocument();
});
