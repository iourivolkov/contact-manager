import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Stack,
} from "@mui/material";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
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

const AddContactModal = ({ isAddModal, setIsAddModal }) => {
  const { walletAddresses, setAddresses } = useContext(AppContext);
  const handleClose = () => setIsAddModal(false);

  const [addressType, setAddressType] = useState("");
  const [newWalletAddress, setNewWalletAddress] = useState("");
  const [walletChain, setWalletChain] = useState("");

  const handleAddressType = (e) => {
    setAddressType(e.target.value);
  };

  const handleWalletAddress = (e) => {
    setNewWalletAddress(e.target.value);
  };

  const handleWalletChain = (e) => {
    setWalletChain(e.target.value);
  };

  // POST request to add addresses to PBLK database

  const addAddressHandler = async (e) => {
    e.preventDefault();

    const newAddress = {
      name: addressType,
      walletAddresses: newWalletAddress,
      chain: walletChain,
    };

    const response = await fetch(
      "https://pblk-ef287-default-rtdb.firebaseio.com/addresses.json",
      {
        method: "POST",
        body: JSON.stringify(newAddress),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setAddresses((prev) => [newAddress, ...prev]);
    setIsAddModal(false);
  };

  // const handleAddAddress = (e) => {
  //   e.preventDefault();
  //   const newAddress = {
  //     id: uuidv4(),
  //     name: addressType,
  //     walletAddress: newWalletAddress,
  //     chain: walletChain,
  //   };
  //   setAddresses((prev) => [newAddress, ...prev]);
  //   console.log(walletAddresses);
  //   console.log("New address added!");
  //   setIsAddModal(false);
  // };

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
          <form onSubmit={addAddressHandler}>
            <Stack spacing={3}>
              <TextField
                sx={{
                  fontFamily: "Futura",
                }}
                type="text"
                label="Address Type"
                type="text"
                onChange={handleAddressType}
                value={addressType}
              />
              <TextField
                sx={{
                  fontFamily: "Futura",
                }}
                label="Wallet Address"
                type="text"
                onChange={handleWalletAddress}
                value={newWalletAddress}
              />
              <TextField
                sx={{
                  fontFamily: "Futura",
                }}
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
