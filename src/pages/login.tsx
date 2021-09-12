import Head from 'next/head'
import Image from 'next/image'
import { FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, makeStyles, Theme, createStyles, TextField, FormHelperText } from '@material-ui/core';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { useState } from 'react';
import { AccountCircle, Visibility, VisibilityOff } from '@material-ui/icons';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }),
);

function Login() {
  const classes = useStyles();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch());
  const [values, setValue] = useState({ showPassword: true, password: '' })
  const handleChange = (env) => {
  }
  return (
    <GridContainer container>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Grid item>
        <Image src="/image/jws-162-251.png" width={162} height={251} />
      </Grid>
      <Grid item>
        <form>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              error
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              // onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }

            />
            <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
          </FormControl>

          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="With a grid" helperText="Error" />
            </Grid>
          </Grid>
        </form>
      </Grid>

    </GridContainer>
  );
}

export const GridContainer = styled(Grid)`
  min-height: 100vh;
  background-color: #a4a0c752;
`

export default Login