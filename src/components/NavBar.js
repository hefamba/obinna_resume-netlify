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
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const pages = ['Education', 'Experience', 'Interest'];


const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const theme = createTheme({

        palette: {
            primary: {
                main: '#424242',
            },

        },

    });

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Link to='/' style={{ textDecoration: "none", color: "white" }}><Avatar variant='square' alt="Example Alt" src="https://cdn-icons-png.flaticon.com/512/48/48853.png" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} /></Link>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link style={{ textDecoration: "none", color: "black" }} to={`/${page}`}>
                                                {page}
                                            </Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <Link to='/' style={{ textDecoration: "none", color: "white" }}>Obinna Iloani Resume</Link>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Link style={{ textDecoration: "none", color: "white" }} to={`/${page}`}>
                                        {page}
                                    </Link>
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt="Example Alt" src="https://media-exp1.licdn.com/dms/image/C5103AQHfI9fXpZiLWQ/profile-displayphoto-shrink_800_800/0/1516879815360?e=2147483647&v=beta&t=apjg1-4YX31KEr8nRjUdJrH7nzw01jX_nWUPunLGNa4" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }} />
                            </Stack>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>

    );
};
export default ResponsiveAppBar;

