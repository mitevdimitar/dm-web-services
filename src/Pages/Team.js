import Grid from '@mui/material/Grid';
import aboutUs from "../Assets/img/about-us.jpg";
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { isMobileDevice } from '../Utils/helpers';

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  infoBlock: {
    backgroundColor: "#BDBDBD",
    padding: "10%",
    color: "white"
  },
  imageBlock: {
    backgroundImage: `url(${aboutUs})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  headerContainer: {
    maxHeight: 50
  },
  underline: {
    borderBottom: `2px solid white`,
    marginTop: "0.75em !important",
  },
  header: {
    letterSpacing: "0.1em"
  },
  description: {
    marginTop: "3em !important"
  }
});


function Team() {
    const classes = useStyles();

    return (
        <Grid container id="team" className={classes.root}>
            <Grid container item xs={isMobileDevice() ? 12 : 6} className={classes.infoBlock}>
              <Grid container justifyContent="center" item className={classes.headerContainer}>
                <Grid container item justifyContent="center">
                  <Typography variant="h5" className={classes.header}>
                    OUR TEAM
                  </Typography>
                </Grid>
                <Grid container item justifyContent="center" >
                  <Grid item xs={2} className={classes.underline}>

                  </Grid>
                </Grid>
              </Grid>
              <Grid container item className={classes.description}>
                <Typography>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. 
                  It has roots in a piece of classical Latin literature from 45 BC, 
                  making it over 2000 years old. Richard McClintock, a Latin professor 
                  at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                  Latin words, consectetur, from a Lorem Ipsum passage, and going through 
                  the cites of the word in classical literature, discovered the 
                  undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 
                  1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                  by Cicero, written in 45 BC. This book is a treatise on the theory of 
                  ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                  "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                  The standard chunk of Lorem Ipsum used since the 1500s is 
                  reproduced below for those interested. Sections 1.10.32 and 
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also 
                  reproduced in their exact original form, accompanied by English 
                  versions from the 1914 translation by H. Rackham.
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={isMobileDevice() ? 12 : 6} className={classes.imageBlock}>
            </Grid>
        </Grid>
    )
}

export default Team;