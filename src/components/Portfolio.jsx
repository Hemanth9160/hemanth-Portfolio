import React from 'react'
import {
  Box, Typography, Avatar, Button, Grid, Paper,
  IconButton, Link, 
} from '@mui/material'
import {
  GitHub, LinkedIn, Instagram, Email, LocationOn, Description
} from '@mui/icons-material'

export default function Portfolio() {

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Grid width={'100%'}  height={'100%'} container spacing={2}>
        {/* Sidebar */}
        <Grid width={'30%'} height={'100%'} item xs={12} sm={3} mt={4}>
          <Paper elevation={0} sx={{ p: 3, textAlign: 'center', position: 'sticky', top: 20 }}>
            <Avatar
              alt="Profile"
              src="/myphoto.jpg"
              sx={{ width: 100, height: 100, margin: '0 auto' }}
            />
            <Typography variant="h5" sx={{ mt: 2 }}>
              <span style={{ color: 'green', fontStyle: 'italic' }}>Hemanth</span> Thirumuru
            </Typography>
            <Button variant="outlined" fullWidth sx={{ borderRadius: '999px', mt: 2, mb: 2 }}>
              Web Developer
            </Button>
            <Button variant="contained" color="cinherit" sx={{ borderRadius: '999px', mb: 2 }} startIcon={<Description />} fullWidth>
              Download Resume
            </Button>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}>
              <IconButton><GitHub /></IconButton>
              <IconButton><LinkedIn /></IconButton>
              <IconButton><Instagram /></IconButton>
            </Box>

            <Paper variant="outlined" sx={{ p: 2, mt: 2, textAlign: 'left' }}>
              <Typography variant="body2" display="flex" alignItems="center" gutterBottom>
                <LocationOn fontSize="small" sx={{ mr: 1 }} /> Nellore, Andhra Pradesh, India
              </Typography>
              <Typography variant="body2">thirumuruhemanth9160@gmail.com</Typography>
              <Typography variant="body2">9949977510</Typography>
            </Paper>

            <Button variant="contained" color="success" fullWidth sx={{ borderRadius: '999px', mt: 2, mb: 1 }} startIcon={<Email />}>
              Email me
            </Button>
          </Paper>
        </Grid>
        {/* Main Bar */}
        <Grid width={'60%'} height={'100%'} item xs={12} sm={9}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p:1,
                mb: 4, // margin bottom to separate from paragraph
                flexWrap: 'wrap',
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', mt: 4, borderBottom: '3px solid green', width: 'fit-content' }}
              >
                About
              </Typography>

              <Box sx={{ display: 'flex', gap: 7 }}>
                <Link href="#resume" variant="h5" underline="hover" sx={{ mt: 4, fontWeight: 'medium' }}>
                  Resume
                </Link>
                <Link href="#projects"  variant="h5" underline="hover" sx={{ mt: 4, fontWeight: 'medium' }}>
                  Projects
                </Link>
              </Box>
            </Box>
            {/* About Text */}
            <Typography variant="body1" paragraph sx={{ width: { xs: '100%' } } }>
              Interested in Web Technologies and aspiring Web Developer, love to learn new things related to computers and the web world.
            </Typography>

            {/* My Technologies */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
              My Technologies
            </Typography>
                <Paper elevation={3} sx={{ width: '50%',p: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Frontend Development</Typography>
                  <Typography>
                    I can build a beautiful and scalable SPA using <b>HTML, CSS, BootStrap</b> and <b>React.js</b>
                  </Typography>
                </Paper>
                <Paper elevation={3} sx={{ width: '50%',p: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Backend Development</Typography>
                  <Typography>
                    Handle database, server, API using <b>Express, Nest.js</b> & other popular frameworks
                  </Typography>
                </Paper>
                <Paper elevation={3} sx={{ width: '50%',p: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>API Development</Typography>
                  <Typography>
                    I can develop robust REST API using <b>Node API</b> & <b>django-rest-api</b>
                  </Typography>
                </Paper>
                <Paper elevation={3} sx={{ width: '50%',p: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Competitive Coder</Typography>
                  <Typography>
                    Problem solver in <b>HackerRank</b>
                  </Typography>
                </Paper>

        </Grid>
      </Grid>
    </Box >
  )
}
