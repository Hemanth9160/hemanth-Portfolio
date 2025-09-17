import React from "react" 
import {
  Box,
  useScrollTrigger,
  Zoom,
} from "@mui/material" 

export default function ScrollTop(props) {
  const { children } = props 
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 120,
  }) 

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    ) 
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" }) 
    }
  } 
  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 32, right: 32 }}
      >
        {children}
      </Box>
    </Zoom>
  ) 
}