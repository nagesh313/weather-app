import { Grid, Typography } from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
export const DegreeCentigrate = () => {
  return (
    <>
      <sup style={{ fontSize: "14px" }}> O</sup>C
    </>
  );
};

export const WeatherIcon = (props: any) => {
  return (
    <Grid item xs={2} textAlign="left">
      <img
        alt="weather-icon"
        src={" http://openweathermap.org/img/wn/" + props.icon + ".png"}
      />
    </Grid>
  );
};

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  backgroundColor: "#101c43",
  color: "white",
}));

export const CurrentDataBox = (props: any) => {
  return (
    <Grid item xs={4}>
      <Item>
        <Typography component="h1" variant="h5" textAlign="center" m={1}>
          {props.value}
          {props.degrees && <DegreeCentigrate></DegreeCentigrate>}
        </Typography>
        {props.label}
      </Item>
    </Grid>
  );
};

