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
        marginTop: "4em",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack spacing={1}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextField label="Name" />
            <Button
              disableElevation
              disableRipple
              variant="contained"
              sx={{
                bgcolor: "#E1CF2C",
                color: "white",
              }}
            >
              <VisibilityIcon />
            </Button>
          </Stack>
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
            <TextField label="Mobile" />
            <Button
              disableElevation
              disableRipple
              variant="contained"
              sx={{
                bgcolor: "#3A8EDC",
                color: "white",
              }}
            >
              <EditIcon />
            </Button>
          </Stack>
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
            <TextField label="Email" />
            <Button
              disableElevation
              disableRipple
              sx={{
                bgcolor: "#E27C5B",
                color: "white",
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
        sx={{ width: 232, height: 232 }}
        image={man1}
        alt="Contact 1"
      />
    </Card>
  );
};

export default ContactCard;
