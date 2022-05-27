import { Box } from '@mui/system'
import { Typography, useTheme } from '@mui/material';
import  loginImage  from '../../assets/images/login.png'
const LoginEdit = () =>{
    const theme = useTheme()
    return(
        <Box sx={{display:'flex', flexDirection:'column',
            backgroundColor:'#0A1544', maxHeight: 702, width:'50%'}}>
            <Typography sx={{ m:1,backgroundColor: theme.typography.login, color: 'common.white' }}>LOG IN</Typography>
        </Box>
    )
}

const LoginWrapper = () =>{
    return(
        <Box  sx={{ px: 3 , display:'flex', alignItems:'center', 
        justifyContent:'center', height:'100vh'}}>
            <Box sx={{display:'flex', flexDirection:'row', width:'30%'}}>
                <Box sx={{ maxWidth: 1010, maxHeight: 400, height: '400px', width:'50%' }} >
                    <img src={loginImage} height='100%' width='100%'/>
                </Box>
                <LoginEdit/>
            </Box>            
        </Box>
    )    
}

export { LoginWrapper } 