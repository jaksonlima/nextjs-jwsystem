import { useState } from 'react';
import { useForm } from "react-hook-form";
import Head from 'next/head'
import Image from 'next/image'
import { Button, Divider, Grid, IconButton, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff, Email, Delete, Height } from '@material-ui/icons';
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
    <Container>
      <GridImage container xs={5} direction="column" justifyContent="space-between">
        <Grid style={{ marginBottom: '25px' }}>
          <Image src="/image/jws-white-198-344.png" width={158} height={294} />
        </Grid>
        <Grid>
          <TypographyPrimary variant="h2" >
            Faça seu login na plataforma.
          </TypographyPrimary>
          <TypographySecundary variant="h6" >
            Inovação tecnológica.
          </TypographySecundary>
        </Grid>
        <Grid>
          <TypographyThird variant="body1"  >
            Use a plataforma 30 dias gratuitamente.
          </TypographyThird>
        </Grid>
      </GridImage>
      <Grid container item xs={7} justifyContent="center" direction="column" alignItems="center">
        <Grid style={{ marginBottom: '25px' }}>
          <Image src="/image/jws-112-175.png" width={62} height={105} />
        </Grid>
        <TypographyTitle variant="h5" >
          Conecte-se.
        </TypographyTitle>
        <GridItem>
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
        </GridItem>
        <GridItem>
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
          <TypographyRecoverPass variant="body1" >
            Esqueceu sua senha?
          </TypographyRecoverPass>
        </GridItem>
        <GridItem>
          <Divider style={{ margin: '35px' }} />
        </GridItem>
      </Grid>
    </Container >
  )
}


export const Container = styled.div`
  height: 100vh;
  display: flex;
  box-sizing: border-box;
`

export const GridImage = styled(Grid)`
  padding: 4% 4%;
  
  background-image: url('https://source.unsplash.com/random/?nature&ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #111111;
`

export const GridItem = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 5px;
  padding: 5px;
`

export const TypographyPrimary = styled(Typography)`
  color: #fcfcfd !important;
  font-weight: 700 !important;
  line-height: 1 !important;
  margin-bottom: 21px !important;
`

export const TypographySecundary = styled(Typography)`
  color: #fcfcfd !important;
  font-weight: 400 !important;
  line-height: 1.35 !important;
`

export const TypographyThird = styled(Typography)`
  color: #fcfcfd !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  line-height: 1.6 !important;
  margin: 16px 0 !important;
`

export const TypographyTitle = styled(Typography)`
  font-size: 28px !important;
  font-weight: bold !important;
  margin-bottom: 8px !important;
  color: '#131316';
`

export const TypographyRecoverPass = styled(Typography)`
 color: '#131316' !important;
 text-align: end !important;
 margin-top: 15px !important;
 cursor: pointer;

 transition: color 0.2s ease-in-out;

 &:hover {
  color: #c2e59c;
 }
`

export default Login