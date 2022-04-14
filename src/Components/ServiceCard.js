import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import frontEnd from "../Assets/img/front-end.jpg";
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: 300,
    width: "100%"
  },
  actionArea: {
    minHeight: 300
  }
});


function ServiceCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardHeader
            avatar={
              <Avatar aria-label="front-end-service" alt="computer" src={frontEnd} />
            }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Front end services
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ServiceCard;