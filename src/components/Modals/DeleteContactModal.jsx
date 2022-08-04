import { Box, Button, Typography, Modal, Stack } from "@mui/material";
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

const DeleteContactModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
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
            Delete Contact
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
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontFamily: "Futura",
                fontSize: "1em",
              }}
            >
              Are you sure you want to delete this contact?
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                disableElevation
                disableRipple
                variant="contained"
                size="large"
                sx={{
                  textTransform: "uppercase",
                  color: "#9E9E9E",
                  bgcolor: "white",
                  border: "2px solid grey",
                }}
              >
                Cancel
              </Button>
              <Button
                disableElevation
                disableRipple
                variant="contained"
                size="large"
                sx={{
                  textTransform: "uppercase",
                  color: "white",
                  bgcolor: "red",
                }}
              >
                Delete
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteContactModal;
