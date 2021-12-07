import { Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
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
            Quem somos?
          </Typography>
          <Typography paragraph align="center">
            A Decor é uma loja novíssima de decoração querendo trazer mais cor,
            brilho e luxo para o seu cotidiano. Nosso objetivo é inovar mais o
            mercado de mobília, trazendo formas criativas de decorar a sua casa.
          </Typography>
        </Grid>
        <Grid className={classes.elencoImage} item xs={6}>
          <Typography
            component="h1"
            align="center"
            className={classes.weAreTitle2}
          >
            Elenco
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
            <br></br>Rodrigo de Andrade Rodrigues, 16 anos. <br></br>FullStack
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
