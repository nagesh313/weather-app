import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { SnackbarProvider } from "notistack";

test("Test Home component", () => {
  render(
    <SnackbarProvider>
      <Home />
    </SnackbarProvider>
  );

  const header = screen.getByText("Weather App");
  expect(header).toBeInTheDocument();
  const inputField = screen.queryAllByText("Search For Location");
  expect(inputField).not.toBeNull();
  const searchButton = screen.queryAllByText("SEARCH");
  expect(searchButton).not.toBeNull();
});
