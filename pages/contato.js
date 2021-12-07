import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import Layout from '../components/Layout';
import { getError } from '../utils/error';
import useStyles from '../utils/styles';
import { useSnackbar } from 'notistack';
import { Controller, useForm } from 'react-hook-form';

export default function Contact() {
  const {
    control,
    formState: { errors },
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  async function submitHandler(e) {
    e.preventDefault();
    closeSnackbar();
    try {
      const formData = {};
      Array.from(e.currentTarget.elements).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });
      fetch('/api/mail', {
        method: 'post',
        body: JSON.stringify(formData),
      });
      console.log(formData);
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  }

  const classes = useStyles();

  return (
    <Layout title="Contato">
      <form onSubmit={submitHandler} className={classes.form}>
        <Typography
          className={classes.loginTitle}
          align="center"
          component="h1"
        >
          Contato
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="fullName"
              control={control}
              defaultVale=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="fullName"
                  label="Nome completo"
                  error={Boolean(errors.fullName)}
                  helperText={
                    errors.fullName
                      ? errors.fullName.type === 'minLength'
                        ? 'O nome completo precisa ter no mínimo duas caracteres'
                        : 'Insira o seu nome completo'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  inputProps={{ type: 'email' }}
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email
                      ? errors.email.type === 'pattern'
                        ? 'O email não é válido'
                        : 'Insira seu email'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="message"
              control={control}
              defaultVale=""
              rules={{
                required: true,
                minLength: 8,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={6}
                  id="message"
                  label="Mensagem"
                  error={Boolean(errors.message)}
                  helperText={
                    errors.message
                      ? errors.message.type === 'minLength'
                        ? 'A mensagem precisa ter no mínimo oito caracteres'
                        : 'Insira a mensagem'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button
              className={classes.ctaProduct}
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
            >
              Enviar
            </Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
