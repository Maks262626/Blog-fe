import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { SvgIconProps } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export const routes = {
  PUBLIC: {
    HOME: '/',
    FEED: '/feed',
    FAVOURITES: '/favourites',
    SETTINGS: '/settings',
    ARTICLES: '/articles',
    PROFILE: '/profile',
    LOGIN: '/login',
    REGISTER: '/register',
  },
  PRIVATE: {},
  API: {},
};

interface SidebarLink {
  icon: React.ElementType<SvgIconProps>;
  route: string;
  label: string;
}

export const sidebarLinks: SidebarLink[] = [
  {
    icon: HomeIcon,
    label: 'Home',
    route: routes.PUBLIC.HOME,
  },
  {
    icon: ExploreIcon,
    label: 'feed',
    route: routes.PUBLIC.FEED,
  },
  {
    icon: FavoriteBorderIcon,
    label: 'favourites',
    route: routes.PUBLIC.FAVOURITES,
  },
  {
    icon: SettingsIcon,
    label: 'settings',
    route: routes.PUBLIC.SETTINGS,
  },
  {
    icon: PermIdentityIcon,
    label: 'profile',
    route: routes.PUBLIC.PROFILE
  }
];
