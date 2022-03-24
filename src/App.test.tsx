import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { SnackbarProvider } from "notistack";

test("Test App", () => {
  render(
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  );
  const linkElement = screen.getByText("Weather App");
  expect(linkElement).toBeInTheDocument();
});
