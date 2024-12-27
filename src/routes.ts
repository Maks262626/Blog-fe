import HomeIcon from '@mui/icons-material/Home';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import { SvgIconProps } from '@mui/material';

export const routes = {
  PUBLIC: {
    HOME: '/',
    FEED: '/feed',
    FAVOURITES: '/favourites',
    SETTINGS: '/settings',
    ARTICLES: '/article'
  },
  PRIVATE: {},
  API: {},
}

interface SidebarLink {
  icon: React.ElementType<SvgIconProps>;
  route: string;
  label: string;
}

export const sidebarLinks: SidebarLink[] = [
  {
    icon: HomeIcon,
    label: 'Home',
    route: routes.PUBLIC.HOME
  },
  {
    icon: DynamicFeedIcon,
    label: 'feed',
    route: routes.PUBLIC.FEED
  },
  {
    icon: FavoriteBorderIcon,
    label: 'favourites',
    route: routes.PUBLIC.FAVOURITES
  },
  {
    icon: SettingsIcon,
    label: 'settings',
    route: routes.PUBLIC.SETTINGS
  }
]