import Head from 'next/head'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { Button, Divider, Grid, InputAdornment, TextField, Typography } from '@material-ui/core';
import { Email, Https } from '@material-ui/icons';
import styled from 'styled-components';

function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch());

  return (
    <GridLogin container justifyContent="center" alignItems="center" spacing={10} direction="column">
      <Head>
        <title>Login</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Grid item>
        <TypographyToolbarHeader variant="h5">JWSystem</TypographyToolbarHeader>
      </Grid>
      <GridItem item>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextFieldLogin
            error
            variant="outlined"
            label="Email"
            color="secondary"
            helperText="Incorrect entry."
            {...register("email")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
          <TextFieldLogin
            // error
            variant="outlined"
            label="Senha"
            color="secondary"
            // helperText="Incorrect entry."
            {...register("password")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Https />
                </InputAdornment>
              ),
            }}
          />
          <Link href="/" >
            <ALogin>Esqueci minha senha</ALogin>
          </Link>
          <ButtonLogin type="submit" variant="contained" size="large">
            entrar
          </ButtonLogin>
        </Form>
        <Cadastro>Não tem uma conta?&nbsp;
          <Link href="/" >
            <ALogin>Registre-se</ALogin>
          </Link>
        </Cadastro>
        <Divider />
      </GridItem>
    </GridLogin>
  );
}

export const GridLogin = styled(Grid)`
  min-height: 100vh;
  margin: 0 !important;
  background: url('https://source.unsplash.com/random') no-repeat;
`
export const GridItem = styled(Grid)`
  width: 100%;
  max-width: 480px;
  background-color: #202024;
  border-radius: 8px;
  padding: 64px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  `

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const TextFieldLogin = styled(TextField)`
  margin-bottom: 16px !important;

  svg {
    color: #938ea088 !important;
  }
`

export const ButtonLogin = styled(Button)`
  height: 50px;
  font-weight: bold !important;
  font-size: 16px !important;
  color: white !important;
  background-color: #2697ed !important;
  text-transform: uppercase !important;
`

export const H1Login = styled.h1`
  font-size: 54px !important;
  line-height: 64px !important;
`

export const ALogin = styled.a`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  opacity: 0.6;
  transition: opacity 0.2s ease 0s;

  &:hover {
    opacity: 1;
  } 
`
export const Cadastro = styled.div`
  font-size: 14px;
  margin: 24px 0 24px 0;
  text-align: center;
`

export const TypographyToolbarHeader = styled(Typography)`
  font-family: fantasy !important;
  font-size: 54px !important;
  line-height: 64px !important;
`

export default Login