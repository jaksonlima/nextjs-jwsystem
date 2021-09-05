import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core"
import {
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  Inbox as InboxIcon,
  Mail as MailIcon
} from '@material-ui/icons'

interface NavBarProps {
  handleDrawerClose: () => void
}

function NavBar({ handleDrawerClose }: NavBarProps) {
  const classes = {}
  const theme = {}
  return (
    <>
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default NavBar