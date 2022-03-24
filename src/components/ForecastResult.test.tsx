import { render, screen } from "@testing-library/react";
import React from "react";
import { forcastData } from "../data/forcastData";
import { ForecastResult } from "./ForecastResult";
test("Test ForecastResult", () => {
  render(<ForecastResult forecastData={forcastData.list} />);
  const linkElement = screen.getAllByAltText("weather-icon");
  expect(linkElement).not.toBeNull();
  const header = screen.getByText("Next 5 days Forecast");
  expect(header).not.toBeNull();
});
