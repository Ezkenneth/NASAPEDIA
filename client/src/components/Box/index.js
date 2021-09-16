import React from "react";
import useStyles from "../Styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function Box(props) {
  const classes = useStyles();

  return (
    <Link to={props.id ? `/search?${props.id}` : "/menu"}>
      <Card className={classes.menuCard} alignItems="center">
        
          <CardMedia
            className={classes.menuMedia}
            image={props.image ? props.image : null}
            title="Searched Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="left">
              {props.title}
            </Typography>
           
          </CardContent>
       
      </Card>
    </Link>
  );
}
export default Box;
