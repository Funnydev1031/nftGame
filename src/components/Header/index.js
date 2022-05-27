import React, { useState } from 'react'
import { Box, Button, Container, IconButton, useTheme } from '@mui/material'
import { Menu, Close } from "@mui/icons-material";
import { NavItem } from './component/NavItem'

import logo from '../../assets/images/logo.svg'

const links = [
    {
        href: '/',
        text: 'HOME'
    },
    {
        href: '/about',
        text: 'ABOUT'
    },
    {
        href: '/games',
        text: 'GAMES'
    },
    {
        href: '/nodes',
        text: 'NODES'
    },
    {
        href: '/careers',
        text: 'CAREERS'
    },
    {
        href: '/join-discord',
        text: 'JOIN DISCORD'
    },
]

const Header = () => {
    const theme = useTheme()
    const [open, setOpen] = useState(false)

    return (
        <Box sx={{ position: 'fixed', top: {xs: 30, md: 56}, width: '100%' }}>
            <Container maxWidth="xl">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 41 }}>
                    <Box>
                        <Box component="img" src={logo} sx={{ maxWidth: { xs: 200, lg: 230 } }} />
                    </Box>
                    <Box sx={{ maxWidth: {md: 476, lg: 600}, display: { xs: 'none', lg: 'flex'}, justifyContent: 'space-between', px: 3, alignItems: 'center', width: '100%' }}>
                        {
                            links.map(( link, index ) => ( <NavItem href={link.href} text={link.text} key={index} /> ))
                        }
                    </Box>
                    <Box sx={{ display: { xs: 'none', lg: 'flex'},alignItems: 'center', justifyContent: 'space-between' }}>
                        <Button variant='outlined' href="/login" sx={{ m:1,backgroundColor: theme.palette.background.default, color: 'common.white', p: theme.spacing(1.5, 3), maxHeight: 41, fontSize: 16, lineHeight: '19.2px' }}>LOG IN</Button>
                        <Button  variant='contained' href="/signup" sx={{m:1, backgroundColor: theme.palette.secondary.main, color: 'common.white', p: theme.spacing(1.5, 3), maxHeight: 41, fontSize: 16, lineHeight: '19.2px' }}>SGIN UP</Button>
                    </Box>
                    <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
                        <IconButton onClick={() => setOpen(!open)}>
                            {
                                open ? <Menu color="light" /> : <Close color="light" />
                            }
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export { Header }