import Link from 'next/link'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'

import { iconsHeader, iconsFooter, IconsProps } from './LayoutIcons'
import { Box, maxWidth } from '@mui/system'

function LayoutNavBar() {
  function handleItensNavBar(icons: IconsProps[]) {
    return (
      <List
        sx={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
        {icons
          .sort((item1, item2) => item1.order - item2.order)
          .map((item) => (
            <Link href={item.go} passHref key={item.go}>
              <ListItem
                button
                key={item.name}
                sx={{
                  ml: '1px',
                  mb: 1,
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '2px',
                  borderLeftColor: 'info.main',
                  borderBottomLeftRadius: '2px',
                  borderTopLeftRadius: '2px',
                  flex: 1
                }}
              >
                <ListItemIcon
                >
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
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap'
      }}
    >
      <Box
        sx={{
          flexGrow: 1
        }}
      >
        {handleItensNavBar(iconsHeader)}
      </Box>
      <Box>
        {handleItensNavBar(iconsFooter)}
      </Box>
    </Box>
  )
}

export default LayoutNavBar