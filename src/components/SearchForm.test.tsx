import { render, screen } from "@testing-library/react";
import { SnackbarProvider } from "notistack";
import React from "react";
import { SearchForm } from "./SearchForm";
test("Test SearchForm", () => {
  render(
    <SnackbarProvider>
      <SearchForm setSearchResultSpy={() => {}} setForecastData={() => {}} />
    </SnackbarProvider>
  );
  const header = screen.getByText("Weather App");
  expect(header).toBeInTheDocument();
  const inputField = screen.queryAllByText("Search For Location");
  expect(inputField).not.toBeNull();
  const searchButton = screen.queryAllByText("SEARCH");
  expect(searchButton).not.toBeNull();
});
