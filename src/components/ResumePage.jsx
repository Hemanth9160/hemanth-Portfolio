import React from "react" 
import { Container, Paper, Box, Typography, Divider, Chip, Button, List, ListItem, ListItemText } from "@mui/material" 
import { Link as RouterLink } from "react-router-dom" 

function getExperienceYears() {
  const startDate = new Date("2022-05-03");
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  // Each month is 1/12 (≈0.0833...), so decimal is accurate
  let exp = years + months / 12;
  let floored = Math.floor(exp * 10) / 10; // Always floor to one decimal
  return floored.toFixed(1);
}



export default function ResumePage() {
  
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, bgcolor: "background.paper" }}>
        <Button
          component={RouterLink}
          to="/"
          variant="outlined"
          color="primary"
          sx={{ mb: 3 }}
        >
          ← Back to Portfolio
        </Button>

        <Box textAlign="center" mb={4}>
          <Typography variant="h3" fontWeight="bold">
            Hemanth Thirumuru
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Frontend (React.js) Developer
          </Typography>
          <Typography variant="body1" gutterBottom>
            thirumuruhemanth9160@gmail.com | 9949977510
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Summary
        </Typography>
        <Typography color="text.secondary" paragraph>
          React.js Developer with {getExperienceYears()} years of experience building fast, user-friendly websites. Passionate
          about writing clean code, improving performance, and collaborating with teams to create seamless
          digital experiences. Excited to take on new challenges and build amazing web applications.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Skills */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Skills
        </Typography>
        <Box mb={2}>
          <Chip label="HTML" color="primary" sx={{ mr: 1, mb: 1 }} />
          <Chip label="CSS" color="primary" sx={{ mr: 1, mb: 1 }} />
          <Chip label="JavaScript" color="primary" sx={{ mr: 1, mb: 1 }} />
          <Chip label="JSX" color="primary" sx={{ mr: 1, mb: 1 }} />
          <Chip label="UI/UX Design" color="primary" sx={{ mr: 1, mb: 1 }} />
          <Chip label="Node.js" color="secondary" sx={{ mr: 1, mb: 1 }} />
          <Chip label="BigQuery" color="secondary" sx={{ mr: 1, mb: 1 }} />
          <Chip label="Git" color="default" sx={{ mr: 1, mb: 1 }} />
          <Chip label="GitHub" color="default" sx={{ mr: 1, mb: 1 }} />
          <Chip label="NPM" color="default" sx={{ mr: 1, mb: 1 }} />
          <Chip label="Firestore" color="secondary" sx={{ mr: 1, mb: 1 }} />
          <Chip label="Firebase" color="secondary" sx={{ mr: 1, mb: 1 }} />
          <Chip label="Testing" color="primary" sx={{ mr: 1, mb: 1 }} />
          <Chip label="Debugging" color="primary" sx={{ mr: 1, mb: 1 }} />
          <Chip label="Documentation" color="primary" sx={{ mr: 1, mb: 1 }} />
        </Box>
        <Divider sx={{ my: 3 }} />

        {/* Work Experience */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Work Experience
        </Typography>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Frontend Developer - Tata Consultancy Service Limited
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Feb 2022 - Present
          </Typography>
          <List dense>
            <ListItem><ListItemText primary="Optimised application performance by improving rendering speed, reducing load times, and enhancing overall efficiency." /></ListItem>
            <ListItem><ListItemText primary="Implemented complex feature enhancements, ensuring scalability and seamless user experience." /></ListItem>
            <ListItem><ListItemText primary="Diagnosed and resolved critical bugs, reducing system downtime and improving application stability." /></ListItem>
            <ListItem><ListItemText primary="Enhanced state management and component structure to minimise unnecessary re-renders and improve application efficiency." /></ListItem>
            <ListItem><ListItemText primary="Collaborated with cross-functional teams to troubleshoot and resolve technical issues quickly and effectively." /></ListItem>
            <ListItem><ListItemText primary="Leveraged React best practices to build smooth, high-performance applications with optimised re-renders." /></ListItem>
          </List>
        </Box>
        <Divider sx={{ my: 3 }} />

        {/* Education */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Education
        </Typography>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Btech - Mechanical Engineering
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            June 2016 - May 2020, Sree Vidyanikethan Engineering College (75.68%)
          </Typography>
          <Typography variant="h6" fontWeight="bold" mt={2}>
            Intermediate - MPC
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            June 2014 - May 2016, Krishna Chaitanya Junior college (94%)
          </Typography>
          <Typography variant="h6" fontWeight="bold" mt={2}>
            SSC
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sri sai Vidyanikethan High school (9.5 CGPA)
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}
