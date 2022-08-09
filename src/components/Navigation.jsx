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
              fontFamily: "Futura",
              fontWeight: "bold",
              fontSize: "1.7em",
              color: "black",
            }}
          >
            {title}
          </Typography>
          <Button
            disableElevation
            disableRipple
            variant="contained"
            sx={{
              textTransform: "uppercase",
              fontFamily: "Futura",
              fontWeight: "bold",
              borderRadius: "5px",
              marginRight: "5em",
              bgcolor: "#512DA8",
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
