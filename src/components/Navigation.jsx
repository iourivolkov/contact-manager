import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const Navigation = ({ title }) => {
  return (
    <Box sx={{ bgcolor: "white" }}>
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
              fontFamily: "Futura",
              fontWeight: "bold",
              fontSize: "1.7em",
              color: "black",
            }}
          >
            {title}
          </Typography>
          <Button
            disableRipple
            disableElevation
            variant="contained"
            size="large"
            sx={{
              textTransform: "uppercase",
              color: "white",
              bgcolor: "purple",
              fontFamily: "Futura",
              fontWeight: "bold",
              marginRight: "4em",
            }}
          >
            Connect
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
