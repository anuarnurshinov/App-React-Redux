import * as React from 'react';
import { styled, useTheme } from '@mui/material';
import { Box, List, CssBaseline, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'

import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
import FeedIcon from '@mui/icons-material/Feed';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import { NavLink } from 'react-router-dom';
import Classes from './Menu.module.css'
import HeaderContainer from './Header/HeaderContainer';

const drawerWidth = 240;

const isActive = (navData) => navData.isActive ? Classes.active : ''

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Menu() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <HeaderContainer
                    open={open}
                    handleDrawerOpen={handleDrawerOpen} />
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <HideBtn theme={theme} handleDrawerClose={handleDrawerClose} />
                <Divider />
                <MenuItems open={open} />
                <Divider />
            </Drawer>
        </Box>
    );
}



const MenuItems = (props) => {
    return (
        <List>
            {[['Профиль', `/profile`], ['Сообщения', '/dialogs'], ['Пользователи', '/users'],].map((text, index) => (
                <ListItem className={Classes.item} key={text} disablePadding sx={{ display: 'block' }}>
                    <NavLink className={isActive} to={`${text[1]}`}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: props.open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props.open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {index === 0 && <AccountCircleIcon />}
                                {index === 1 && <ForumIcon />}
                                {index === 2 && <FeedIcon />}
                                {index === 3 && <MusicNoteIcon />}
                                {index === 4 && <SettingsIcon />}
                                {index === 5 && <GroupIcon />}

                            </ListItemIcon>
                            <ListItemText primary={text[0]} sx={{ opacity: props.open ? 1 : 0 }} />
                        </ListItemButton>
                    </NavLink>

                </ListItem>
            ))}
        </List>
    )
}

const HideBtn = (props) => {
    return (
        <DrawerHeader>
            <IconButton onClick={props.handleDrawerClose}>
                {props.theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </DrawerHeader>
    )
}