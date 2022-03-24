import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { CurrentDataBox } from "./SupportingComponents";

export const SearchResult = (props: any) => {
  return (
    <Box >
      <Typography
        component="h1"
        variant="h5"
        textAlign="center"
        marginBottom={2}
      >
        {props.searchResult.name}, {props.searchResult.country}
      </Typography>
      <Grid container spacing={2}>
        <CurrentDataBox
          label="Temperature"
          value={props.searchResult.data.main.temp}
          degrees={true}
        ></CurrentDataBox>
        <CurrentDataBox
          label="Feels like"
          value={props.searchResult.data.main.feels_like}
          degrees={true}
        ></CurrentDataBox>
        <CurrentDataBox
          label="Sea Level"
          value={props.searchResult.data.main.sea_level}
        ></CurrentDataBox>
        <CurrentDataBox
          label="Wind"
          value={props.searchResult.data.wind.speed + " Kt."}
        ></CurrentDataBox>
        <CurrentDataBox
          label="Humidity"
          value={props.searchResult.data.main.humidity + " %"}
        ></CurrentDataBox>
        <CurrentDataBox
          label="Visibility"
          value={props.searchResult.data.visibility + " M"}
        ></CurrentDataBox>
      </Grid>
    </Box>
  );
};
