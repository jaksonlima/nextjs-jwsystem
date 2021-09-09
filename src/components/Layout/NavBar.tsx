import Link from 'next/link'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import { iconsHeader, iconsFooter, IconsProps } from './icons'
import { Grid_ as Grid } from './styles';

function NavBar() {
  function handleItensNavBar(icons: IconsProps[]) {
    return (
      <List>
        {icons
          .sort((item1, item2) => item1.order - item2.order)
          .map((item) => (
            <Link href={item.go} passHref key={item.go}>
              <ListItem button key={item.name}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
      </List>
    )
  }

  return (
    <Grid container direction="column" height="100%" flexwrap="nowrap">
      <Grid item flexgrow={1}>
        {handleItensNavBar(iconsHeader)}
      </Grid>
      <Grid item>
        {handleItensNavBar(iconsFooter)}
      </Grid>
    </Grid>
  )
}

export default NavBar