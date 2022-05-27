import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'
console.log(NavLink)
const NavItem = ({ href, text }) => {
    return (
        <NavLink to={href} style={{ textDecoration: 'none' }}>
            {({ isActive }) => <Box component="span" sx={{ color: isActive ? 'secondary.main' : 'common.white', textDecoration: 'none', cursor: 'pointer' }}>{ text }</Box>}
        </NavLink>
    )
}

export { NavItem }