import { Grid, Typography } from '@mui/material';
import Layout from '../../components/EnglishLayout';
import useStyles from '../../utils/styles';
import Image from 'next/image';

export default function WeAre() {
  const classes = useStyles();
  return (
    <Layout>
      <Grid sx={{ flexGrow: 1 }} container spacing={12}>
        <Grid item xs={6}>
          <Typography
            component="h1"
            align="center"
            className={classes.weAreTitle}
          >
            What are we?
          </Typography>
          <Typography paragraph align="center">
            Decor is a brand new decoration store wanting to bring more color,
            shine and luxury for your daily life. Our goal is to innovate more
            the furniture market, bringing creative ways to decorate your home.
          </Typography>
        </Grid>
        <Grid className={classes.elencoImage} item xs={6}>
          <Typography
            component="h1"
            align="center"
            className={classes.weAreTitle2}
          >
            Team
          </Typography>
          <Image
            className={classes.elencoImage}
            src="https://res.cloudinary.com/decor/image/upload/v1638860901/quem_somos_o5ozjy.jpg"
            height="200"
            width="200"
            align="center"
            alt=""
          ></Image>

          <Typography className={classes.elencoText} paragraph>
            <br></br>Rodrigo de Andrade Rodrigues, 16 years old. <br></br>
            Full Stack
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
