import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Avatar,
  IconButton,
  Button,
  Link,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  LinearProgress,
  Snackbar,
  Alert,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Fab,
  Stack,
  Paper,
  Divider,
} from "@mui/material"
import {
  GitHub,
  LinkedIn,
  Email,
  KeyboardArrowUp,
  Brightness4,
  Brightness7,
  LocationOn
} from "@mui/icons-material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import ScrollTop from "./ScrollTop"
import { useTypingEffect } from "./TypingEffect"
import { Link as RouterLink } from "react-router-dom"
import profilePic from "./images/profile.JPG"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const projects = [
    {
      title: "PortFolio",
      description:
        "This application is a portfolio website for my personal projects",
      techStack: ["React", "Material-UI"],
      github: "#",
      demo: "#",
    },
    {
      title: "Fitness Tracker App",
      description:
        "Mobile-friendly fitness tracking web app with charts and user analytics.",
      techStack: ["React", "Chart.js", "Express", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Cryptocurrency Portfolio",
      description:
        "Track and analyze cryptocurrency investments with real-time price updates.",
      techStack: ["React", "Redux", "CoinGecko API", "TailwindCSS"],
      github: "#",
      demo: "#",
    },
  ]

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tata Consultancy Solutions",
      period: "Feb 2022 - Present",
      description:
        "Leading UI development for web apps using React and Material-UI, improving user experience significantly.",
    },
  ]

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Material-UI", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Git & GitHub", level: 85 },
  ]

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: darkMode ? "#90caf9" : "#1976d2" },
          background: {
            default: darkMode ? "#121212" : "#f8f9fa",
            paper: darkMode ? "#1e1e1e" : "#fff",
          },
        },
        typography: {
          fontFamily: "'Montserrat', sans-serif",
        },
      }),
    [darkMode]
  )

  const { text: typedText, blink } = useTypingEffect([
    "React Developer",
    "UI/UX Enthusiast",
    "Open Source Contributor",
  ])

  const handleContactSend = () => {
    setContactOpen(true)
  }

  const handleContactClose = () => {
    setContactOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="sticky"
        color="primary"
        elevation={4}
        sx={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(25, 118, 210, 0.8)" }}
      >
        <Toolbar
          id="back-to-top-anchor"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer", fontWeight: "bold" }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            Hemanth Thirumuru
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            {["about", "experience", "projects", "skills", "contact"].map(
              (section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  underline="none"
                  color="inherit"
                  sx={{
                    fontWeight: "600",
                    textTransform: "capitalize",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#607d8b",  // muted blue-grey instead of violet
                    },
                  }}
                >
                  {section}
                </Link>
              )
            )}
            <Link
              to="/resume"
              component={RouterLink}
              underline="none"
              color="inherit"
              sx={{
                fontWeight: "600",
                textTransform: "capitalize",
                cursor: "pointer",
                "&:hover": {
                  color: "#607d8b",
                },
              }}
            >
              Resume
            </Link>
            <IconButton
              aria-label="toggle dark mode"
              onClick={() => setDarkMode(!darkMode)}
              color="inherit"
              sx={{ ml: 1 }}
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          px: 2,
          boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.5)",
        }}
      >
        <Avatar
          sx={{
            bgcolor: theme.palette.primary.main,
            width: 140,
            height: 140,
            fontSize: 60,
            fontWeight: "bold",
            mb: 2,
            cursor: "default"
          }}
          src={profilePic}
          alt="Profile Picture"
        >
        </Avatar>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", mb: 1, letterSpacing: 2 }}
        >
          Hemanth Thirumuru
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontStyle: "italic",
            height: 40,
            whiteSpace: "nowrap",
            overflow: "hidden",
            borderRight: blink ? `3px solid` : "none",
            borderRightColor: theme.palette.primary.light,
            mx: "auto",
            width: { xs: "100%", sm: 350 },
          }}
        >
          {typedText}
        </Typography>
        <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
          <Link
            href="https://github.com"
            target="_blank"
            color="inherit"
            sx={{
              bgcolor: "rgba(255,255,255,0.2)",
              p: 1,
              borderRadius: 3,
              transition: "background-color 0.3s ease",
              "&:hover": { bgcolor: "rgba(255,255,255,0.4)" },
            }}
          >
            <GitHub fontSize="large" />
          </Link>
          <Link
            href="https://linkedin.com/in/hemanth-thirumuru-2ba0aa223/"
            target="_blank"
            color="inherit"
            sx={{
              bgcolor: "rgba(255,255,255,0.2)",
              p: 1,
              borderRadius: 3,
              transition: "background-color 0.3s ease",
              "&:hover": { bgcolor: "rgba(255,255,255,0.4)" },
            }}
          >
            <LinkedIn fontSize="large" />
          </Link>
          <Link
            href="mailto:thirumuruhemanth9160@gmail.com"
            color="inherit"
            sx={{
              bgcolor: "rgba(255,255,255,0.2)",
              p: 1,
              borderRadius: 3,
              transition: "background-color 0.3s ease",
              "&:hover": { bgcolor: "rgba(255,255,255,0.4)" },
            }}
          >
            <Email fontSize="large" />
          </Link>
        </Stack>
      </Box>

      {/* About Section */}
      <Container maxWidth="md" id="about" sx={{ my: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          I am a passionate React JS developer with a keen eye for clean and
          performant user interfaces. Experienced in building scalable
          frontend applications using latest technologies like React, Material-UI,
          and integrating with backend APIs.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Always eager to learn and contribute to open source, I focus on writing
          maintainable and accessible code while collaborating with teams for
          great user experiences.
        </Typography>
      </Container>

      {/* Experience Section */}
      <Container maxWidth="md" id="experience" sx={{ my: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Work Experience
        </Typography>
        <List sx={{
          position: "relative", "&::before": {
            content: '""',
            position: "absolute",
            left: 30,
            top: 0,
            bottom: 0,
            width: 4,
            bgcolor: theme.palette.primary.main,
            borderRadius: 2,
          }
        }}>
          {experiences.map((exp, i) => (
            <ListItem
              key={i}
              sx={{ alignItems: "flex-start", pl: 10, mb: 4, position: "relative" }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 17,
                  top: 8,
                  width: 16,
                  height: 16,
                  bgcolor: theme.palette.primary.main,
                  borderRadius: "50%",
                  border: `3px solid ${theme.palette.background.paper}`,
                }}
              />
              <ListItemText
                primary={
                  <Typography variant="h6" fontWeight="bold">
                    {exp.role} {exp.company}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      sx={{ display: "block", color: theme.palette.text.secondary }}
                    >
                      {exp.period}
                    </Typography>
                    <Typography sx={{ mt: 1 }}>{exp.description}</Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Container>

      {/* Projects Section */}
      <Container maxWidth="md" id="projects" sx={{ my: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map(({ title, description, techStack, github, demo }) => (
            <Grid item xs={12} sm={6} key={title}>
              <Card
                elevation={5}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" maxWidth="100%">
                    {techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        color="primary"
                        size="small"
                        sx={{ mb: 1 }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    href={github}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button size="small" variant="contained" href={demo} target="_blank">
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Skills Section */}
      <Container maxWidth="md" id="skills" sx={{ my: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={3}>
          {skills.map(({ name, level }) => (
            <Grid item xs={12} sm={6} key={name}>
              <Typography gutterBottom fontWeight="600">
                {name}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={level}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 5,
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      {/* <Container maxWidth="sm" id="contact" sx={{ my: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
          Contact Me
        </Typography>
        <Paper sx={{ p: 3, mt: 3 }} elevation={4}>
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              href={
                "mailto:thirumuruhemanth9160@gmail.com?subject=" +
                encodeURIComponent("Portfolio Inquiry") +
                "&body=" +
                encodeURIComponent(
                  "Hi Hemanth,%0D%0A%0D%0AI saw your portfolio and would like to get in touch with you!"
                )
              }
              size="large"
            >
              Email Me
            </Button>
          </Box>
          <Grid item xs={12}>
            <Typography color="text.secondary" gutterBottom textAlign="center">
              Phone: 9949977510<br />
              Email: <Link href="mailto:thirumuruhemanth9160@gmail.com">thirumuruhemanth9160@gmail.com</Link><br />
              <LocationOn sx={{ verticalAlign: "middle", mr: 0.5 }} color="action" />
              Nellore, Andhra Pradesh, India
            </Typography>
          </Grid>
        </Paper>

      </Container>
      */}
      <Container maxWidth="sm" id="contact" sx={{ my: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Contact Me
        </Typography>
        <Paper
          elevation={6}
          sx={{
            p: 3,
            maxWidth: 400,
            width: "100%",
            borderRadius: 4,
            mx: "auto",
            boxShadow: "0 6px 32px rgba(0,0,0,0.12)",
            textAlign: "center",
            bgcolor: "background.paper"
          }}
        >
          <Button
            variant="contained"
            color="primary"
            href={
              "mailto:thirumuruhemanth9160@gmail.com?subject=" +
              encodeURIComponent("Portfolio Inquiry") +
              "&body=" +
              encodeURIComponent("Hi Hemanth,%0D%0A%0D%0AI saw your portfolio and would like to get in touch with you!")
            }
            size="large"
            sx={{ mb: 2 }}
          >
            Email Me
          </Button>
          <Typography color="text.secondary" paragraph sx={{ mt: 1 }}>
            Phone: 9949977510<br />
            Email: <Link href="mailto:thirumuruhemanth9160@gmail.com">thirumuruhemanth9160@gmail.com</Link><br />
            <Box component="span" sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 1 }}>
              <LocationOn sx={{ verticalAlign: "middle", mr: 0.5 }} color="action" />
              Nellore, Andhra Pradesh, India
            </Box>
          </Typography>
        </Paper>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ bgcolor: theme.palette.primary.main, py: 3, mt: 6, color: "#fff", textAlign: "center" }}
      >
        <Stack direction="row" spacing={4} justifyContent="center" sx={{ mb: 1 }}>
          <Link href="https://github.com" target="_blank" color="inherit" aria-label="GitHub">
            <GitHub />
          </Link>
          <Link href="https://linkedin.com/in/hemanth-thirumuru-2ba0aa223/" target="_blank" color="inherit" aria-label="LinkedIn">
            <LinkedIn />
          </Link>
          <Link href="mailto:thirumuruhemanth9160@gmail.com" color="inherit" aria-label="Email">
            <Email />
          </Link>
        </Stack>
        <Typography variant="body2" sx={{ fontStyle: "italic", fontWeight: "600" }}>
          &copy; {new Date().getFullYear()} Hemanth Thirumuru. All rights reserved.
        </Typography>
      </Box>

      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  )
}
