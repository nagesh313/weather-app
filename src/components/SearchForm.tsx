import LocationOnIcon from "@mui/icons-material/LocationOn";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useSnackbar } from "notistack";
import * as React from "react";
export const SearchForm = (props: any) => {
  const { enqueueSnackbar } = useSnackbar();
  const forecast = () => {
    var options: any = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/forecast",
      params: { q: searchInput, units: "metric" },
      headers: {
        "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
        "X-RapidAPI-Key": "15dd709fd1msh5ae0f6062bcf759p1a36b4jsnbabd43d64baa",
      },
    };

    axios
      .request(options)
      .then(function (response: any) {
        const list: any = [];
        response.data.list.forEach(
          (e: any) => (list[new Date(e.dt * 1000).getDate()] = e)
        );
        list.sort((e: any) => e.dt);
        response.data.list = list;
        props.setSearchResult({
          ...response.data.city,
          data: response.data.list[0],
        });
        props.setForecastData(response.data.list.slice(1, 6));
        console.log(response.data);
      })
      .catch(function (error: any) {
        debugger;
        console.error(error);
        enqueueSnackbar('Location "' + searchInput + '" not found', {
          variant: "error",
        });
      });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(searchInput);
    forecast();
  };
  const [searchInput, setSearchInput] = React.useState<string>();
  function handleChange(event: any) {
    setSearchInput(event.target.value);
    props.setSearchResult();
    props.setForecastData();
  }
  return (
    <Container component="main" maxWidth="sm" className="home-container">
      <CssBaseline />
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          marginTop: 6,
          padding: 5,
          paddingBottom: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <WbSunnyIcon fontSize="large"></WbSunnyIcon>
        <Typography component="h1" variant="h4" sx={{ mt: 2 }}>
          Weather App
        </Typography>
        <FormControl fullWidth sx={{ mt: 3 }}>
          <InputLabel htmlFor="location">Search For Location</InputLabel>
          <OutlinedInput
            // value={searchInput}
            onChange={(e: any) => handleChange(e)}
            startAdornment={
              <InputAdornment position="start">
                <IconButton edge="start">
                  <LocationOnIcon />
                </IconButton>
              </InputAdornment>
            }
            style={{
              backgroundColor: "#101c43",
            }}
            inputProps={{
              autoComplete: "location",
              form: {
                autocomplete: "off",
              },
            }}
            label="Search For Location"
          />
        </FormControl>
        <FormControl fullWidth>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Search
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};
