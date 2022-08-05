import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Stack,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const AddContactModal = ({ isAddModal, setIsAddModal }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setIsAddModal(false);

  // @todo - add Image to new contact

  return (
    <div>
      <Modal
        open={isAddModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              textTransform: "uppercase",
              fontFamily: "Futura",
              fontWeight: "bold",
            }}
          >
            New Address
          </Typography>
          <br />
          <br />
          <Stack spacing={3}>
            <TextField label="Address Type" />
            <TextField label="Wallet Address" />
            <TextField label="Chain" />
            <Button
              disableElevation
              disableRipple
              variant="contained"
              size="large"
              sx={{
                textTransform: "uppercase",
                color: "white",
                bgcolor: "green",
                borderRadius: "0",
              }}
            >
              Add Address
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default AddContactModal;
