import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { capitalizeFirstLetter } from "../util/service";
import { DegreeCentigrate, WeatherIcon } from "./SupportingComponents";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  backgroundColor: "#101c43",
  color: "white",
}));

export const ForecastResult = (props: any) => {
  return (
    <Box>
      <Typography
        component="h1"
        variant="h5"
        textAlign="center"
        marginTop={4}
        marginBottom={2}
      >
        Next 5 days Forecast
      </Typography>
      {props.forecastData.map((data: any, index: any) => (
        <Grid container spacing={2} p={1} key={index}>
          <Grid item xs={12}>
            <Item>
              <Grid container key={index} alignItems="center">
                <WeatherIcon icon={data.weather[0]?.icon}></WeatherIcon>
                <Grid item xs={8}>
                  <Typography component="h6" variant="h6">
                    {capitalizeFirstLetter(data.weather[0].description)}
                  </Typography>
                  {new Date(data.dt * 1000).toString().substr(0, 15)}
                </Grid>
                <Grid item xs={2}>
                  <Typography component="h6" variant="h6">
                    {data.main.temp}
                    <DegreeCentigrate></DegreeCentigrate>
                  </Typography>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};
