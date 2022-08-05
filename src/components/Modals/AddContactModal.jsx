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
  const handleClose = () => setIsAddModal(false);

  const [addressType, setAddressType] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [walletChain, setWalletChain] = useState("");
  const [handleNewAddress, setHandleNewAddress] = useState(null);

  const handleAddressType = (e) => {
    setAddressType(e.target.value);
  };

  const handleWalletAddress = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleWalletChain = (e) => {
    setWalletChain(e.target.value);
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    setHandleNewAddress({
      id: Math.random(),
      name: addressType,
      walletAddress: walletAddress,
      chain: walletChain,
    });
    console.log(handleNewAddress);
  };

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
          <form onSubmit={handleNewAddress}>
            <Stack spacing={3}>
              <TextField
                label="Address Type"
                type="text"
                onChange={handleAddressType}
                value={addressType}
              />
              <TextField
                label="Wallet Address"
                type="text"
                onChange={handleWalletAddress}
                value={walletAddress}
              />
              <TextField
                label="Chain"
                type="text"
                onChange={handleWalletChain}
                value={walletChain}
              />
              <Button
                disableElevation
                type="submit"
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
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddContactModal;
