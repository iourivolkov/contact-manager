import {
  Box,
  Button,
  Typography,
  Modal,
  Stack,
  TextField,
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

const UpdateAddressModal = ({ isEditModal, setIsEditModal }) => {
  return (
    <div>
      <Modal
        open={isEditModal}
        onClose={() => {
          setIsEditModal(false);
        }}
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
            Update Address
          </Typography>
          <br />

          <Stack
            spacing={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField label="Name" />
            <TextField label="Mobile" />
            <TextField label="Email" />
            <Stack direction="row" spacing={2}>
              <Button
                disableElevation
                disableRipple
                variant="contained"
                size="large"
                sx={{
                  textTransform: "uppercase",
                  color: "white",
                  bgcolor: "blue",
                }}
              >
                Update
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateAddressModal;
