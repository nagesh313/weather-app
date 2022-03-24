import { render, screen } from "@testing-library/react";
import React from "react";
import { forcastData } from "../data/forcastData";
import {
  CurrentDataBox,
  DegreeCentigrate,
  WeatherIcon,
} from "./SupportingComponents";
describe("Test SupportingComponents", () => {
  test("test CurrentDataBox", () => {
    render(<CurrentDataBox value="Test value" label="Test label" />);
    const label = screen.getByText("Test value");
    const value = screen.getByText("Test label");
    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
  test("test DegreeCentigrate", () => {
    render(<DegreeCentigrate />);
    const degree = screen.getByText("O");
    const centigrate = screen.getByText("C");
    expect(degree).toBeInTheDocument();
    expect(centigrate).toBeInTheDocument();
  });

  test("test WeatherIcon", () => {
    render(<WeatherIcon icon="2" />);
    const linkElement = screen.getAllByAltText("weather-icon");
    expect(linkElement.length).toBeGreaterThan(0);
  });
});
