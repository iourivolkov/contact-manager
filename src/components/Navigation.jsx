import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const Navigation = ({ title }) => {
  return (
    <Box>
      <AppBar
        position="static"
        color="inherit"
        sx={{
          boxShadow: "none",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          marginLeft: "2em",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Figtree",
              fontWeight: "bold",
              fontSize: "1.7em",
              color: "black",
            }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
