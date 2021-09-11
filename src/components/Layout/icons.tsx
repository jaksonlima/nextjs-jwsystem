import {
  ExitToAppOutlined,
  DateRangeOutlined,
  LayersOutlined,
  HowToVoteOutlined,
  StorefrontOutlined,
  EventAvailableOutlined,
  HomeOutlined,
  HowToRegOutlined,
  GroupAddOutlined,
  Home,
  DateRange,
  EventAvailable,
  GroupAdd,
  HowToReg,
  Layers,
  HowToVote,
  Storefront,
  ExitToApp
} from '@material-ui/icons'

export interface IconsProps {
  name: string
  go: string
  order: number
  icon: any
  iconNavegation: (props: any) => any
}

export const iconsHeader: IconsProps[] = [
  {
    name: 'Início',
    go: '/',
    order: 1,
    icon: <HomeOutlined color="secondary" />,
    iconNavegation: (props: any) => <Home {...props} />
  },
  {
    name: 'Agendas',
    go: '/agenda',
    order: 2,
    icon: <DateRangeOutlined color="secondary" />,
    iconNavegation: (props: any) => <DateRange {...props} />
  },
  {
    name: 'Vendas',
    go: '/venda',
    order: 3,
    icon: <EventAvailableOutlined color="secondary" />,
    iconNavegation: (props: any) => <EventAvailable {...props} />
  },
  {
    name: 'Clientes',
    go: '/cliente',
    order: 4,
    icon: <GroupAddOutlined color="secondary" />,
    iconNavegation: (props: any) => <GroupAdd {...props} />
  },
  {
    name: 'Profissionais ',
    go: '/profissional',
    order: 5,
    icon: <HowToRegOutlined color="secondary" />,
    iconNavegation: (props: any) => <HowToReg {...props} />
  },
  {
    name: 'Produtos',
    go: '/produto',
    order: 6,
    icon: <LayersOutlined color="secondary" />,
    iconNavegation: (props: any) => <Layers {...props} />
  },
  {
    name: 'Serviços',
    go: '/servico',
    order: 7,
    icon: <HowToVoteOutlined color="secondary" />,
    iconNavegation: (props: any) => <HowToVote {...props} />
  },
  {
    name: 'Estoques',
    go: '/estoque',
    order: 8,
    icon: <StorefrontOutlined color="secondary" />,
    iconNavegation: (props: any) => <Storefront {...props} />
  },
]

export const iconsFooter: IconsProps[] = [
  {
    name: 'Sair',
    go: '/login',
    order: 2,
    icon: <ExitToAppOutlined color='error' />,
    iconNavegation: (props: any) => <ExitToApp {...props} />
  }
]
