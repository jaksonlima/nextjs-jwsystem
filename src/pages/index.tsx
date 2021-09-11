import { Grid, TextField } from "@material-ui/core";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState('')

  console.log('#### RENDER #### ')
  return (
    <Grid container spacing={2}>
      <Grid item >
        <TextField id="standard-basic" label="Nome" color="secondary"
          value={value}
          onChange={env => setValue(env.target.value)} />
      </Grid>
      <Grid item>
        <TextField id="standard-basic" label="Sobrenome" color="secondary" />
      </Grid>
    </Grid>
  )
}
