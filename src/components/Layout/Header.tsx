import { Badge, Grid, IconButton, Tooltip } from "@material-ui/core";
import { BrightnessLowOutlined, Brightness4Outlined, NotificationsNoneOutlined } from '@material-ui/icons/';

import useThemeContext from "../../data/hooks/useThemeContext";
import { Theme } from "../../data/context/ThemeContext";
import { GridContainer, Typography_ as Typography } from "./styles";

function ToolbarHeader() {
  const { type, onChangeTheme } = useThemeContext()

  function handleThemeIcon() {
    return type === Theme.DARK ?
      handleTooltip(<BrightnessLowOutlined fontSize="medium" />, 'Claro') :
      handleTooltip(<Brightness4Outlined fontSize="medium" />, 'Escuro')
  }

  function handleTooltip(jsx, title: string) {
    return (
      <Tooltip title={title} arrow placement="bottom">
        <IconButton aria-label="Alterar Tema" onClick={onChangeTheme}>
          {jsx}
        </IconButton>
      </Tooltip>
    )
  }

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h5">JWSystem</Typography>
      </Grid>
      <GridContainer item >
        <Grid item>
          <Tooltip title="Notificações" arrow placement="bottom">
            <IconButton>
              <Badge
                color="error"
                badgeContent={1}
                variant="dot"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}>
                <NotificationsNoneOutlined />
              </Badge>
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          {handleThemeIcon()}
        </Grid>
      </GridContainer>
    </Grid >
  )
}




export default ToolbarHeader;