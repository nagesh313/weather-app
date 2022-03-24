import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchResult } from "./SearchResult";
import { SnackbarProvider } from "notistack";
import { forcastData } from "../data/forcastData";

test("Test SearchResult", () => {
  render(
    <SearchResult
      searchResult={{ ...forcastData.city, data: forcastData.list[0] }}
    />
  );
  const cityAndcountry = screen.getByText("London, GB");
  expect(cityAndcountry).toBeInTheDocument();
  const temperature = screen.getByText("Temperature");
  expect(temperature).toBeInTheDocument();

  const feelsLike = screen.getByText("Feels like");
  expect(feelsLike).toBeInTheDocument();
  const seaLevel = screen.getByText("Sea Level");
  expect(seaLevel).toBeInTheDocument();
  const wind = screen.getByText("Wind");
  expect(wind).toBeInTheDocument();
  const humidity = screen.getByText("Humidity");
  expect(humidity).toBeInTheDocument();
  const visibility = screen.getByText("Visibility");
  expect(visibility).toBeInTheDocument();
});
