import styled, { css } from "styled-components";
import { createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";

export const useStyles = (drawerWidth: number = 240) => {
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    }),
  );

  return styles();
}


interface GridProps {
  height?: string
  flexgrow?: number
  flexwrap?: string
  cursor?: string
}

export const Grid_ = styled(Grid) <GridProps>`
  ${({ height }) => height && css`
    height: ${height} !important;
  `}

  ${({ flexgrow }) => flexgrow && css`
    flex-grow: ${flexgrow} !important;
  `}

  ${({ flexwrap }) => flexwrap && css`
    flex-wrap: ${flexwrap} !important;
  `}

  ${({ cursor }) => cursor && css`
    cursor: ${cursor} !important;
  `}
`

export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const GridContainer = styled(Grid)`
  display: flex;
  align-items: center;
`
export const Typography_ = styled(Typography)`
  font-family: fantasy !important;
`
