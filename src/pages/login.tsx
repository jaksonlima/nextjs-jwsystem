import { useState } from 'react';
import { useForm } from "react-hook-form";
import Head from 'next/head'
import Image from 'next/image'
import { Button, Divider, Grid, IconButton, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff, Email, Delete } from '@material-ui/icons';
import styled from 'styled-components';

import Input from '../components/Input';

function Login() {
  const [visible, setVisible] = useState(false)
  const { handleSubmit, watch, control, formState: { errors } } = useForm();

  const onSubmit = data => console.log('Data', data);

  const onChangeVisible = () => {
    setVisible(!visible)
  };

  return (
    <GridContainer container justifyContent="center" alignItems="center">
      <Head>
        <title>Login</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <GridImage item>
        <Image src="/image/jws-199-344.png" width={179} height={324} />
        <H1 >
          Faça seu login
          <br />
          na plataforma
        </H1>
      </GridImage>
      <GridItem item>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4} direction="column">
            <Grid item >
              <Input
                name="email"
                placeholder="E-mail"
                color="secondary"
                control={control}
                errors={errors}
                icon={
                  <IconButton>
                    <Email color="action" />
                  </IconButton>
                }
              />
            </Grid>
            <Grid item>
              <Input
                name="password"
                placeholder="Senha"
                color="secondary"
                type={visible ? 'text' : 'password'}
                rules={{ required: 'Senha obrigatória' }}
                control={control}
                errors={errors}
                icon={
                  <IconButton onClick={onChangeVisible} >
                    {visible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
              />
            </Grid>
          </Grid>
          <Button_ type="submit" variant="contained" color="secondary">
            entrar
          </Button_>
        </form>
        <Divider_ />
        <ButtonIcon
          variant="contained"
          color="secondary"
          startIcon={
            <>
              <Image src="/image/google.svg" width="25" height="25" />
            </>
          }
        >
          Continuar com o Google
        </ButtonIcon>

        <P_>Novo por aqui?
          <A_>Criar uma conta gratuitamente</A_>
        </P_>
      </GridItem>
    </GridContainer>
  );
}

export const GridContainer = styled(Grid)`
  min-height: 100vh;
`

export const GridItem = styled(Grid)`
  max-width: 480px;
  width: 100%;  
  padding: 64px;
  margin-left: 45px !important;
  border-radius: 6px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`

export const Button_ = styled(Button)`
  width: 100%;
  height: 50px;
  margin-top: 44px !important;
  text-transform: uppercase;
  font-weight: bold !important;
  font-size: 16px !important;
`

export const Divider_ = styled(Divider)`
  margin-top: 50px !important;
`
export const ButtonIcon = styled(Button)`
  width: 100%;
  height: 50px;
  margin-top: 44px !important;
  font-weight: bold !important;
  font-size: 16px !important;
  background-color: #ef4444 !important;
`

export const A_ = styled.a`
  text-decoration: none;
  color: #3b82f7;
  font-weight: 500;
  cursor: pointer;
  margin: 6px;
`

export const P_ = styled.p`
  margin: 2rem;
  font-weight: 500;
`

export const GridImage = styled(Grid)`
  width: 100%;
  max-width: 480px;
`

export const H1 = styled.h1`
  margin-bottom: 24px;
  font-size: 54px;
  line-height: 64px;
`

export default Login