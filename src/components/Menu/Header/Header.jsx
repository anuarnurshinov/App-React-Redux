import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Classes from './Header.module.css'


const settings = ['Профиль', 'Настройки', 'Выйти'];


const Header = (props) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    let navigate = useNavigate();


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }
    const redirect = (menuItem) => {
        switch (menuItem) {
            case 'Профиль':
                navigate('/profile')
                break
            case 'Настройки':
                navigate('/settings')
                break
            case 'Выйти':
                props.deleteAuthorizedThunkCreator()
                break;
            case 'Войти':
                navigate('/login')
                break
            default:
                break;
        }
    }

    return (
        <AppBar position="static">
            <Container maxWidth="x2">
                <Toolbar disableGutters>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(props.open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={[{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }, {
                            '&:hover': {
                                color: 'white',
                                fontWeight: 100,
                            },
                        }]}
                    ><Diversity1Icon sx={[{ marginTop: 0.2, display: { xs: 'none', md: 'flex' }, mr: 1 },]} />
                        Logo
                    </Typography>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={[{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }, {
                            '&:hover': {
                                color: 'white',
                                fontWeight: 100,
                            },
                        }]}
                    ><Diversity1Icon sx={{ marginTop: 0.5, display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        Logo
                    </Typography>

                    {props.isAuth ? <UserIcon
                        smallUserPhoto={props.smallUserPhoto}
                        handleOpenUserMenu={handleOpenUserMenu}
                        anchorElUser={anchorElUser}
                        handleCloseUserMenu={handleCloseUserMenu}
                        redirect={redirect} />
                        :
                        <Button
                            onClick={() => { redirect('Войти') }}
                            variant="contained"
                            sx={{ flexGrow: 0, position: 'absolute', right: 0 }}>
                            Войти
                        </Button>}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;


export const UserIcon = (props) => {
    return (
        <Box sx={{ flexGrow: 0, position: 'absolute', right: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={props.handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={props.smallUserPhoto} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={props.anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(props.anchorElUser)}
                onClose={props.handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={() => { props.redirect(setting) }}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}


