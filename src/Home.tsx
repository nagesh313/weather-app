import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import { ForecastResult } from "./components/ForecastResult";
import { SearchForm } from "./components/SearchForm";
import { SearchResult } from "./components/SearchResult";

export const SearchLocation = () => {
  const [searchResult, setSearchResult] = React.useState<any>();
  const [forecastData, setForecastData] = React.useState<any>();

  React.useEffect(() => {
  }, []);
  return (
    <Container component="main" maxWidth="sm" className="home-container">
      <CssBaseline />
      <SearchForm
        setSearchResult={setSearchResult}
        setForecastData={setForecastData}
      ></SearchForm>
      {searchResult && (
        <SearchResult searchResult={searchResult}></SearchResult>
      )}
      {forecastData && (
        <ForecastResult forecastData={forecastData}></ForecastResult>
      )}
    </Container>
  );
};
