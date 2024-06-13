import { Box, Typography } from '@mui/material'


function Footer() {
  return (
    <>
      <Box sx={{textAlign:'center', backgroundColor:'black', color:'orange', p:3}}>
        <Typography variant='h5' sx={{"@media(min-width:600px)":{fontSize:'1rem'}}}>
            All Right Reserved &copy; Ankit
        </Typography>
      </Box>
    </>
  )
}

export default Footer
