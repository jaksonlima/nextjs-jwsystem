import { useState } from 'react';
import { useForm } from "react-hook-form";
import Image from 'next/image'
import { Button, Divider, Grid, IconButton, Hidden, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff, Email, } from '@material-ui/icons';

import Input from '../components/Input';

import {
  Container,
  GridImage,
  GridImageNext,
  GridItem,
  ImageNext,
  NovaConta,
  TypographyPrimary,
  TypographyRecoverPass,
  TypographySecundary,
  TypographyThird,
  TypographyTitle
} from '../styles/login/styles';
import useThemeContext from '../data/hooks/useThemeContext';
import { Theme } from '../data/context/ThemeContext';

function Login() {
  const { type } = useThemeContext()
  const [visible, setVisible] = useState(false)
  const [typeForm, setTypeForm] = useState<'login' | 'cadastro'>('login')
  const { handleSubmit, watch, control, formState: { errors } } = useForm();

  const onSubmit = data => console.log('Data', data);

  const onChangeVisible = () => {
    setVisible(!visible)
  };

  return (
    <Container>
      <GridImage container item sm md={5} direction="column" justifyContent="space-between">
        <ImageNext >
          <Image src="/image/jws-white-198-344.png" width={158} height={294} />
        </ImageNext>
        <Grid>
          <TypographyPrimary variant="h2" >
            Faça seu login na plataforma.
          </TypographyPrimary>
          <TypographySecundary variant="h6" >
            Inovação, tecnológica.
          </TypographySecundary>
        </Grid>
        <Hidden smDown>
          <Grid>
            <TypographyThird variant="body1" >
              Use a plataforma 30 dias gratuitamente.
            </TypographyThird>
          </Grid>
        </Hidden>
      </GridImage>
      <Grid container item sm justifyContent="center" direction="column" alignItems="center" style={{ margin: '15px' }}>
        <GridImageNext >
          <Image src={`${type === Theme.LIGT ? '/image/jws-112-175.png' : '/image/jws-white-112-175.png'}`} width={62} height={105} />
        </GridImageNext>
        <TypographyTitle variant="h5" >
          Conecte-se
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
          <Button variant="outlined" color="secondary" style={{ width: '82px', height: '37px' }}>
            Entrar
          </Button>
        </GridItem>
        <GridItem>
          <Divider style={{ margin: '35px' }} />
        </GridItem>
        <Button variant="outlined" style={{ color: 'red', borderColor: 'red' }}>
          <Image src="/image/google.svg" width="25" height="25" />
        </Button>
        <NovaConta>
          <p>
            Novo por aqui?
            <a onClick={() => setTypeForm(typeForm === 'login' ? 'cadastro' : 'login')}>
              Criar uma conta gratuitamente
            </a>
          </p>
        </NovaConta>
      </Grid>
    </Container >
  )
}



export default Login