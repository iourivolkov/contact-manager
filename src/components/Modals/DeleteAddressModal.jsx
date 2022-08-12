import { Box, Button, Typography, Modal, Stack } from "@mui/material";
import { useState, useContext } from "react";
import AppContext from "../../Context";

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

// DELETE request to remove address from PBLK database

const DeleteAddressModal = ({ isDeleteModal, setIsDeleteModal, id }) => {
  const { walletAddresses, setAddresses } = useContext(AppContext);

  const handleDeleteAddress = (id) => {
    fetch(
      `https://pblk-ef287-default-rtdb.firebaseio.com/addresses/${id}.json`,
      {
        method: "DELETE",
      }
    ).then((data) => {
      console.log(data);
      const filteredAddresses = walletAddresses?.filter((address) => {
        return address.id !== id;
      });
      setAddresses(filteredAddresses);
    });
  };
  // const filteredAddresses = walletAddresses?.filter((address) => {
  //   return address.id !== id;
  // });
  // setAddresses(filteredAddresses);

  return (
    <div>
      <Modal
        open={isDeleteModal}
        onClose={() => setIsDeleteModal(false)}
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
            Delete Address
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
              Are you sure you want to delete this address?
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                disableElevation
                disableRipple
                onClick={() => handleDeleteAddress(id)}
                variant="contained"
                size="large"
                sx={{
                  textTransform: "uppercase",
                  color: "white",
                  bgcolor: "red",
                  borderRadius: "0",
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

export default DeleteAddressModal;
