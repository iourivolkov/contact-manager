import {
  Box,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import man1 from "../assets/images/man1.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ContactCard = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        width: "550px",
        borderRadius: "0",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack spacing={2}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextField label="Name" />
            <Button
              disableRipple
              variant="contained"
              sx={{
                bgcolor: "#E1CF2C",
                color: "white",
                boxShadow: "none",
              }}
            >
              <VisibilityIcon />
            </Button>
          </Stack>
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
            <TextField label="Mobile" />
            <Button
              disableRipple
              variant="contained"
              sx={{
                bgcolor: "#3A8EDC",
                color: "white",
                boxShadow: "none",
              }}
            >
              <EditIcon />
            </Button>
          </Stack>
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
            <TextField label="Email" />
            <Button
              disableRipple
              sx={{
                bgcolor: "#E27C5B",
                color: "white",
                boxShadow: "none",
              }}
            >
              <DeleteIcon />
            </Button>
          </Stack>
        </Stack>
      </CardContent>
      <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>

      <CardMedia
        component="img"
        sx={{ width: 240, height: 232, position: "fixed", left: 8 }}
        image={man1}
        alt="Contact 1"
      />
    </Card>
  );
};

export default ContactCard;
