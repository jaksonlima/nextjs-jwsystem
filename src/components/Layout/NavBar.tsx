import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import {
  ExitToAppOutlined,
  DateRangeOutlined,
  LayersOutlined,
  BookmarksOutlined,
  HowToVoteOutlined,
  StorefrontOutlined,
  EventAvailableOutlined
} from '@material-ui/icons'

import { Grid_ as Grid } from './styles';

function NavBar() {
  const iconsHeader = [
    {
      name: 'Agendas',
      order: 1,
      icon: <DateRangeOutlined />
    },
    {
      name: 'Vendas',
      order: 2,
      icon: <EventAvailableOutlined />
    },
    {
      name: 'Clientes',
      order: 3,
      icon: <BookmarksOutlined />
    },
    {
      name: 'Produtos',
      order: 4,
      icon: <LayersOutlined />
    },
    {
      name: 'Serviços',
      order: 5,
      icon: <HowToVoteOutlined />
    },
    {
      name: 'Estoque',
      order: 6,
      icon: <StorefrontOutlined />
    }
  ]

  const iconsFooter = [
    {
      name: 'Sair',
      order: 2,
      icon: <ExitToAppOutlined color='error' />
    }
  ]

  function handleItensNavBar(icons) {
    return (
      <List>
        {icons
          .sort((item1, item2) => item1.order - item2.order)
          .map(item => (
            <ListItem button key={item.name}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
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