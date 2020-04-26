import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Form = () => {
  const classes = useStyles();
  // const theme = useTheme();

  const [chart, setChart] = useState({
    title: "",
    description: "",
  });
  const [variables, setVariables] = useState({
    labels: [],
    colors: [],
    numbers: [],
  });

  const { title, description } = chart;
  const { labels, colors, numbers } = variables;

  const onChange = (e) =>
    setChart({ ...chart, [e.target.name]: e.target.value });

  const onEnter = (e) =>
    setVariables({ ...variables, [e.target.name]: e.target.value });

  console.log(title);
  console.log(description);
  console.log(labels);
  console.log(colors);
  console.log(numbers);

  return (
    <Fragment>
      <Card>
        <CardActionArea style={{ margin: ".5em" }}>
          <Grid container justify="center">
            <Typography
              style={{ fontWeight: "bold", color: "#355B8C" }}
              variant="h4"
            >
              Add Chart
            </Typography>
          </Grid>

          <form className={classes.root}>
            <TextField
              itemType="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={onChange}
            />

            <TextField
              itemType="text"
              placeholder="Description"
              multiline
              name="description"
              value={description}
              onChange={onChange}
            />
            <TextField
              itemType="text"
              placeholder="Label"
              name="labels"
              value={labels}
              onChange={onEnter}
            />
            <TextField
              itemType="text"
              placeholder="Color"
              name="colors"
              value={colors}
              onChange={onEnter}
            />
            <TextField
              itemType="number"
              placeholder="Number"
              name="numbers"
              value={numbers}
              onChange={onEnter}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </CardActionArea>
      </Card>
    </Fragment>
  );
};

export default Form;
