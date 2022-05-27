import React from 'react'
import { Box } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material'
import theme from '../../themes'
import defaultBg from '../../assets/images/background-default.jpg'

const defaultTheme = createTheme(theme)
console.log('***', defaultBg)
const Layout = ({ children, bgImage }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ minHeight: '100vh', backgroundImage: `url(${bgImage ? bgImage : defaultBg})`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
                { children }

            </Box>
        </ThemeProvider>
    )
}

export { Layout }