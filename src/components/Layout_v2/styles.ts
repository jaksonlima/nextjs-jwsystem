import { makeStyles, Theme, createStyles } from "@material-ui/core";
import styled from "styled-components";

export const useStyles = (drawerWidth) => {
  const styledDrawer = makeStyles((theme: Theme) =>
    createStyles({
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
      }
    })
  )

  return styledDrawer()
}

export const ContainerArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 8px;
  position: relative;
`

export const Container = styled.div`
  display: flex;
`

export const Main = styled.div`
  flex: 1;
  padding: 24px;
`