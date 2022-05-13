import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: 300,
    width: "100%",
    boxShadow: "unset !important",
    background: "unset",
    transition: "transform .5s ease !important",
    transformStyle: "preserve-3d",
    "&:hover": {
      backgroundColor: 'transparent',
      transform: "scale(1.1)",
    }
  },
  actionArea: {
    minHeight: 300,
    "&:hover": {
      backgroundColor: 'transparent',
    }
  },
  imageContainer: {
    height: 220,
    borderRadius: 10,
    backgroundImage: ({avatar}) => (`url(${avatar})`),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  headerContainer: {
    height: 80,
    color: "rgb(3, 3, 3)",
    fontWeight: 400
  }
});


function ServiceCard({
  service,
  avatar
}) {
  const classes = useStyles({avatar});

  return (
    <Grid className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <Grid container justifyContent="center" className={classes.imageContainer}>
        </Grid>
        <CardContent className={classes.headerContainer}>
          <Typography gutterBottom variant="h5" component="div">
            {service}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Grid>
  );
}

export default ServiceCard;