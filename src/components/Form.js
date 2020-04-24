import React, { Fragment, useState, useEffect } from "react";
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

  const [exercise, setExercise] = useState({
    name: "",
    url: "",
    description: "",
    duration: "",
  });

  //   useEffect(() => {

  //   }, []);

  const { name, url, description, duration } = exercise;

  const onChange = (e) =>
    setExercise({ ...exercise, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(exercise);

    setExercise({
      name: "",
      url: "",
      description: "",
      duration: "",
    });
  };

  return (
    <Fragment>
      <Card>
        <CardActionArea style={{ margin: ".5em" }}>
          <Grid container justify="center">
            <Typography
              style={{ fontWeight: "bold", color: "#355B8C" }}
              variant="h4"
            >
              Add Exercise
            </Typography>
          </Grid>

          <form className={classes.root} onSubmit={onSubmit}>
            <TextField
              itemType="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
            />
            <TextField
              itemType="url"
              placeholder="Url"
              name="url"
              value={url}
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
              placeholder="Duration"
              name="duration"
              value={duration}
              onChange={onChange}
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
