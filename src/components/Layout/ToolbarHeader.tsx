import { Badge, Grid, IconButton, Typography } from "@material-ui/core";
import { BrightnessLowOutlined, Brightness4Outlined, Mail } from '@material-ui/icons/';

import useThemeContext from "../../data/hooks/useThemeContext";
import { Theme } from "../../data/context/ThemeContext";
import { GridContainer, GridTheme } from "./styles";

function ToolbarHeader() {
  const { type, onChangeTheme } = useThemeContext()

  function handleThemeIcon() {
    return type === Theme.DARK ?
      <BrightnessLowOutlined fontSize="medium" /> :
      <Brightness4Outlined fontSize="medium" />
  }

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h5">JWSystem</Typography>
      </Grid>
      <GridContainer item >
        <Grid item>
          <IconButton>
            <Badge badgeContent={14} color="error">
              <Mail />
            </Badge>
          </IconButton>
        </Grid>
        <GridTheme item>
          <IconButton aria-label="Alterar Tema" onClick={onChangeTheme}>
            {handleThemeIcon()}
          </IconButton>
        </GridTheme>
      </GridContainer>
    </Grid >
  )
}




export default ToolbarHeader;