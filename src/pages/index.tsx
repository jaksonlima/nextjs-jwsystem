import { Button, createStyles, makeStyles, TextField } from "@material-ui/core"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);


export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <h1>Jakson</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" color="secondary" />
        <TextField id="filled-basic" label="Filled" variant="filled" color="secondary" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" color="secondary" />
      </form>
      <Button variant="outlined" >
        Disabled
      </Button>

    </div>
  )
}
