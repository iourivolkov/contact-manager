import {
  Box,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Stack,
  Button,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateContactModal from "./Modals/UpdateContactModal";
import DeleteContactModal from "./Modals/DeleteContactModal";

const ContactCard = ({ name, mobile, email, image }) => {
  const handleViewContact = () => {
    console.log("Contact hidden!");
  };

  const handleEditContact = () => {
    console.log("Editing contact!!");
  };

  const handleDeleteContact = () => {
    console.log("Deleting contact!!");
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        width: "530px",
        borderRadius: "0",
        marginTop: "4em",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextField label="Name" placeholder={name} />
            <Button
              type="button"
              onClick={handleViewContact}
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
            <TextField label="Mobile" placeholder={mobile} />
            <Button
              onClick={handleEditContact}
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
            <TextField label="Email" placeholder={email} />
            <Button
              onClick={handleDeleteContact}
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
        image={image}
        alt="Contact photo"
      />
    </Card>
  );
};

export default ContactCard;
