import { Grid, TextField } from "@material-ui/core";

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item >
        <TextField id="standard-basic" label="Nome" color="secondary" />
      </Grid>
      <Grid item>
        <TextField id="standard-basic" label="Sobrenome" color="secondary" />
      </Grid>
    </Grid>
  )
}
